import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { checkApiHealth, testApiSubmission } from '@/utils/api-health-check';

const ApiHealthTester: React.FC = () => {
  const [healthStatus, setHealthStatus] = useState<any>(null);
  const [submissionStatus, setSubmissionStatus] = useState<any>(null);
  const [testing, setTesting] = useState(false);

  const runHealthCheck = async () => {
    setTesting(true);
    setHealthStatus(null);
    setSubmissionStatus(null);

    // Test health endpoint
    const healthResult = await checkApiHealth();
    setHealthStatus(healthResult);

    // If health check passes, test submission
    if (healthResult.isHealthy) {
      const submissionResult = await testApiSubmission();
      setSubmissionStatus(submissionResult);
    }

    setTesting(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🔧 API Health Tester
          <Button 
            onClick={runHealthCheck}
            disabled={testing}
            size="sm"
          >
            {testing ? 'Testing...' : 'Test API'}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {healthStatus && (
          <div>
            <h3 className="font-semibold mb-2">Health Check:</h3>
            <Badge variant={healthStatus.isHealthy ? 'default' : 'destructive'}>
              {healthStatus.isHealthy ? '✅ Healthy' : '❌ Unhealthy'}
            </Badge>
            {healthStatus.error && (
              <p className="text-sm text-red-600 mt-1">{healthStatus.error}</p>
            )}
            {healthStatus.details && (
              <pre className="text-xs bg-gray-100 p-2 rounded mt-2 overflow-auto">
                {JSON.stringify(healthStatus.details, null, 2)}
              </pre>
            )}
          </div>
        )}

        {submissionStatus && (
          <div>
            <h3 className="font-semibold mb-2">Submission Test:</h3>
            <Badge variant={submissionStatus.success ? 'default' : 'destructive'}>
              {submissionStatus.success ? '✅ Success' : '❌ Failed'}
            </Badge>
            {submissionStatus.error && (
              <p className="text-sm text-red-600 mt-1">{submissionStatus.error}</p>
            )}
            {submissionStatus.details && (
              <pre className="text-xs bg-gray-100 p-2 rounded mt-2 overflow-auto">
                {JSON.stringify(submissionStatus.details, null, 2)}
              </pre>
            )}
          </div>
        )}

        {!healthStatus && !testing && (
          <p className="text-gray-600 text-sm">
            Click "Test API" to check if the counseling form backend is working properly.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ApiHealthTester;