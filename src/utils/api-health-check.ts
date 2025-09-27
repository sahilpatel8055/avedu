// Utility to check backend API health and diagnose connection issues
export const checkApiHealth = async (): Promise<{
  isHealthy: boolean;
  error?: string;
  details?: any;
}> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch('https://avedu.onrender.com/healthz', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      mode: 'cors',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return {
        isHealthy: false,
        error: `Server returned ${response.status}: ${response.statusText}`,
        details: { status: response.status, statusText: response.statusText }
      };
    }

    const data = await response.json().catch(() => ({}));
    return {
      isHealthy: true,
      details: data
    };

  } catch (error: any) {
    return {
      isHealthy: false,
      error: error?.name === 'AbortError' 
        ? 'Request timeout - server may be down or too slow'
        : error?.message || 'Network error - check your internet connection',
      details: { 
        errorType: error?.name,
        message: error?.message 
      }
    };
  }
};

export const testApiSubmission = async (testPayload = {
  name: "Test User",
  email: "test@example.com", 
  phone: "9999999999",
  course: "Test Course",
  state: "Test State",
  city: "Test City"
}): Promise<{
  success: boolean;
  error?: string;
  details?: any;
}> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch('https://avedu.onrender.com/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(testPayload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data = await response.json().catch(() => ({}));
    
    if (!response.ok) {
      return {
        success: false,
        error: `API returned ${response.status}: ${data.error || response.statusText}`,
        details: { status: response.status, response: data }
      };
    }

    return {
      success: true,
      details: data
    };

  } catch (error: any) {
    return {
      success: false,
      error: error?.name === 'AbortError'
        ? 'API request timeout - server may be overloaded'  
        : error?.message || 'Network error during API call',
      details: {
        errorType: error?.name,
        message: error?.message
      }
    };
  }
};