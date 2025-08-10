# AVEDU Web Leads Backend (Render-ready, Monorepo)

This is a minimal Express API that appends counseling form submissions into Google Sheets.

Columns expected in the sheet (A → G):
1. TIMESTAMP
2. NAME
3. NUMBER
4. EMAIL
5. COURSE
6. STATE
7. CITY

Payload fields accepted by the API (the server normalizes common variations):
- name or fullName (required)
- email (required)
- phone or contact or number (required)
- course (required)
- state or location (required)
- city (optional)

Endpoints:
- POST /api/submit-lead → Appends one row to the sheet
- GET  /healthz → Health check

Environment variables (create server/.env locally or set in Render):
- SHEET_ID: Your Google Sheet ID
- SHEET_NAME: Target sheet/tab name (e.g., WEB_LEADS)
- GOOGLE_SERVICE_ACCOUNT_JSON: Full JSON of the service account (as a single line with \n escaped, or base64-encoded)
- CORS_ORIGINS: Comma-separated origins allowed to call the API (default includes localhost:8080 and avedu.in)
- PORT: Optional (default 3001)

Local development:
1. cd server
2. cp .env.example .env  # Fill values
3. npm install
4. npm start
5. Test: curl -X POST http://localhost:3001/api/submit-lead -H "Content-Type: application/json" -d '{
   "name":"Test User","email":"user@example.com","phone":"9999999999","course":"MBA","state":"Delhi","city":"New Delhi"
}'

Render (Monorepo) setup:
- Create a new Web Service for the backend
  - Root Directory: server
  - Build Command: npm install
  - Start Command: npm start
  - Node version: 18+
  - Environment Variables: set SHEET_ID, SHEET_NAME, GOOGLE_SERVICE_ACCOUNT_JSON, CORS_ORIGINS

Frontend integration (once backend is live):
- POST to https://api.yourdomain.com/api/submit-lead with the fields above.
- Ensure your frontend origin is listed in CORS_ORIGINS.

Security notes:
- Do NOT commit real secrets. Use Render env vars.
- The server accepts base64-encoded GOOGLE_SERVICE_ACCOUNT_JSON as well if preferred.
