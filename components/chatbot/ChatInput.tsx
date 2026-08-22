import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

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

  const isValueEmpty = !value.trim();

  return (
    <form 
      onSubmit={handleSubmit} 
      className="border border-[#E2E8F0] bg-white rounded-full px-4 py-1.5 mx-4 mb-4 flex items-center justify-between shadow-sm focus-within:border-slate-350 transition-all duration-200"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        placeholder="Message..."
        className="w-full bg-transparent border-none text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-0 focus:border-none p-1.5 disabled:opacity-50"
      />
      
      <button
        type="submit"
        disabled={disabled || isValueEmpty}
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isValueEmpty 
            ? 'bg-[#E2E8F0] text-white cursor-not-allowed' 
            : 'bg-yellow-400 hover:bg-yellow-350 text-black cursor-pointer active:scale-95'
        }`}
        title="Send message"
      >
        <ArrowUp className="w-4 h-4 stroke-[2.5]" />
      </button>
    </form>
  );
}
