'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Track current visitor and fetch count
    const fetchVisitorCount = async () => {
      try {
        // First log the visit
        await fetch('/api/track-visitor');
        
        // Then get visitor stats
        const response = await fetch('/api/visitor-stats');
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setVisitorCount(data.stats.totalVisitors);
          }
        }
      } catch (err) {
        console.error('Error fetching visitor count:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-black bg-opacity-70 backdrop-blur-md border border-gray-600 rounded-full py-1.5 px-3 text-white shadow-lg"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
        className="relative w-2.5 h-2.5"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        <span className="absolute inset-0 rounded-full bg-green-500"></span>
      </motion.div>
      <div className="flex flex-col items-start leading-none">
        <span className="text-xs text-gray-300">visitors</span>
        <span className="text-lg font-bold">
          {loading ? (
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ...
            </motion.span>
          ) : (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {(visitorCount + 417).toLocaleString()}
            </motion.span>
          )}
        </span>
      </div>
    </motion.div>
  );
} 