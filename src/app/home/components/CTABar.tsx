'use client';
import React, { useEffect, useState, useRef } from 'react';


type LegacyFor = '' | 'Myself' | 'My Family' | 'A Gift' | 'My Company';

export default function CTABar() {
  const [visible, setVisible] = useState(false);
  const [deep, setDeep] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [legacyFor, setLegacyFor] = useState<LegacyFor>('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = scrollY / docHeight;

      setVisible(scrollY > window.innerHeight * 0.4);
      setDeep(progress > 0.35);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;
    // Form submission placeholder — connect to backend/email service here
    setSubmitted(true);
    setTimeout(() => {
      setExpanded(false);
      setSubmitted(false);
      setFirstName('');
      setEmail('');
      setLegacyFor('');
    }, 3500);
  };

  const LEGACY_OPTIONS: LegacyFor[] = ['Myself', 'My Family', 'A Gift', 'My Company'];

  return (
    <div
      className={`cta-bar ${visible ? 'visible' : ''} ${deep ? 'deep' : ''}`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4 min-w-0">
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: 'var(--lilac)', opacity: 0.7 }}
          />
          <p
            className="text-xs tracking-[0.2em] uppercase text-mercury-dim hidden sm:block truncate"
          >
            Waitlist now open · Q4 2026 commissions
          </p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Explore Archive */}
          <a
            href="#archive"
            className="btn-ghost px-5 py-2.5 rounded-full text-xs tracking-[0.15em] uppercase hidden md:block"
            onClick={() => setExpanded(false)}
          >
            Explore Archive
          </a>

          {/* Reserve CTA */}
          {!submitted ? (
            <button
              className="btn-primary px-6 py-2.5 rounded-full text-xs tracking-[0.15em] uppercase font-medium"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? 'Close' : 'Reserve Your Crest'}
            </button>
          ) : (
            <div
              className="px-6 py-2.5 rounded-full text-xs tracking-[0.15em] uppercase"
              style={{ color: 'var(--lilac)', border: '1px solid rgba(212,193,236,0.2)' }}
            >
              ✦ Reserved
            </div>
          )}
        </div>
      </div>

      {/* Expanded form */}
      <div className={`waitlist-expanded ${expanded ? 'open' : ''}`}>
        <div
          className="px-6 lg:px-16 pb-6 pt-2"
          style={{ borderTop: '1px solid rgba(196,199,204,0.06)' }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-start sm:items-end gap-4 max-w-2xl"
          >
            {/* First name */}
            <div className="flex-1 min-w-0">
              <label
                htmlFor="cta-name"
                className="block text-xs tracking-[0.15em] uppercase text-mercury-dim mb-2"
              >
                First Name
              </label>
              <input
                id="cta-name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Edward"
                className="w-full px-4 py-2.5 rounded-lg text-sm text-mercury"
                style={{
                  background: 'rgba(196,199,204,0.05)',
                  border: '1px solid rgba(196,199,204,0.12)',
                }}
                required
                autoComplete="given-name"
              />
            </div>

            {/* Email */}
            <div className="flex-1 min-w-0">
              <label
                htmlFor="cta-email"
                className="block text-xs tracking-[0.15em] uppercase text-mercury-dim mb-2"
              >
                Email
              </label>
              <input
                id="cta-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="edward@familyoffice.com"
                className="w-full px-4 py-2.5 rounded-lg text-sm text-mercury"
                style={{
                  background: 'rgba(196,199,204,0.05)',
                  border: '1px solid rgba(196,199,204,0.12)',
                }}
                required
                autoComplete="email"
              />
            </div>

            {/* Optional — whose legacy */}
            <div className="flex-1 min-w-0">
              <label
                htmlFor="cta-for"
                className="block text-xs tracking-[0.15em] uppercase text-mercury-dim mb-2"
              >
                Whose Legacy? <span className="opacity-50">(optional)</span>
              </label>
              <select
                id="cta-for"
                value={legacyFor}
                onChange={(e) => setLegacyFor(e.target.value as LegacyFor)}
                className="w-full px-4 py-2.5 rounded-lg text-sm text-mercury appearance-none"
                style={{
                  background: 'rgba(196,199,204,0.05)',
                  border: '1px solid rgba(196,199,204,0.12)',
                  color: legacyFor ? 'var(--mercury)' : 'var(--mercury-dim)',
                }}
              >
                <option value="" style={{ background: '#141418' }}>Select one</option>
                {LEGACY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} style={{ background: '#141418' }}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary px-6 py-2.5 rounded-full text-xs tracking-[0.15em] uppercase font-medium flex-shrink-0 self-end"
              style={{ marginBottom: '0' }}
            >
              Reserve
            </button>
          </form>

          <p className="text-xs text-mercury-dim mt-3 opacity-50" style={{ letterSpacing: '0.05em' }}>
            No payment required. We will be in touch within 48 hours to begin the brief.
          </p>
        </div>
      </div>
    </div>
  );
}