import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Layers,
  ChevronRight,
  Hammer,
  Award,
  Truck,
  Cpu,
  Scissors,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, MATERIAL_SUPPLY_ITEMS } from '../data/siteData';
import { AutoSliderRow } from '../components/AutoSliderRow';
import { PageId } from '../components/Navbar';
import { HeroSlider } from '../components/HeroSlider';
import { OurAchievementsSection } from '../components/OurAchievementsSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Section with 3 uploaded background images, clean typography, auto slide, no arrows */}
      <HeroSlider onNavigate={onNavigate} />

      {/* 2. Company Profile & About Us Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Company Profile & About Us Text */}
            <div className="lg:col-span-7 space-y-5">
              <div className="reveal-word">
                <div className="flex items-center gap-2 text-xs font-black tracking-wider uppercase text-amber-600">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>COMPANY PROFILE</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mt-1">
                  PIONEER FAB TECH
                </h1>
                <p className="text-xs sm:text-sm font-semibold italic text-slate-500 mt-1 tracking-wide">
                  Innovation | Precision | Excellence
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed reveal-word delay-150">
                <p>
                  Pioneer Fab Tech is a professionally driven architectural and industrial metal fabrication company specializing in delivering high-quality, precision-engineered fabrication solutions for modern infrastructure, commercial developments and industrial applications.
                </p>
                <p>
                  With a strong focus on innovation, craftsmanship and technical excellence, we provide comprehensive fabrication services that combine structural strength, functional performance and contemporary aesthetics.
                </p>
                <p>
                  Our expertise spans architectural metalwork, customized steel fabrication, advanced laser cutting, glass and stainless-steel installations, and specialized industrial fabrication. From concept development and customized manufacturing to fabrication and installation, we aim to deliver solutions that meet the unique requirements of every project.
                </p>
                <p>
                  At Pioneer Fab Tech, we believe that every structure deserves precision, durability and attention to detail. Our commitment is to provide dependable workmanship, quality materials and professional service at every stage of execution.
                </p>
              </div>

              {/* About Us Action Button - Navigates to About page on click */}
              <div className="pt-3 reveal-word delay-200">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md hover:shadow-lg hover:translate-x-0.5 active:translate-x-0 group"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Uploaded Image with Architectural Frame - Slides in smoothly from right */}
            <div className="lg:col-span-5 reveal-from-right delay-200">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-100">
                <img 
                  src="./assets/aistudio/stainless-steel-glass-railing-500x500-1_c0a27d81.jpg" 
                  alt="Pioneer Fab Tech Precision Architectural Stainless Steel & Glass Railing Installation" 
                  className="w-full h-[460px] sm:h-[520px] lg:h-[560px] object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.src.includes('WhatsApp_Image')) {
                      target.src = './assets/aistudio/WhatsApp_Image_2026-11-03_at_1.03.58_PM_2f881ee9.jpeg';
                    }
                  }}
                />
                
                {/* Floating Technical Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md rounded-xl p-3.5 border border-slate-700/60 shadow-lg text-white">
                  <div className="flex items-center gap-2 text-amber-400 text-[11px] font-black uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>On-Site Precision Execution</span>
                  </div>
                  <p className="text-xs text-slate-200 mt-1 font-medium leading-snug">
                    Architectural Stainless Steel & Toughened Glass Balustrade Installation
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Services Section - Compact Line-Wise Auto Slider with Mouse Drag */}
      <section className="py-14 sm:py-18 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 reveal-word">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-wider">
              What We Build
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Our Core Fabrication Services
            </h2>
          </div>

          <div className="reveal-on-scroll delay-150">
            <AutoSliderRow intervalMs={3500}>
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  onClick={() => onNavigate('services')}
                  className="group relative w-[230px] sm:w-[260px] h-[210px] sm:h-[230px] shrink-0 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-900 cursor-pointer select-none snap-start"
                >
                  <img 
                    src={service.heroImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 mb-1">
                      {service.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </AutoSliderRow>
          </div>

        </div>
      </section>

      {/* 4. Detailed "Why Choose Us" Section (Replaced Work Process) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 reveal-word">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>The Pioneer Advantage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Why Architects, Builders & Contractors Choose Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Direct workshop manufacturing from our Vasai-Virar facility, high-precision CNC tooling, certified raw materials, and dependable on-site execution without broker margins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: Direct In-House Workshop */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all group hover:border-amber-400/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold shadow-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Hammer className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                    Direct In-House Workshop
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    Vasai-Virar Manufacturing Facility
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Over 6,500 sq.ft. of fully equipped fabrication bays with a 5-ton overhead EOT crane. You work directly with manufacturers at transparent rates with zero middleman commissions.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-[11px] font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>6,500+ Sq.Ft. Workshop • 5-Ton Crane</span>
              </div>
            </div>

            {/* Card 2: CNC Laser & Bending Precision */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all group hover:border-amber-400/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold shadow-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                    CNC Laser & Bending Precision
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    ±0.05 mm Micro-Kerf Accuracy
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-speed fiber laser cutting systems and multi-axis CNC hydraulic press brakes handle up to 20mm mild steel and 12mm stainless steel with clean, burr-free edges and zero distortion.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-[11px] font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CNC Fiber Laser • 160T Press Brake</span>
              </div>
            </div>

            {/* Card 3: 100% Prime Certified Materials */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all group hover:border-amber-400/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold shadow-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                    Prime Certified Raw Materials
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    EN 10204 3.1 Mill Test Certificates
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We fabricate only with authenticated virgin SS 304, marine-grade SS 316, electrolytic 99.9% copper, and high-strength alloys accompanied by complete chemical and mechanical test reports.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-[11px] font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certified MTC 3.1 • Traceable Batches</span>
              </div>
            </div>

            {/* Card 4: 100% Pre-Fit Trial Assembly */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all group hover:border-amber-400/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold shadow-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Scissors className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                    100% Pre-Fit Trial Assembly
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    Zero Site Cutting or Delays
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every staircase stringer, portal cladding frame, and glass balustrade section is fully mock-assembled and dimensionally verified in our workshop before dispatch to ensure zero on-site alterations.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-[11px] font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Factory Pre-Assembly • Seamless Site Fit</span>
              </div>
            </div>

            {/* Card 5: 14+ Years & 850+ Projects */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all group hover:border-amber-400/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold shadow-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                    14+ Years Proven Track Record
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    850+ Successful Architectural Projects
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trusted by premier shopping malls (Nexus Hyderabad, Westend Pune, Nexus Seawoods Mumbai), commercial headquarters, boutique hotels, and luxury villas across Maharashtra and interstate sites.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-[11px] font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>850+ Projects • 620+ Repeat Clients</span>
              </div>
            </div>

            {/* Card 6: Turnkey On-Site Laser Staging */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all group hover:border-amber-400/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold shadow-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                    Turnkey On-Site Fitting & Rigging
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    Certified Riggers & Argon Welders
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We don't just supply metal — our in-house site engineers, laser-guided levelers, and certified argon TIG welders manage the complete on-site installation with strict PPE and safety standards.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-[11px] font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Turnkey Erection • Laser-Guided Fitting</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Material Supply Section (Replacing Industries We Serve) */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2 reveal-word">
            <span className="text-[#ff7a00] font-bold text-xs uppercase tracking-wider">
              Prime Grade Certified Raw Materials
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Material Supply & Stockyard
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Prime certified Stainless Steel, Copper, Aluminium & Titanium raw materials available in ready stock with cut-to-size shearing and dispatch from Vasai-Virar, Palghar.
            </p>
          </div>

          {/* Auto Slider of all 11 Materials */}
          <div className="reveal-on-scroll delay-150">
            <AutoSliderRow intervalMs={3600}>
              {MATERIAL_SUPPLY_ITEMS.map((material) => (
                <div
                  key={material.id}
                  onClick={() => onNavigate('materials')}
                  className="group relative w-[240px] sm:w-[270px] h-[220px] sm:h-[240px] shrink-0 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-[#ff7a00] transition-all duration-300 bg-slate-950 cursor-pointer select-none snap-start shadow-lg"
                >
                  <img 
                    src={material.image} 
                    alt={material.name} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    draggable={false}
                  />
                  {/* Clean gradient overlay with clean material name and subtitle */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#ff7a00] mb-1">
                      {material.categoryLabel}
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-white leading-snug group-hover:text-amber-300 transition-colors line-clamp-1">
                      {material.name}
                    </h3>
                    <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                      {material.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </AutoSliderRow>
          </div>

          {/* Explore Material Supply Button */}
          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('materials')}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-[#ff7a00] hover:bg-[#d95c18] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md hover:shadow-lg"
            >
              <span>Explore All 11 Material Categories</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 6. Our Achievements Section (Placed right after Material Supply, before bottom) */}
      <OurAchievementsSection />

    </div>
  );
};
