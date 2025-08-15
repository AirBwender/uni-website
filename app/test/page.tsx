'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function TestPage() {
  const [testResult, setTestResult] = useState<any>(null);
  const [seedResult, setSeedResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/test-db');
      const data = await response.json();
      setTestResult(data);
    } catch (error) {
      setTestResult({ error: 'Failed to test connection' });
    }
    setLoading(false);
  };

  const seedDatabase = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/seed', { method: 'POST' });
      const data = await response.json();
      setSeedResult(data);
    } catch (error) {
      setSeedResult({ error: 'Failed to seed database' });
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Database Test Page</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Test Database Connection</h2>
          <Button onClick={testConnection} disabled={loading}>
            {loading ? 'Testing...' : 'Test Connection'}
          </Button>
          {testResult && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <pre>{JSON.stringify(testResult, null, 2)}</pre>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Seed Database</h2>
          <Button onClick={seedDatabase} disabled={loading}>
            {loading ? 'Seeding...' : 'Seed Database'}
          </Button>
          {seedResult && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <pre>{JSON.stringify(seedResult, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
