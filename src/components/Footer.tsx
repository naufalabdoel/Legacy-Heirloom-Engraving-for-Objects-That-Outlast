import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 flex flex-col items-center gap-4 border-t"
      style={{ borderColor: 'rgba(196,199,204,0.06)' }}
    >
      <div className="flex items-center gap-3">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-mercury-dim hover-rose transition-colors duration-300 p-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="3"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
        </a>
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
          className="text-mercury-dim hover-rose transition-colors duration-300 p-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.1-2 .2-2.9.3-1 1.8-7.5 1.8-7.5s-.5-.9-.5-2.3c0-2.2 1.3-3.8 2.8-3.8 1.3 0 2 1 2 2.2 0 1.3-.9 3.3-1.3 5.2-.4 1.5.7 2.8 2.2 2.8 2.6 0 4.4-3.3 4.4-7.2 0-3-2-5.2-5-5.2-3.5 0-5.5 2.6-5.5 5.3 0 1 .4 2.1.9 2.7.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.4 0 .2-.1.3-.3.2-2-.9-3.2-3.8-3.2-6.1 0-4.9 3.6-9.5 10.4-9.5 5.5 0 9.7 3.9 9.7 9.1 0 5.4-3.4 9.8-8.2 9.8-1.6 0-3.1-.8-3.6-1.8l-1 3.7c-.4 1.4-1.3 3.1-1.9 4.2.4.1.9.2 1.4.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
          </svg>
        </a>
      </div>
      <p className="text-xs tracking-[0.2em] uppercase text-mercury-dim" style={{ fontSize: '11px' }}>
        © 2026 Legacy. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        <a href="#" className="text-xs text-mercury-dim hover-rose transition-colors duration-300" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>Privacy</a>
        <span className="text-mercury-dim opacity-30">·</span>
        <a href="#" className="text-xs text-mercury-dim hover-rose transition-colors duration-300" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>Terms</a>
      </div>
    </footer>
  );
}