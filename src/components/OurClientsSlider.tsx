import React, { useState, useEffect, useRef } from 'react';

export interface ClientItem {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

export const CLIENTS_LIST: ClientItem[] = [
  // 1. Berlly Stone Pvt Ltd
  {
    id: 'berlly-stone',
    name: 'Berlly Stone Pvt Ltd',
    renderLogo: () => (
      <div className="flex items-center justify-center gap-3.5 w-full">
        {/* Diamond Cut Stone Icon */}
        <svg viewBox="0 0 54 54" className="w-12 h-12 shrink-0" fill="none">
          <polygon points="27,4 48,16 48,38 27,50 6,38 6,16" stroke="#0f766e" strokeWidth="3" fill="#f0fdfa" />
          <polygon points="27,4 27,50" stroke="#0f766e" strokeWidth="2" strokeDasharray="3 2" />
          <polyline points="6,16 27,27 48,16" stroke="#0d9488" strokeWidth="2.2" />
          <polyline points="6,38 27,27 48,38" stroke="#0d9488" strokeWidth="2.2" />
        </svg>
        <div className="text-left">
          <span className="block text-xl sm:text-2xl font-black text-slate-900 tracking-wider leading-none font-sans">
            BERLLY
          </span>
          <span className="block text-xs sm:text-sm font-extrabold text-[#0d9488] tracking-widest mt-1 uppercase">
            STONE PVT LTD
          </span>
        </div>
      </div>
    ),
  },
  // 2. Descone Turnkey Solutions
  {
    id: 'descone',
    name: 'Descone Turnkey Solutions',
    renderLogo: () => (
      <div className="flex items-center justify-center gap-3.5 w-full">
        {/* Turnkey 3D Isometric Cube Icon */}
        <svg viewBox="0 0 54 54" className="w-12 h-12 shrink-0" fill="none">
          <path d="M27 4 L48 16 L48 38 L27 50 L6 38 L6 16 Z" fill="#fff7ed" stroke="#ea580c" strokeWidth="3" />
          <path d="M27 4 L27 27 L48 16" stroke="#ea580c" strokeWidth="2.5" />
          <path d="M27 27 L6 16" stroke="#ea580c" strokeWidth="2.5" />
          <path d="M27 27 L27 50" stroke="#ea580c" strokeWidth="2.5" />
          <circle cx="27" cy="27" r="4" fill="#ea580c" />
        </svg>
        <div className="text-left">
          <span className="block text-xl sm:text-2xl font-black text-slate-900 tracking-wider leading-none font-sans">
            DESCONE
          </span>
          <span className="block text-xs sm:text-sm font-extrabold text-[#ea580c] tracking-wide mt-1 uppercase">
            TURNKEY SOLUTIONS
          </span>
        </div>
      </div>
    ),
  },
  // 3. SND Interiors
  {
    id: 'snd-interiors',
    name: 'SND Interiors',
    renderLogo: () => (
      <div className="flex items-center justify-center gap-3.5 w-full">
        {/* Monogram Crest */}
        <div className="w-12 h-12 rounded-xl bg-[#1e1b4b] border-2 border-indigo-500/80 flex items-center justify-center shrink-0 shadow-xs">
          <span className="text-amber-400 font-black text-lg tracking-wider">SND</span>
        </div>
        <div className="text-left">
          <span className="block text-xl sm:text-2xl font-black text-[#1e1b4b] tracking-wider leading-none font-sans">
            SND
          </span>
          <span className="block text-xs sm:text-sm font-extrabold text-[#d97706] tracking-widest mt-1 uppercase">
            INTERIORS
          </span>
        </div>
      </div>
    ),
  },
  // 4. Solas Marine Service Pvt Ltd
  {
    id: 'solas-marine',
    name: 'Solas Marine Service Pvt ltd',
    renderLogo: () => (
      <div className="flex items-center justify-center gap-3.5 w-full">
        {/* Maritime Helm Icon */}
        <svg viewBox="0 0 54 54" className="w-12 h-12 shrink-0" fill="none">
          <circle cx="27" cy="27" r="20" stroke="#0284c7" strokeWidth="3" fill="#f0f9ff" />
          <circle cx="27" cy="27" r="9" stroke="#0369a1" strokeWidth="2.5" />
          <path d="M27 4v6m0 34v6M4 27h6m34 0h6" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="27" cy="27" r="3.5" fill="#0284c7" />
        </svg>
        <div className="text-left">
          <span className="block text-xl sm:text-2xl font-black text-[#0c4a6e] tracking-wider leading-none font-sans">
            SOLAS MARINE
          </span>
          <span className="block text-xs sm:text-sm font-extrabold text-[#0284c7] tracking-wider mt-1 uppercase">
            SERVICE PVT LTD
          </span>
        </div>
      </div>
    ),
  },
  // 5. SS interiors
  {
    id: 'ss-interiors',
    name: 'SS interiors',
    renderLogo: () => (
      <div className="flex items-center justify-center gap-3.5 w-full">
        {/* Double S Emblem */}
        <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-600 flex items-center justify-center shrink-0 shadow-xs">
          <span className="text-rose-500 font-black text-xl tracking-tighter">SS</span>
        </div>
        <div className="text-left">
          <span className="block text-2xl sm:text-3xl font-black text-slate-900 tracking-wider leading-none font-sans">
            SS
          </span>
          <span className="block text-xs sm:text-sm font-extrabold text-rose-600 tracking-widest mt-1 uppercase">
            INTERIORS
          </span>
        </div>
      </div>
    ),
  },
  // 6. Nexus Turnkey Interior Solution
  {
    id: 'nexus-turnkey',
    name: 'Nexus Turnkey Interior Solution',
    renderLogo: () => (
      <div className="flex items-center justify-center gap-3.5 w-full">
        {/* Hexagonal Node */}
        <svg viewBox="0 0 54 54" className="w-12 h-12 shrink-0" fill="none">
          <polygon points="27,5 48,16 48,38 27,49 6,38 6,16" stroke="#4f46e5" strokeWidth="3" fill="#eef2ff" />
          <circle cx="27" cy="27" r="5" fill="#f59e0b" />
          <line x1="27" y1="5" x2="27" y2="22" stroke="#4f46e5" strokeWidth="2.5" />
          <line x1="48" y1="38" x2="31" y2="29" stroke="#4f46e5" strokeWidth="2.5" />
          <line x1="6" y1="38" x2="23" y2="29" stroke="#4f46e5" strokeWidth="2.5" />
        </svg>
        <div className="text-left">
          <span className="block text-xl sm:text-2xl font-black text-[#1e1b4b] tracking-wider leading-none font-sans">
            NEXUS
          </span>
          <span className="block text-xs sm:text-sm font-extrabold text-[#4f46e5] tracking-tight mt-1 uppercase">
            TURNKEY INTERIOR SOLUTION
          </span>
        </div>
      </div>
    ),
  },
  // 7. K.p Interior
  {
    id: 'kp-interior',
    name: 'K.p Interior',
    renderLogo: () => (
      <div className="flex items-center justify-center gap-3.5 w-full">
        {/* Drafting Compass Box */}
        <div className="w-12 h-12 rounded-xl bg-amber-50 border-2 border-amber-600 flex items-center justify-center shrink-0 shadow-xs">
          <span className="text-amber-700 font-black text-xl tracking-wider">KP</span>
        </div>
        <div className="text-left">
          <span className="block text-xl sm:text-2xl font-black text-stone-900 tracking-wider leading-none font-sans">
            K.P
          </span>
          <span className="block text-xs sm:text-sm font-extrabold text-[#b45309] tracking-widest mt-1 uppercase">
            INTERIOR
          </span>
        </div>
      </div>
    ),
  },
];

export const OurClientsSlider: React.FC = () => {
  const [offsetIndex, setOffsetIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(280);
  const gap = 24;

  const total = CLIENTS_LIST.length; // 7
  // Duplicate list twice so wrap-around is 100% seamless
  const slidingTrack = [
    ...CLIENTS_LIST,
    ...CLIENTS_LIST,
    ...CLIENTS_LIST,
  ];

  // Dynamically calculate card width based on screen width
  useEffect(() => {
    const calculateCardSize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      if (containerWidth >= 1024) {
        // 4 full boxes visible
        setCardWidth((containerWidth - gap * 3) / 4);
      } else if (containerWidth >= 640) {
        // 2 full boxes visible
        setCardWidth((containerWidth - gap) / 2);
      } else {
        // 1 box visible on mobile
        setCardWidth(containerWidth);
      }
    };

    calculateCardSize();
    window.addEventListener('resize', calculateCardSize);
    return () => window.removeEventListener('resize', calculateCardSize);
  }, []);

  // Slide one box every 2.8 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setOffsetIndex((prev) => prev + 1);
    }, 3400);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Seamless zero-jump when reaching duplicate boundary
  const handleTransitionEnd = () => {
    if (offsetIndex >= total) {
      setIsTransitioning(false);
      setOffsetIndex(0);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference image */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#e26922] tracking-wide inline-block">
            Our Client
          </h2>
        </div>

        {/* Sliding Track Viewport:
            - NO arrow buttons (hidden as requested)
            - NO bottom dots (hidden as requested)
            - Smooth seamless step sliding with zero-rewind transition */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden py-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex ${isTransitioning ? 'transition-transform duration-[850ms] [transition-timing-function:cubic-bezier(0.25,1,0.5,1)]' : ''}`}
            style={{
              gap: `${gap}px`,
              transform: `translateX(-${offsetIndex * (cardWidth + gap)}px)`,
            }}
          >
            {slidingTrack.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                style={{ width: `${cardWidth}px` }}
                className="shrink-0 bg-white rounded-2xl border border-slate-700/80 p-6 sm:p-7 flex items-center justify-center min-h-[160px] sm:min-h-[175px] shadow-xs hover:shadow-xl hover:border-[#e26922] transition-all duration-300 group hover:-translate-y-1.5 select-none"
              >
                <div className="w-full flex items-center justify-center group-hover:scale-103 transition-transform duration-300">
                  {client.renderLogo()}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
