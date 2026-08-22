import React from 'react';

export default function ChatLoading() {
  return (
    <div className="flex flex-col items-start mb-4">
      <div className="bg-[#F4F6F6] border border-[#F4F6F6] px-4 py-3 rounded-[20px] max-w-[80%] flex items-center gap-1.5 shadow-sm">
        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
      </div>
      <span className="text-[10px] text-slate-400 mt-1 ml-2 font-medium">
        AI assistant
      </span>
    </div>
  );
}
