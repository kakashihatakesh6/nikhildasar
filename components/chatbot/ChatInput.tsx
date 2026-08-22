import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled: boolean;
}

export default function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || disabled) return;
    onSendMessage(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-3 bg-slate-950/60 border-t border-slate-800/80">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        placeholder={disabled ? "Generating response..." : "Ask me anything about Nikhil..."}
        className="flex-1 bg-slate-900 border border-slate-800 text-white placeholder-slate-500 rounded-xl px-4 py-2.5 text-xs md:text-sm focus:outline-none focus:border-yellow-400/60 transition-all duration-300 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="bg-yellow-400 hover:bg-yellow-350 disabled:bg-slate-800 disabled:text-slate-600 text-black px-4 py-2.5 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-95 disabled:scale-100 cursor-pointer disabled:cursor-not-allowed"
      >
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
