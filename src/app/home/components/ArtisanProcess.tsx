'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const STEPS = [
{
  number: 'I',
  title: 'The Brief',
  body: 'A single conversation, 45 minutes. We ask about provenance — where the family name comes from, what it has meant, what you want it to mean next. We do not begin sketching until we understand what the object is for.'
},
{
  number: 'II',
  title: 'The Crest Design',
  body: 'Our heraldic draughtsman produces three concepts by hand, in ink. No digital mockups at this stage. You respond to ink on paper, not pixels on glass. The chosen concept is refined over two rounds before the engraver ever touches metal.'
},
{
  number: 'III',
  title: 'The Making',
  body: 'Material is sourced to order. No inventory, no stock. Your cufflink blanks are cast the week your crest is approved. The engraver works in a single session — no returns to the piece after the first mark is made.'
},
{
  number: 'IV',
  title: 'The Delivery',
  body: 'Shipped in the matte obsidian box. Tracked, insured, signed for. If you are in London, New York, or Hong Kong, we deliver by hand. The box is part of the object. We do not use bubble wrap.'
}];


export default function ArtisanProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) el.classList.add('in-view');
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-32 px-6 lg:px-16"
      style={{ background: '#0B0B0F' }}>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* Left — sticky image */}
          <div className="lg:sticky lg:top-24">
            <p className="text-xs tracking-[0.3em] uppercase text-mercury-dim mb-4">
              The Process
            </p>
            <h2
              className="font-display font-light text-mercury mb-10"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2 }}>
              
              Made Slowly,
              <br />
              <span className="italic text-lilac">on Purpose.</span>
            </h2>

            {/* Process image */}
            <div className="relative rounded-2xl overflow-hidden mb-8" style={{ aspectRatio: '4/5' }}>
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1db8014a4-1772155918181.png"
                alt="Artisan's hands engraving sterling silver with a graver tool, tool marks visible under magnification lamp"
                fill
                className="object-cover"
                style={{ filter: 'grayscale(10%) brightness(0.8)' }} />
              
              <div
                className="absolute inset-0"
                style={{
                  background:
                  'linear-gradient(to bottom, transparent 60%, rgba(11,11,15,0.8) 100%)'
                }} />
              
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs text-mercury-dim tracking-wide" style={{ lineHeight: 1.7 }}>
                  "I make one mark at a time. There is no undo. That is not a constraint — it is the entire point."
                </p>
                <p className="text-xs text-lilac mt-2 tracking-[0.15em]">
                  — James Hartley, Head Engraver, 31 years
                </p>
              </div>
            </div>

            {/* Second process image — macro */}
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_14f960329-1772155918173.png"
                alt="Extreme macro close-up of graver cutting into sterling silver, showing tool marks and metal displacement"
                fill
                className="object-cover"
                style={{ filter: 'grayscale(10%)' }} />
              
            </div>
          </div>

          {/* Right — steps */}
          <div className="space-y-0 pt-0 lg:pt-24">
            {STEPS.map((step, i) =>
            <div
              key={step.number}
              ref={(el) => {itemRefs.current[i] = el;}}
              className="reveal-up relative pl-12 pb-16"
              style={{ transitionDelay: `${i * 80}ms` }}>
              
                {/* Vertical line */}
                {i < STEPS.length - 1 &&
              <div
                className="absolute left-[11px] top-8 bottom-0 process-line" />

              }

                {/* Roman numeral node */}
                <div
                className="absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(212,193,236,0.08)',
                  border: '1px solid rgba(212,193,236,0.2)'
                }}>
                
                  <span
                  className="font-display text-lilac"
                  style={{ fontSize: '9px', letterSpacing: '0.05em' }}>
                  
                    {step.number}
                  </span>
                </div>

                <h4
                className="font-display font-light text-mercury mb-3"
                style={{ fontSize: '1.25rem', letterSpacing: '0.02em' }}>
                
                  {step.title}
                </h4>
                <p
                className="text-mercury-dim text-sm leading-relaxed"
                style={{ lineHeight: 1.9 }}>
                
                  {step.body}
                </p>
              </div>
            )}

            {/* Lead time note */}
            <div
              className="mt-4 p-6 rounded-xl"
              style={{
                background: 'rgba(212,193,236,0.04)',
                border: '1px solid rgba(212,193,236,0.1)'
              }}>
              
              <p className="text-xs tracking-[0.2em] uppercase text-lilac mb-2">
                Current Lead Time
              </p>
              <p className="font-display font-light text-mercury" style={{ fontSize: '1.5rem' }}>
                16 weeks
              </p>
              <p className="text-mercury-dim text-xs mt-1">
                Waitlist now open for Q4 2026 commissions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}