'use client';

import { useEffect, useState } from 'react';
import { formatISTDate } from '@/lib/utils';

type VisitorStats = {
  totalVisitors: number;
  visitorsByCountry: Array<{
    country: string;
    _count: { ipAddress: number };
  }>;
  visitorsByCity: Array<{
    city: string;
    _count: { ipAddress: number };
  }>;
  recentVisitors: Array<{
    ipAddress: string;
    country: string;
    city: string;
    visitedAt: string;
  }>;
};

export default function VisitorStats() {
  const [stats, setStats] = useState<VisitorStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Track current visitor
    fetch('/api/track-visitor')
      .catch(err => console.error('Error tracking visitor:', err));

    // Fetch visitor stats
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/visitor-stats');
        if (!response.ok) {
          throw new Error('Failed to fetch visitor statistics');
        }
        const data = await response.json();
        if (data.success) {
          setStats(data.stats);
        } else {
          throw new Error(data.error || 'Unknown error');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-2 text-center text-slate-400">
        Loading visitor stats...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-2 text-center text-red-400">
        Error: {error}
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <div className="w-full max-w-[720px] mx-auto mb-4 p-4 bg-slate-800 rounded-lg">
      <h2 className="text-xl font-semibold text-slate-200 mb-2">Visitor Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-700 p-3 rounded-md">
          <h3 className="text-md font-medium text-slate-300 mb-1">Total Visitors</h3>
          <p className="text-2xl font-bold text-white">{stats.totalVisitors}</p>
        </div>
        
        <div className="bg-slate-700 p-3 rounded-md">
          <h3 className="text-md font-medium text-slate-300 mb-1">Top Countries</h3>
          <ul className="text-sm text-slate-200">
            {stats.visitorsByCountry.slice(0, 3).map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.country}</span>
                <span>{item._count.ipAddress}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-slate-700 p-3 rounded-md">
          <h3 className="text-md font-medium text-slate-300 mb-1">Top Cities</h3>
          <ul className="text-sm text-slate-200">
            {stats.visitorsByCity.slice(0, 3).map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.city}</span>
                <span>{item._count.ipAddress}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-3 bg-slate-700 p-3 rounded-md">
        <h3 className="text-md font-medium text-slate-300 mb-1">Recent Visitors</h3>
        <div className="text-sm text-slate-200 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="text-left py-1">Country</th>
                <th className="text-left py-1">City</th>
                <th className="text-left py-1">Visited At (IST)</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentVisitors.map((visitor, index) => (
                <tr key={index} className="border-b border-slate-600">
                  <td className="py-1">{visitor.country}</td>
                  <td className="py-1">{visitor.city}</td>
                  <td className="py-1">{new Date(visitor.visitedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 