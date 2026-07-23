'use client';
import React, { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between transition-all duration-700"
      style={{
        background: scrolled
          ? 'rgba(11,11,15,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(196,199,204,0.06)' : '1px solid transparent',
      }}
    >
      <AppLogo
        text="LEGACY"
        size={28}
        className="tracking-[0.35em] text-mercury font-display font-light"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
      <nav className="hidden md:flex items-center gap-10">
        {['Archive', 'Process', 'For Whom']?.map((item) => (
          <a
            key={item}
            href={`#${item?.toLowerCase()?.replace(' ', '-')}`}
            className="text-xs tracking-[0.2em] uppercase text-mercury-dim hover-rose transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="w-28 flex justify-end">
        <div className="w-1.5 h-1.5 rounded-full pulse-ring"
          style={{ background: 'var(--lilac)' }}
        />
      </div>
    </header>
  );
}