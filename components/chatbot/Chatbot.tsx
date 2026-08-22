'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, RefreshCw, AlertTriangle } from 'lucide-react';
import ChatMessage, { MessageProps } from './ChatMessage';
import ChatInput from './ChatInput';
import ChatLoading from './ChatLoading';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi, I'm Nikhil's AI assistant! 🚀\n\nI can answer any questions about his skills, work experience, projects, or even fetch live database visitor statistics for this site.\n\nWhat would you like to know?"
      }
    ]);
  }, []);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: MessageProps = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);
    setError(null);

    try {
      const historyToSend = messages
        .filter((_, idx) => idx > 0)
        .map(msg => ({ role: msg.role, content: msg.content }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyToSend
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Server responded with an error.');
      }

      const data = await response.json();
      if (data.success) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      } else {
        throw new Error(data.error || 'Failed to generate response.');
      }
    } catch (err: any) {
      console.error('Chat error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Chat cleared! 🚀 Ask me anything about Nikhil's skills, experience, projects, or live database statistics."
      }
    ]);
    setError(null);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-20 right-4 z-50 w-12 h-12 rounded-full bg-yellow-400 hover:bg-yellow-350 text-black shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-36 right-4 z-50 w-[320px] xs:w-[350px] sm:w-[400px] h-[500px] max-h-[70vh] bg-slate-950/95 backdrop-blur-xl border border-slate-800/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 bg-slate-900/60 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
                </span>
                <div>
                  <h3 className="font-extrabold text-xs text-slate-100 uppercase tracking-widest">Nikhil's Assistant</h3>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Online</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClearChat}
                  title="Clear Conversation"
                  className="p-1.5 text-slate-400 hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-800/60"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-800/60"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((msg, index) => (
                <ChatMessage key={index} role={msg.role} content={msg.content} />
              ))}
              
              {loading && <ChatLoading />}

              {error && (
                <div className="flex items-start gap-2 bg-red-950/20 border border-red-500/30 p-3 rounded-2xl mb-4 text-xs text-red-400">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Error:</span> {error}
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <ChatInput onSendMessage={handleSendMessage} disabled={loading} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
