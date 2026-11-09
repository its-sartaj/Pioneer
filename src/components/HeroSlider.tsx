import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageId } from './Navbar';

interface HeroSliderProps {
  onNavigate: (page: PageId) => void;
}

interface SlideItem {
  id: number;
  image: string;
  badge: string;
  headline: string;
  description: string;
  specs: string[];
  projectTag: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    image: './assets/aistudio/WhatsApp_Image_2026-11-03_at_1.04.00_PM__1__3cfa08e4.jpeg',
    badge: 'Architectural Structural Fabrication',
    headline: 'Architectural Steel & Precision Spiral Staircases',
    description: 'Bespoke helical staircases, double-height atrium steelwork, and floor-to-ceiling glass lobby installations engineered with IS 2062 heavy structural steel and master craftsmanship.',
    specs: ['Bespoke Helical Geometry', 'IS 2062 Tested Steel', 'Turnkey Site Erection'],
    projectTag: 'Modern Glass Atrium & Helical Staircase',
  },
  {
    id: 2,
    image: './assets/aistudio/WhatsApp_Image_2026-11-03_at_1.04.01_PM_5eb73795.jpeg',
    badge: 'CNC Fiber Laser & PVD Coating',
    headline: 'Luxury CNC Laser Cut Jali & Decorative Partitions',
    description: 'Sub-millimeter CNC fiber laser cut metal screens, luxury titanium PVD gold partitions, and architectural geometric room dividers for premium residences and hospitality interiors.',
    specs: ['0.1mm Precision Laser Cut', 'Titanium PVD Gold Coating', 'Grade 304 / 316 Stainless Steel'],
    projectTag: 'Geometric Cubic PVD Gold Partition',
  },
  {
    id: 3,
    image: './assets/aistudio/WhatsApp_Image_2026-11-03_at_1.04.04_PM__1__313234b2.jpeg',
    badge: 'Commercial Facades & Glazing',
    headline: 'Commercial Glass Facades & Boutique Storefronts',
    description: 'Heavy-duty stainless steel & aluminium architectural storefronts, frameless structural glass facades, and automated luxury commercial entrance systems engineered for lasting durability.',
    specs: ['Toughened Safety Glass', 'Precision Weather Seals', 'Architectural Portal Framing'],
    projectTag: 'Boutique Storefront & Commercial Entrance',
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate }) => {
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

  const handleIndicatorClick = (idx: number) => {
    if (idx === currentIdx) return;
    setDirection(idx > currentIdx ? 'up' : 'down');
    setCurrentIdx(idx);
    resetAutoSlideTimer();
  };

  const currentSlide = SLIDES[currentIdx];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[620px] sm:min-h-[660px] lg:min-h-[720px] flex items-center">
      
      {/* =========================================================================
          FULL-BLEED BACKGROUND IMAGES (PURA IMAGE AS BACKGROUND)
          With smooth Ken Burns forward & backward zoom ("aage-piche" motion)
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

        {/* Natural Vignette Overlay: Dark on the left for crisp text readability, 
            completely clear on the right so the image is 100% visible and clean */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/15 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40 z-20 pointer-events-none" />
      </div>

      {/* =========================================================================
          CONTENT OVERLAY: PURE CLEAN HUMAN TYPOGRAPHY (NO "LAL PILA" TEXT)
         ========================================================================= */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          {/* Subtle Clean Badge */}
          <div 
            key={`badge-${currentSlide.id}`}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-semibold tracking-wider uppercase ${
              direction === 'up' ? 'animate-hero-up' : 'animate-hero-down'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>{currentSlide.badge}</span>
          </div>

          {/* Clean Main Headline - Pure White, Natural Human Font */}
          <div 
            key={`title-${currentSlide.id}`}
            className={direction === 'up' ? 'animate-hero-up' : 'animate-hero-down'}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              {currentSlide.headline}
            </h1>
          </div>

          {/* Clean Description Paragraph - Natural Slate/White */}
          <p 
            key={`desc-${currentSlide.id}`}
            className={`text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl ${
              direction === 'up' ? 'animate-hero-up' : 'animate-hero-down'
            }`}
          >
            {currentSlide.description}
          </p>

          {/* Professional Call-to-Action Buttons (No Quote Button) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore Completed Projects</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/30 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* Clean Technical Feature Highlights */}
          <div 
            key={`specs-${currentSlide.id}`}
            className={`pt-4 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-white/15 text-xs sm:text-sm text-slate-200 ${
              direction === 'up' ? 'animate-hero-up' : 'animate-hero-down'
            }`}
          >
            {currentSlide.specs.map((spec, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">{spec}</span>
              </div>
            ))}
          </div>

          {/* Minimal Slide Indicator & 4.5s Animated Progress Line (NO ARROWS) */}
          <div className="pt-4 flex items-center gap-4">
            <span className="text-xs font-mono font-bold text-slate-300">
              0{currentIdx + 1} / 0{SLIDES.length}
            </span>

            <div className="flex items-center gap-2.5">
              {SLIDES.map((slide, idx) => {
                const isActive = currentIdx === idx;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleIndicatorClick(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className="group relative h-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
                    style={{ width: isActive ? '48px' : '18px' }}
                  >
                    {/* Background track */}
                    <span className="absolute inset-0 bg-white/20 group-hover:bg-white/35 transition-colors rounded-full" />
                    
                    {/* Animated progress bar for active slide */}
                    {isActive && (
                      <span 
                        key={`progress-${currentIdx}`}
                        className="absolute inset-0 rounded-full animate-hero-progress bg-amber-400"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Current Project Tag */}
            <div className="hidden sm:inline-block pl-2 border-l border-white/20 text-xs font-medium text-slate-300">
              {currentSlide.projectTag}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
