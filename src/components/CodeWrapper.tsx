import React, { useState, useRef } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeWrapperProps {
  children: React.ReactNode;
}

export const CodeWrapper: React.FC<CodeWrapperProps> = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    if (codeRef.current) {
      const codeElement = codeRef.current.querySelector('code');
      const text = codeElement ? codeElement.innerText : codeRef.current.innerText;
      
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    }
  };

  return (
    <div style={{ position: 'relative' }} className="code-block-wrapper">
      <button 
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '6px',
          padding: '0.4rem',
          color: copied ? '#10b981' : '#ccc',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s',
          zIndex: 10,
          backdropFilter: 'blur(4px)'
        }}
        title="نسخ الكود"
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        }}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <div ref={codeRef}>
        {children}
      </div>
    </div>
  );
};
