'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const FRAMES = [
{
  id: 'outer-box',
  label: '01',
  title: 'The Outer Box',
  subtitle: 'Matte obsidian lacquer. Brass-hinged. Weightier than expected.',
  image:
  "https://images.unsplash.com/photo-1684347417652-66cbe439b643",
  alt: 'Matte black lacquered presentation box on dark marble surface, closed, with brass hardware catching soft light',
  detail:
  'Each outer casing is lacquered by hand in three coats of obsidian black, then polished to a surface that holds fingerprints for exactly one second before releasing them.',
  zoom: false
},
{
  id: 'tissue',
  label: '02',
  title: 'The Tissue',
  subtitle: 'Acid-free. Folded once, never twice. The rustle is intentional.',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1516d7025-1772155918904.png",
  alt: 'Pale silver tissue paper barely parted inside a dark box, revealing a chrome gleam beneath',
  detail:
  'The tissue is archival-grade, sourced from the same mill that supplies the V&A conservation department. It will not yellow. It will not transfer. It is not decoration — it is preservation.',
  zoom: false
},
{
  id: 'object',
  label: '03',
  title: 'The Object',
  subtitle: 'Sterling silver. 92.5% pure. Cold to the touch, warmer in the hand.',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_14ee51938-1772155918707.png",
  alt: 'Sterling silver engraved cufflinks resting on dark velvet inside a presentation box',
  detail:
  'Our silversmiths work exclusively with .925 sterling, sourced from a single refinery in Sheffield. Each blank is cast, not stamped — the difference is audible when it meets a surface.',
  zoom: false
},
{
  id: 'engraving',
  label: '04',
  title: 'The Engraving',
  subtitle: 'Macro detail. Tool marks visible. Proof of the hand.',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_12a71b57b-1772155916084.png",
  alt: 'Extreme macro close-up of hand-engraved monogram in sterling silver, tool marks visible in the metal',
  detail:
  'Engraving depth: 0.3mm minimum. Every stroke is single-pass, no layering. You can see — and feel — where the graver entered and exited the metal. That is not imperfection. That is authorship.',
  zoom: true
}];


export default function UnboxingSection() {
  const [activeFrame, setActiveFrame] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    frameRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveFrame(i);
        },
        { threshold: 0.55 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="unboxing"
      className="relative"
      style={{ background: 'linear-gradient(to bottom, #0B0B0F, #141418)' }}>
      
      {/* Sticky visual panel */}
      <div className="hidden lg:block sticky top-0 h-screen pointer-events-none z-10 float-left w-1/2">
        <div className="relative w-full h-full flex items-center justify-center p-16">
          {FRAMES.map((frame, i) =>
          <div
            key={frame.id}
            className="absolute inset-16 rounded-2xl overflow-hidden transition-all duration-1000"
            style={{
              opacity: activeFrame === i ? 1 : 0,
              transform: activeFrame === i ?
              'scale(1)' :
              activeFrame > i ?
              'scale(0.94)' :
              'scale(1.04)'
            }}>
            
              <AppImage
              src={frame.image}
              alt={frame.alt}
              fill
              className={`object-cover ${frame.zoom ? 'macro-zoom' : ''}`}
              priority={i === 0} />
            
              <div
              className="absolute inset-0"
              style={{
                background:
                'linear-gradient(to bottom, transparent 50%, rgba(11,11,15,0.7) 100%)'
              }} />
            
            </div>
          )}
        </div>
      </div>

      {/* Scroll content */}
      <div className="lg:ml-[50%] relative z-10">
        {/* Section header */}
        <div className="px-8 lg:px-16 pt-32 pb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-mercury-dim mb-4">
            The Unboxing
          </p>
          <h2
            className="font-display font-light text-mercury"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15 }}>
            
            Layer by Layer,
            <br />
            <span className="italic text-lilac">the Story Reveals Itself.</span>
          </h2>
        </div>

        {/* Frames */}
        {FRAMES.map((frame, i) =>
        <div
          key={frame.id}
          ref={(el) => {frameRefs.current[i] = el;}}
          className="min-h-screen flex flex-col justify-center px-8 lg:px-16 py-24">
          
            {/* Mobile image */}
            <div className="lg:hidden mb-8 rounded-xl overflow-hidden aspect-video">
              <AppImage
              src={frame.image}
              alt={frame.alt}
              width={800}
              height={450}
              className="w-full h-full object-cover" />
            
            </div>

            <div
            className="transition-all duration-700"
            style={{
              opacity: activeFrame === i ? 1 : 0.3,
              transform: activeFrame === i ? 'translateX(0)' : 'translateX(-16px)'
            }}>
            
              <p
              className="font-display text-lilac mb-2"
              style={{ fontSize: '4rem', lineHeight: 1, opacity: 0.2 }}>
              
                {frame.label}
              </p>
              <h3
              className="font-display font-light text-mercury mb-3"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              
                {frame.title}
              </h3>
              <p
              className="text-mercury-dim mb-6 leading-relaxed"
              style={{ fontSize: '0.95rem', letterSpacing: '0.02em' }}>
              
                {frame.subtitle}
              </p>
              <div
              className="divider mb-6"
              style={{ width: '60px', height: '1px', background: 'rgba(212,193,236,0.2)' }} />
            
              <p
              className="text-sm leading-relaxed text-mercury-dim max-w-sm"
              style={{ lineHeight: 1.8 }}>
              
                {frame.detail}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="clear-both" />
    </section>);

}