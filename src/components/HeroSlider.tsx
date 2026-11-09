import React, { useState, useEffect, useRef } from 'react';
import { PageId } from './Navbar';

interface HeroSliderProps {
  onNavigate?: (page: PageId) => void;
}

interface SlideItem {
  id: number;
  image: string;
  headline: string;
  description: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    image: './assets/aistudio/WhatsApp_Image_2026-11-03_at_1.04.00_PM__1__3cfa08e4.jpeg',
    headline: 'Architectural Steel & Precision Spiral Staircases',
    description: 'Bespoke helical staircases, double-height atrium steelwork, and floor-to-ceiling glass lobby installations engineered with IS 2062 heavy structural steel and master craftsmanship.',
  },
  {
    id: 2,
    image: './assets/aistudio/WhatsApp_Image_2026-11-03_at_1.04.01_PM_5eb73795.jpeg',
    headline: 'Luxury CNC Laser Cut Jali & Decorative Partitions',
    description: 'Sub-millimeter CNC fiber laser cut metal screens, luxury titanium PVD gold partitions, and architectural geometric room dividers for premium residences and hospitality interiors.',
  },
  {
    id: 3,
    image: './assets/aistudio/WhatsApp_Image_2026-11-03_at_1.04.04_PM__1__313234b2.jpeg',
    headline: 'Commercial Glass Facades & Boutique Storefronts',
    description: 'Heavy-duty stainless steel & aluminium architectural storefronts, frameless structural glass facades, and automated luxury commercial entrance systems engineered for lasting durability.',
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 4500; // 4.5 seconds auto slide

  const resetAutoSlideTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection((prev) => (prev === 'up' ? 'down' : 'up'));
      setCurrentIdx((prevIdx) => (prevIdx + 1) % SLIDES.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    resetAutoSlideTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const currentSlide = SLIDES[currentIdx];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
      
      {/* =========================================================================
          FULL-BLEED BACKGROUND IMAGES
          With smooth Ken Burns forward & backward zoom motion
         ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {SLIDES.map((slide, idx) => {
          const isActive = currentIdx === idx;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.headline}
                className={`w-full h-full object-cover object-center sm:object-[center_35%] transition-transform duration-[4500ms] ease-out ${
                  isActive ? 'scale-108' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Natural Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/20 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40 z-20 pointer-events-none" />
      </div>

      {/* =========================================================================
          CLEAN TYPOGRAPHY (HEADLINE & DESCRIPTION ONLY)
         ========================================================================= */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          {/* Main Headline */}
          <div 
            key={`title-${currentSlide.id}`}
            className={direction === 'up' ? 'animate-hero-up' : 'animate-hero-down'}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              {currentSlide.headline}
            </h1>
          </div>

          {/* Description Paragraph */}
          <p 
            key={`desc-${currentSlide.id}`}
            className={`text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl ${
              direction === 'up' ? 'animate-hero-up' : 'animate-hero-down'
            }`}
          >
            {currentSlide.description}
          </p>

        </div>
      </div>

    </section>
  );
};
