'use client';
import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface GalleryItem {
  id: string;
  title: string;
  material: string;
  process: string;
  image: string;
  alt: string;
  detail: string;
  spec1: string;
  spec2: string;
  spec3: string;
  span?: 'col' | 'row' | 'both' | 'none';
}

const ITEMS: GalleryItem[] = [
{
  id: 'cufflinks',
  title: 'Crest Cufflinks',
  material: 'Sterling Silver .925',
  process: 'Hand-engraved, burnished',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e8b310dd-1767747930311.png",
  alt: 'Sterling silver cufflinks with family crest engraved on dark velvet background',
  detail: 'Each pair begins as a solid .925 sterling blank, cast in Sheffield and shipped flat. The family crest is transferred via wax resist and then cut freehand — no CNC, no laser. The engraver works from a single reference photograph and their own judgment.',
  spec1: 'Material: Sterling Silver .925',
  spec2: 'Engraving depth: 0.3–0.5mm',
  spec3: 'Lead time: 6–8 weeks',
  span: 'both'
},
{
  id: 'folio',
  title: 'Leather Folio',
  material: 'Full-grain bridle leather',
  process: 'Hand-stitched, blind-embossed',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_154a5d775-1772155918166.png",
  alt: 'Dark cognac leather folio with blind-embossed monogram on marble surface',
  detail: 'Bridle leather from a Walsall tannery, vegetable-tanned over 14 months. The monogram is blind-embossed at 90°C — no foil, no fill. It will darken as the leather ages. That is the point.',
  spec1: 'Material: English bridle leather',
  spec2: 'Thread: Waxed linen, saddle-stitch',
  spec3: 'Lead time: 10–12 weeks',
  span: 'none'
},
{
  id: 'watch',
  title: 'Watch Caseback',
  material: 'Stainless steel / sapphire',
  process: 'Laser-assist, hand-finished',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_178c9cc1b-1772155917139.png",
  alt: 'Close-up of engraved watch caseback showing family initials and founding year',
  detail: 'We engrave on casebacks you send us — Rolex, Patek, A. Lange, independent makers. The engraving is laser-assisted for positioning, then finished by hand to preserve the original surface texture around the inscription.',
  spec1: 'Accepts: Any caseback material',
  spec2: 'Minimum inscription: 3 characters',
  spec3: 'Lead time: 3–4 weeks',
  span: 'none'
},
{
  id: 'wax-seal',
  title: 'Wax Seal Kit',
  material: 'Brass die, sealing wax',
  process: 'CNC-roughed, hand-detailed',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d7dcdf48-1772155917622.png",
  alt: 'Brass wax seal stamp with custom family crest die next to red wax seals on cream paper',
  detail: 'The brass die is CNC-roughed from the client\'s crest artwork, then handed to the engraver for final detailing — undercuts, fine lines, and relief depth that a machine cannot judge. Includes 40 sticks of archival sealing wax in three tones.',
  spec1: 'Die material: Solid brass',
  spec2: 'Handle: Turned walnut or ebony',
  spec3: 'Lead time: 4–5 weeks',
  span: 'col'
},
{
  id: 'stationery',
  title: 'Crested Stationery',
  material: 'Cotton rag paper, 300gsm',
  process: 'Engraved die-stamp printing',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c86fed6c-1772155919853.png",
  alt: 'Stack of cream cotton rag stationery with engraved family crest at top, pen resting alongside',
  detail: 'Die-stamped on Crane & Co. cotton rag, 300gsm. The crest is raised 0.8mm from the surface — you feel it before you see it. Minimum order 100 sheets, letterhead and correspondence card, matched envelopes available.',
  spec1: 'Paper: Crane & Co. cotton rag',
  spec2: 'Impression: 0.8mm raised',
  spec3: 'Lead time: 5–6 weeks',
  span: 'none'
},
{
  id: 'decanter',
  title: 'Scotch Decanter',
  material: 'Lead-free crystal',
  process: 'Wheel-engraved, sandblasted',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19afb30ca-1772155918900.png",
  alt: 'Lead-free crystal decanter with family crest wheel-engraved on side, amber scotch visible inside',
  detail: 'Crystal sourced from a Bohemian glasshouse operating since 1836. The crest is wheel-engraved — a copper disc spinning at 2,800rpm against the glass surface, guided by a craftsman who has been doing this for 31 years.',
  spec1: 'Crystal: Lead-free, 24% PbO equivalent',
  spec2: 'Capacity: 750ml',
  spec3: 'Lead time: 8–10 weeks',
  span: 'none'
}];


export default function ArchiveGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.2 }
    );
    if (headingRef.current) obs.observe(headingRef.current);
    return () => obs.disconnect();
  }, []);

  // Lock scroll when panel open
  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : '';
    return () => {document.body.style.overflow = '';};
  }, [selectedItem]);

  return (
    <section
      id="archive"
      ref={sectionRef}
      className="py-32 px-6 lg:px-16"
      style={{ background: '#0B0B0F' }}>
      
      {/* Section header */}
      <div ref={headingRef} className="reveal-up mb-20 max-w-2xl">
        <p className="text-xs tracking-[0.3em] uppercase text-mercury-dim mb-4">
          The Archive
        </p>
        <h2
          className="font-display font-light text-mercury mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15 }}>
          
          Every Object,
          <br />
          <span className="italic text-lilac">a Commission of Permanence.</span>
        </h2>
        <p className="text-mercury-dim text-sm leading-relaxed max-w-md">
          Click any piece to open the detail panel — material specifications, process photography, and the story of how it was made.
        </p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        {ITEMS.map((item) => {
          const colSpan =
          item.span === 'both' || item.span === 'col' ? 'col-span-2 lg:col-span-2' : 'col-span-1';
          const rowSpan =
          item.span === 'both' || item.span === 'row' ? 'row-span-2' : 'row-span-1';

          return (
            <div
              key={item.id}
              className={`archive-item rounded-xl overflow-hidden cursor-pointer ${colSpan} ${rowSpan}`}
              style={{
                minHeight: item.span === 'both' ? '420px' : '260px',
                background: '#141418'
              }}
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
              aria-label={`Open detail panel for ${item.title}`}>
              
              <div className="relative w-full h-full" style={{ minHeight: 'inherit' }}>
                <AppImage
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover" />
                
                <div className="overlay" />
                <div className="overlay-label">
                  <p className="text-xs tracking-[0.2em] uppercase text-mercury-dim mb-1">
                    {item.material}
                  </p>
                  <p className="font-display font-light text-mercury text-lg">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>);

        })}
      </div>

      {/* Detail panel */}
      <div
        className={`detail-panel ${selectedItem ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedItem(null);
        }}>
        
        {selectedItem &&
        <div
          className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
          style={{
            background: '#141418',
            border: '1px solid rgba(196,199,204,0.08)',
            maxHeight: '90vh',
            overflow: 'auto'
          }}>
          
            <button
            className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full text-mercury-dim hover-rose transition-colors"
            style={{ background: 'rgba(11,11,15,0.8)', border: '1px solid rgba(196,199,204,0.1)' }}
            onClick={() => setSelectedItem(null)}
            aria-label="Close detail panel">
            
              ×
            </button>

            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-square lg:aspect-auto lg:min-h-[500px]">
                <AppImage
                src={selectedItem.image}
                alt={selectedItem.alt}
                fill
                className="object-cover" />
              
              </div>

              {/* Detail */}
              <div className="p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-mercury-dim mb-3">
                    {selectedItem.process}
                  </p>
                  <h3
                  className="font-display font-light text-mercury mb-6"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  
                    {selectedItem.title}
                  </h3>
                  <p className="text-mercury-dim text-sm leading-relaxed mb-8" style={{ lineHeight: 1.9 }}>
                    {selectedItem.detail}
                  </p>

                  {/* Specs */}
                  <div className="space-y-3 mb-8">
                    {[selectedItem.spec1, selectedItem.spec2, selectedItem.spec3].map((spec, i) =>
                  <div key={i} className="flex items-center gap-3">
                        <div
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: 'var(--lilac)' }} />
                    
                        <p className="text-xs text-mercury-dim tracking-wide">{spec}</p>
                      </div>
                  )}
                  </div>
                </div>

                <button
                className="btn-primary px-8 py-3 rounded-full text-sm tracking-[0.15em] uppercase font-medium self-start"
                onClick={() => setSelectedItem(null)}>
                
                  Reserve This Piece
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    </section>);

}