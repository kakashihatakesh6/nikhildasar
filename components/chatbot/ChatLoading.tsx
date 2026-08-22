import React from 'react';

export default function ChatLoading() {
  return (
    <div className="flex justify-start items-end gap-2 mb-4">
      <div className="w-8 h-8 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-xs font-bold text-yellow-400 select-none">
        AI
      </div>
      <div className="bg-slate-900/80 border border-slate-800/80 px-4 py-3 rounded-2xl rounded-bl-none max-w-[80%] flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
      </div>
    </div>
  );
}
