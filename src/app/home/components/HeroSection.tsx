'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const LOGOTYPE = 'LEGACY';
const TAGLINE = 'Objects Engraved to Outlast Their Commissioners';

export default function HeroSection() {
  const [lettersRevealed, setLettersRevealed] = useState<boolean[]>(
    Array(LOGOTYPE.length).fill(false)
  );
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [subVisible, setSubVisible] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const startDelay = 2000;
    const letterDelay = 130;

    const timers: ReturnType<typeof setTimeout>[] = [];

    LOGOTYPE.split('').forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setLettersRevealed((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, startDelay + i * letterDelay)
      );
    });

    timers.push(
      setTimeout(() => setTaglineVisible(true), startDelay + LOGOTYPE.length * letterDelay + 300)
    );
    timers.push(
      setTimeout(() => setSubVisible(true), startDelay + LOGOTYPE.length * letterDelay + 700)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0B0B0F' }}>
      
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1a0e7bdb2-1772155917387.png"
          alt="Matte black presentation box on dark marble, tissue paper parted to reveal an engraved chrome object catching light"
          fill
          className="object-cover object-center"
          priority />
        
        {/* Dark overlay — layered for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
            'linear-gradient(to bottom, rgba(11,11,15,0.55) 0%, rgba(11,11,15,0.35) 40%, rgba(11,11,15,0.72) 100%)'
          }} />
        
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(11,11,15,0.6) 100%)'
          }} />
        
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div
          className="mb-10 transition-opacity duration-1000"
          style={{ opacity: taglineVisible ? 1 : 0 }}>
          
          <p
            className="text-xs tracking-[0.35em] uppercase text-mercury-dim"
            style={{ letterSpacing: '0.3em' }}>
            
            Est. MMXXIV · Sterling · Leather · Wax · Steel
          </p>
        </div>

        {/* Logotype — letter by letter */}
        <h1
          className="font-display font-light mb-8"
          style={{
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            letterSpacing: '0.35em',
            lineHeight: 1,
            color: 'transparent'
          }}
          aria-label="Legacy">
          
          {LOGOTYPE.split('').map((letter, i) =>
          <span
            key={i}
            className="engrave-letter"
            style={{
              opacity: lettersRevealed[i] ? 1 : 0,
              transform: lettersRevealed[i] ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
              background:
              'linear-gradient(135deg, #C4C7CC 0%, #D4C1EC 40%, #C4C7CC 70%, #E8B4B8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
            
              {letter}
            </span>
          )}
        </h1>

        {/* Tagline */}
        <p
          className="font-display font-light italic text-mercury mb-6 transition-all duration-1000"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            letterSpacing: '0.05em',
            opacity: taglineVisible ? 1 : 0,
            transform: taglineVisible ? 'translateY(0)' : 'translateY(10px)'
          }}>
          
          {TAGLINE}
        </p>

        {/* Sub copy */}
        <p
          className="text-mercury-dim max-w-md text-sm leading-relaxed transition-all duration-1000"
          style={{
            letterSpacing: '0.04em',
            opacity: subVisible ? 0.7 : 0,
            transform: subVisible ? 'translateY(0)' : 'translateY(10px)'
          }}>
          
          Sterling cufflinks. Engraved watch casebacks. Hand-stitched leather folios.
          Wax seal kits with custom dies. Each piece commissioned once, inherited forever.
        </p>

        {/* Scroll cue */}
        <div
          className="mt-20 flex flex-col items-center gap-3 transition-all duration-1000"
          style={{ opacity: subVisible ? 0.5 : 0 }}>
          
          <p className="text-xs tracking-[0.25em] uppercase text-mercury-dim">
            Scroll to Open
          </p>
          <div className="w-px h-10 relative overflow-hidden" style={{ background: 'rgba(196,199,204,0.15)' }}>
            <div
              className="absolute top-0 left-0 w-full"
              style={{
                height: '40%',
                background: 'linear-gradient(to bottom, var(--lilac), transparent)',
                animation: 'scrollDrop 2s ease-in-out infinite'
              }} />
            
          </div>
        </div>
      </div>

      {/* Corner mark */}
      <div className="absolute bottom-8 left-8 z-10 hidden md:block">
        <p
          className="text-xs text-mercury-dim"
          style={{ letterSpacing: '0.2em', opacity: subVisible ? 0.4 : 0, transition: 'opacity 1s ease 0.5s' }}>
          
          HOUSE OF LEGACY
        </p>
      </div>

      <style>{`
        @keyframes scrollDrop {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(250%); opacity: 0; }
        }
      `}</style>
    </section>);

}