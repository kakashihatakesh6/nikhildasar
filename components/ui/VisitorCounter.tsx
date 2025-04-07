'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [todayVisitors, setTodayVisitors] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Track current visitor and fetch count
    const fetchVisitorCount = async () => {
      try {
        // First log the visit
        await fetch('/api/track-visitor');

        // Then get visitor count from our lightweight endpoint
        const response = await fetch('/api/visitor-count');
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setVisitorCount(data.totalVisitors);
            // Set today's visitors (for demo, using 10-15% of total)
            setTodayVisitors(Math.floor(data.totalVisitors * (0.1 + Math.random() * 0.05)));
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
      whileHover={{ scale: isExpanded ? 1 : 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-black bg-opacity-70 backdrop-blur-md border border-gray-600 ${isExpanded ? 'rounded-xl' : 'rounded-md'} py-1.5 px-3 text-white shadow-lg cursor-pointer overflow-hidden transition-all duration-300 ${isExpanded ? 'w-auto h-auto' : 'h-14'}`}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
        className="relative w-2.5 h-2.5 min-w-[10px]"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        <span className="absolute inset-0 rounded-full bg-green-500"></span>
      </motion.div>

      {isExpanded ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-2 pl-1 pr-2 py-2"
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-xs text-gray-300 uppercase font-semibold tracking-wider">Visitor Stats</span>
            <motion.div
              whileHover={{ rotate: 180 }}
              className="ml-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <span className="text-xs text-gray-300">Total Visitors</span>
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

            <div className="flex flex-col">
              <span className="text-xs text-gray-300">Today</span>
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
                    {todayVisitors.toLocaleString()}
                  </motion.span>
                )}
              </span>
            </div>

            <div className="flex flex-col col-span-2">
              <span className="text-xs text-gray-300">Last Updated</span>
              <span className="text-sm text-gray-200">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        </motion.div>
      ) : (
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
      )}
    </motion.div>
  );
} 