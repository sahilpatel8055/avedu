import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { google } from 'googleapis';
import dotenv from 'dotenv';

// Load env from ./server/.env when running locally
dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 3001;
const SHEET_ID = process.env.SHEET_ID || '1bcp4UNpXdUFaaia3kpXsLTVFW_9eT8i2OpuAXSwJoIY';
const SHEET_NAME = process.env.SHEET_NAME || 'Avedu-MU';

if (!SHEET_ID) {
  console.warn('[WARN] SHEET_ID is not set. API will fail to write until configured.');
}

// Domains allowed to call this API
const ALLOWED_ORIGINS = (process.env.CORS_ORIGINS || 'http://localhost:8080,https://www.avedu.in,https://avedu.in')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

function getServiceAccountCredentials() {
  const jsonString = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!jsonString) throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON is not set');
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    // Support base64-encoded JSON as a fallback
    try {
      const decoded = Buffer.from(jsonString, 'base64').toString('utf-8');
      return JSON.parse(decoded);
    } catch (e) {
      throw new Error('Invalid GOOGLE_SERVICE_ACCOUNT_JSON (not valid JSON or base64-encoded JSON)');
    }
  }
}

const app = express();

// CORS
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow tools like curl/Postman
      if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false,
  })
);

app.use(bodyParser.json({ limit: '1mb' }));

app.get('/healthz', (_req, res) => {
  res.status(200).json({ ok: true, service: 'avedu-web-leads', time: new Date().toISOString() });
});

// Normalize payload keys from various forms
function normalizePayload(body) {
  const name = body.fullName || body.name || '';
  const email = body.email || '';
  const phone = body.phone || body.contact || body.number || '';
  const course = body.course || body.desiredCourse || '';
  const state = body.state || body.location || '';
  const city = body.city || '';
  return { name, email, phone, course, state, city };
}

app.post('/api/submit-lead', async (req, res) => {
  try {
    const { name, email, phone, course, state, city } = normalizePayload(req.body || {});

    // Basic validation (city is optional)
    if (!name || !email || !phone || !course || !state) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    if (!SHEET_ID) {
      return res.status(500).json({ success: false, error: 'SHEET_ID is not configured on the server' });
    }

    const credentials = getServiceAccountCredentials();
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    // Timestamp in IST (Asia/Kolkata)
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A:G`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        // Order: TIMESTAMP, NAME, NUMBER, EMAIL, COURSE, STATE, CITY
        values: [[timestamp, name, phone, email, course, state, city]],
      },
    });

    res.status(200).json({ success: true, message: 'Lead submitted successfully' });
  } catch (error) {
    console.error('[submit-lead:error]', error);
    res.status(500).json({ success: false, error: error.message || 'Internal server error' });
  }
});

app.use((err, _req, res, _next) => {
  if (err && err.message && err.message.startsWith('CORS')) {
    return res.status(403).json({ success: false, error: err.message });
  }
  return res.status(500).json({ success: false, error: 'Unexpected server error' });
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
  console.log('Allowed origins:', ALLOWED_ORIGINS.join(', '));
});
