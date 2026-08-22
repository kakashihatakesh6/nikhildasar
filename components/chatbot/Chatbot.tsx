'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  X, 
  RefreshCw, 
  AlertTriangle, 
  ChevronLeft, 
  MoreHorizontal, 
  Maximize2, 
  Minimize2, 
  Download, 
  Info, 
  ChevronDown 
} from 'lucide-react';
import ChatMessage, { MessageProps } from './ChatMessage';
import ChatInput from './ChatInput';
import ChatLoading from './ChatLoading';

const PREDEFINED_QUERIES = [
  "What are Nikhil's top technical skills?",
  "Tell me about his recent projects.",
  "What is his professional experience?",
  "What are the live traffic statistics for this site?"
];

const QUICK_REPLIES = [
  "That helped 👍", 
  "Show me more 👀", 
  "Talk to a person 👤"
];

// High-fidelity custom robot avatar resembling MBot
const MBotAvatar = () => (
  <div className="w-9 h-9 rounded-full bg-[#FEF3C7] flex items-center justify-center border border-[#FDE68A]/30 select-none relative flex-shrink-0">
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-600 w-[22px] h-[22px]">
      {/* Sprout leaves on top */}
      <path d="M14 6C14 6 15 4 17 4C19 4 19 6 17 6C15 6 14 6 14 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 6C14 6 13 4 11 4C9 4 9 6 11 6C13 6 14 6 14 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 9V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Robot Head */}
      <rect x="7" y="9" width="14" height="11" rx="4" stroke="currentColor" strokeWidth="1.5" fill="white"/>
      {/* Eyes */}
      <circle cx="11" cy="14" r="1.2" fill="currentColor"/>
      <circle cx="17" cy="14" r="1.2" fill="currentColor"/>
      {/* Smile mouth */}
      <path d="M12 17C12.5 17.8 15.5 17.8 16 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Headphones/Ears */}
      <rect x="5" y="12" width="2" height="5" rx="1" fill="currentColor"/>
      <rect x="21" y="12" width="2" height="5" rx="1" fill="currentColor"/>
      {/* Neck/collar */}
      <path d="M11 20H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </div>
);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showScrollBottomButton, setShowScrollBottomButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Monitor screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Monitor scroll height to show/hide scroll-to-bottom helper button
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      setShowScrollBottomButton(scrollHeight - scrollTop - clientHeight > 150);
    }
  };

  const scrollToBottom = (behavior: 'smooth' | 'auto' = 'smooth') => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior
      });
    }
  };

  // Scroll to bottom when messages update or during loading state
  useEffect(() => {
    // Small delay to ensure newly rendered message sizes are factored in
    const timer = setTimeout(() => {
      scrollToBottom('smooth');
    }, 100);
    return () => clearTimeout(timer);
  }, [messages, loading]);

  // Load welcome message on startup
  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: "👋 Hi there! How can I help today?\n\nAsk me anything about Nikhil's skills, work experience, projects, or live visitor traffic."
      }
    ]);
  }, []);

  // Show tooltip after a brief delay on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Dismiss tooltip when chat is opened
  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
    }
  }, [isOpen]);

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
        content: "Hi there! 👋 Ask me anything about Nikhil's skills, experience, projects, or live database statistics."
      }
    ]);
    setError(null);
  };

  // Utility to download chat history
  const handleDownloadTranscript = () => {
    const text = messages
      .map(msg => `${msg.role === 'user' ? 'User' : 'MBot'}: ${msg.content}`)
      .join('\n\n');
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mbot_chat_transcript.txt';
    link.click();
    URL.revokeObjectURL(url);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Inject custom scrollbar style tag */}
      <style dangerouslySetInnerHTML={{__html: `
        .chat-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .chat-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .chat-scrollbar::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 10px;
        }
        .chat-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #CBD5E1;
        }
      `}} />

      {/* Floating Animated Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 400,
                damping: 25
              }
            }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="fixed bottom-22 right-6 z-50 flex items-center gap-2 bg-yellow-400 text-black px-4 py-2.5 rounded-2xl shadow-xl select-none font-bold text-xs uppercase tracking-wider cursor-pointer border border-yellow-350"
            onClick={() => setIsOpen(true)}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            <span>Ask my AI! 👋</span>
            
            <div className="absolute top-full right-5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-yellow-400" />
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="ml-2 hover:bg-black/10 rounded p-0.5 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-5 right-6 z-50 w-14 h-14 rounded-full bg-yellow-400 hover:bg-yellow-350 text-black shadow-xl flex items-center justify-center cursor-pointer transition-all duration-300 border border-yellow-300/40"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? (
          <ChevronDown className="w-6 h-6 stroke-[2.5]" />
        ) : (
          <MessageSquare className="w-6 h-6 stroke-[2.2]" />
        )}
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95, width: isMobile ? '90vw' : (isExpanded ? 720 : 400) }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              width: isMobile ? '90vw' : (isExpanded ? 720 : 400),
              height: 'calc(100vh - 105px)'
            }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="fixed top-5 right-6 z-50 bg-white border border-[#E2E8F0] rounded-[24px] shadow-2xl flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-0.5 -ml-1"
                  title="Minimize chat"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
                </button>
                <MBotAvatar />
                <div>
                  <h3 className="font-bold text-slate-800 text-[15px] leading-tight">AI assistant</h3>
                  <span className="text-[11px] text-slate-400">Chat with Nikhil's AI assistant</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClearChat}
                  title="Clear Conversation"
                  className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-50"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-50 relative"
                  title="More actions"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-30" onClick={() => setIsDropdownOpen(false)} />
                    <div className="absolute right-8 top-14 z-40 bg-white border border-[#E2E8F0] rounded-xl shadow-lg py-1.5 w-48 text-slate-700">
                      <button
                        onClick={() => {
                          setIsExpanded(!isExpanded);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 text-left transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            <Minimize2 className="w-4 h-4 text-slate-500" />
                            <span>Collapse window</span>
                          </>
                        ) : (
                          <>
                            <Maximize2 className="w-4 h-4 text-slate-500" />
                            <span>Expand window</span>
                          </>
                        )}
                      </button>
                      <button
                        onClick={handleDownloadTranscript}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 text-left transition-colors border-t border-slate-100"
                      >
                        <Download className="w-4 h-4 text-slate-500" />
                        <span>Download transcript</span>
                      </button>
                    </div>
                  </>
                )}

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-50"
                  title="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scroll-to-bottom Floating Button */}
            <AnimatePresence>
              {showScrollBottomButton && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  onClick={() => scrollToBottom('smooth')}
                  className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center shadow-md cursor-pointer hover:bg-slate-50 text-slate-800 hover:text-amber-600 active:scale-90 transition-all"
                  title="Scroll to bottom"
                >
                  <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Message Stream */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-4 space-y-4 chat-scrollbar relative bg-white"
            >
              {/* Notice Banner */}
              <div className="bg-[#F4F6F6] rounded-2xl p-3 mx-0.5 flex items-start gap-2.5 border border-[#E2E8F0] shadow-sm select-none">
                <Info className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-500 text-[11px] leading-relaxed italic font-medium">
                  This chat session is recorded or reviewed by Nikhil for training and portfolio presentation purposes.
                </span>
              </div>

              {messages.map((msg, index) => (
                <ChatMessage key={index} role={msg.role} content={msg.content} />
              ))}
              
              {/* Predefined / Suggested questions rendered when conversation starts */}
              {messages.length === 1 && !loading && (
                <div className="flex flex-col gap-2 mt-4 pl-1 pr-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1.5">Suggested Questions:</span>
                  <div className="flex flex-col gap-2">
                    {PREDEFINED_QUERIES.map((query, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(query)}
                        className="text-left text-xs bg-white hover:bg-yellow-50/50 hover:text-amber-600 border border-[#E2E8F0] hover:border-yellow-400/40 px-4 py-3 rounded-xl text-slate-700 transition-all duration-200 font-semibold cursor-pointer shadow-sm active:scale-[0.99]"
                      >
                        {query}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Dynamic quick reply suggestions (shown when last message is assistant's response) */}
              {messages.length > 1 && !loading && messages[messages.length - 1].role === 'assistant' && (
                <div className="flex flex-wrap gap-2 mt-4 justify-end">
                  {QUICK_REPLIES.map((reply, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(reply)}
                      className="border border-[#E2E8F0] bg-white hover:bg-yellow-50/50 hover:text-amber-600 hover:border-yellow-400/40 px-4 py-2 rounded-full text-xs font-semibold text-slate-700 cursor-pointer shadow-sm transition-all duration-200 active:scale-95"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {loading && <ChatLoading />}

              {error && (
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 p-3 rounded-2xl text-xs text-red-600">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Error:</span> {error}
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input Box */}
            <ChatInput onSendMessage={handleSendMessage} disabled={loading} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
