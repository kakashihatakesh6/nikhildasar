import React from 'react';

export interface MessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatMessage({ role, content }: MessageProps) {
  const isUser = role === 'user';

  // Lightweight custom markdown-style formatter
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    let isInsideList = false;
    const elements: React.ReactNode[] = [];

    const parseFormat = (str: string) => {
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;

      // Matches bold (**bold**), code (`code`), and links ([text](url))
      const regex = /(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\))/g;
      let match;
      let keyCounter = 0;

      while ((match = regex.exec(str)) !== null) {
        if (match.index > lastIndex) {
          parts.push(str.substring(lastIndex, match.index));
        }

        const token = match[0];
        if (token.startsWith('**') && token.endsWith('**')) {
          parts.push(<strong key={keyCounter++} className="font-extrabold text-yellow-400">{token.slice(2, -2)}</strong>);
        } else if (token.startsWith('`') && token.endsWith('`')) {
          parts.push(<code key={keyCounter++} className="bg-slate-950 px-1.5 py-0.5 rounded text-emerald-400 font-mono text-xs">{token.slice(1, -1)}</code>);
        } else if (token.startsWith('[') && token.includes('](')) {
          const closeBracket = token.indexOf(']');
          const linkText = token.substring(1, closeBracket);
          const linkUrl = token.substring(closeBracket + 2, token.length - 1);
          parts.push(
            <a
              key={keyCounter++}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 underline font-semibold transition-colors break-all"
            >
              {linkText}
            </a>
          );
        }

        lastIndex = regex.lastIndex;
      }

      if (lastIndex < str.length) {
        parts.push(str.substring(lastIndex));
      }

      return parts.length > 0 ? parts : str;
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        if (!isInsideList) {
          isInsideList = true;
        }
        elements.push(
          <li key={`li-${index}`} className="ml-4 list-disc text-slate-300 text-xs md:text-sm leading-relaxed mb-1">
            {parseFormat(trimmed.substring(2))}
          </li>
        );
      } else {
        if (isInsideList) {
          isInsideList = false;
        }
        if (trimmed === '') {
          elements.push(<div key={`br-${index}`} className="h-2" />);
        } else {
          elements.push(
            <p key={`p-${index}`} className="text-slate-300 text-xs md:text-sm leading-relaxed mb-1.5 break-words">
              {parseFormat(trimmed)}
            </p>
          );
        }
      }
    });

    return elements;
  };

  return (
    <div className={`flex items-end gap-2 mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-xs font-bold text-yellow-400 select-none">
          AI
        </div>
      )}
      <div
        className={`px-4 py-3 rounded-2xl max-w-[80%] shadow-md border ${
          isUser
            ? 'bg-yellow-400 border-yellow-500 text-black rounded-br-none font-medium'
            : 'bg-slate-900/80 border-slate-800/80 text-slate-200 rounded-bl-none'
        }`}
      >
        {isUser ? (
          <p className="text-xs md:text-sm leading-relaxed break-words font-semibold">{content}</p>
        ) : (
          <div className="flex flex-col">{renderContent(content)}</div>
        )}
      </div>
    </div>
  );
}
