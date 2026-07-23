'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const ARCHETYPES = [
{
  id: 'patriarch',
  label: 'The Retiring Patriarch',
  who: 'Estate planners, adult children, family offices',
  copy: 'He built it. He held it together for forty years. The gift is not the object — it is the acknowledgment that what he built will outlast him. A set of crest cufflinks, a wax seal for the will, a folio that holds the letters he never knew how to send.',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_113db4fc8-1772155921254.png",
  alt: 'Distinguished older man in a dark suit, silver-haired, holding a small velvet box',
  accent: '#D4C1EC',
  pieces: ['Crest Cufflinks', 'Leather Folio', 'Wax Seal Kit']
},
{
  id: 'newlyweds',
  label: 'The New Crest',
  who: 'Newlyweds building a shared identity',
  copy: 'Two families, one mark. We work with couples to design a crest that honors both lineages without erasing either. The process takes three conversations and eight weeks. The object lasts three generations.',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_19d44b8dc-1772155918970.png",
  alt: 'Couple reviewing crest design sketches on a desk with silver objects beside them',
  accent: '#E8B4B8',
  pieces: ['Crested Stationery', 'Wax Seal Kit', 'Watch Caseback']
},
{
  id: 'founder',
  label: 'The Third-Generation Founder',
  who: 'Founders, family offices, brand stewards',
  copy: 'The company is not a company — it is a name. It goes on the scotch decanter, the boardroom stationery, the caseback of the watch worn to the deal that matters. Not branding. Lineage.',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_18a36e461-1772155918746.png",
  alt: 'Executive at a mahogany desk, crystal decanter visible in background, reviewing engraved stationery',
  accent: '#C4C7CC',
  pieces: ['Scotch Decanter', 'Crested Stationery', 'Watch Caseback']
}];


export default function ForWhomSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) el.classList.add('in-view');
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="for-whom"
      ref={sectionRef}
      className="py-32 px-6 lg:px-16"
      style={{ background: 'linear-gradient(to bottom, #141418, #0B0B0F)' }}>
      
      {/* Header */}
      <div className="mb-24 max-w-2xl">
        <p className="text-xs tracking-[0.3em] uppercase text-mercury-dim mb-4">
          For Whom
        </p>
        <h2
          className="font-display font-light text-mercury"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15 }}>
          
          Three Kinds of
          <br />
          <span className="italic text-lilac">Commission.</span>
        </h2>
      </div>

      {/* Archetype cards — asymmetric layout */}
      <div className="space-y-6">
        {ARCHETYPES.map((arch, i) =>
        <div
          key={arch.id}
          ref={(el) => {cardRefs.current[i] = el;}}
          className="archetype-card reveal-up rounded-2xl overflow-hidden"
          style={{
            transitionDelay: `${i * 100}ms`,
            background: 'rgba(20,20,24,0.5)'
          }}>
          
            <div
            className={`grid lg:grid-cols-[${i === 1 ? '3fr_2fr' : '2fr_3fr'}] gap-0 ${
            i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
            }
            style={{
              gridTemplateColumns: i === 1 ? '3fr 2fr' : '2fr 3fr'
            }}>
            
              {/* Image — alternates sides */}
              {i % 2 === 0 &&
            <div className="relative aspect-video lg:aspect-auto" style={{ minHeight: '320px' }}>
                  <AppImage
                src={arch.image}
                alt={arch.alt}
                fill
                className="object-cover"
                style={{ filter: 'grayscale(15%) brightness(0.85)' }} />
              
                  <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to right, transparent 60%, rgba(20,20,24,0.9) 100%)`
                }} />
              
                </div>
            }

              {/* Text */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <p
                className="text-xs tracking-[0.25em] uppercase mb-3"
                style={{ color: arch.accent }}>
                
                  {arch.who}
                </p>
                <h3
                className="font-display font-light text-mercury mb-5"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                
                  {arch.label}
                </h3>
                <p
                className="text-mercury-dim text-sm leading-relaxed mb-8"
                style={{ lineHeight: 1.9, maxWidth: '36ch' }}>
                
                  {arch.copy}
                </p>
                <div className="flex flex-wrap gap-2">
                  {arch.pieces.map((piece) =>
                <span
                  key={piece}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    border: `1px solid ${arch.accent}30`,
                    color: arch.accent,
                    letterSpacing: '0.1em'
                  }}>
                  
                      {piece}
                    </span>
                )}
                </div>
              </div>

              {/* Image — right side for odd */}
              {i % 2 === 1 &&
            <div className="relative aspect-video lg:aspect-auto order-first lg:order-last" style={{ minHeight: '320px' }}>
                  <AppImage
                src={arch.image}
                alt={arch.alt}
                fill
                className="object-cover"
                style={{ filter: 'grayscale(15%) brightness(0.85)' }} />
              
                  <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to left, transparent 60%, rgba(20,20,24,0.9) 100%)`
                }} />
              
                </div>
            }
            </div>
          </div>
        )}
      </div>
    </section>);

}