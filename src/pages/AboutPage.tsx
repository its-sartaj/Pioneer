import React from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Award, 
  Compass, 
  Layers, 
  Phone
} from 'lucide-react';
import { OurClientsSlider } from '../components/OurClientsSlider';
import { PageId } from '../components/Navbar';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Header Banner */}
      <div className="relative py-14 sm:py-18 bg-slate-900 overflow-hidden text-center">
        {/* Background photo */}
        <img
          src="./assets/achievements_bg.jpg"
          alt="About Us Header"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        {/* Deep Slate Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/80 to-slate-950/90" />

        {/* Content - Breadcrumbs */}
        <div className="relative z-10 space-y-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide">
            About Pioneer Fab Tech
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 font-medium pt-1">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-500 select-none">•</span>
            <span className="text-white font-bold select-none">About Us</span>
          </div>
        </div>
      </div>

      {/* 2. Main Company Story & Profile */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Authentic Human Company Story */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-black tracking-wider uppercase text-amber-600">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>COMPANY PROFILE & HISTORY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mt-1">
                  Built on 14+ Years of Precision Engineering
                </h2>
                <p className="text-xs sm:text-sm font-semibold italic text-slate-500 mt-1 tracking-wide">
                  Founded in 2012 by Sagthabhai Darghabhai Chaudhari • Vasai-Virar, Palghar
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                <p>
                  Pioneer Fab Tech started in 2012 with a single, clear objective: to bring honest industrial rigor and zero-tolerance craftsmanship to high-end architectural metal fabrication in Western India. Founded by <strong className="text-slate-900 font-semibold">Sagthabhai Darghabhai Chaudhari</strong> in the Vasai-Virar industrial corridor, what began as a dedicated fabrication shop has grown into an ISO 9001:2008 certified manufacturing operation trusted by India's leading commercial developers, architects, and structural contractors.
                </p>
                <p>
                  Today, operating out of our <strong className="text-slate-900 font-semibold">6,500+ sq. ft. covered workshop</strong> at Jay Ambe Chawl Lake, Vasai East, we engineer custom architectural staircases, titanium PVD decorative laser screens, glass balustrades, portal canopies, and industrial plant mezzanines.
                </p>
                <p>
                  Our work stands prominently across landmark destinations such as <strong className="text-slate-900 font-semibold">Nexus Mall Hyderabad, Westend Mall Pune, and Nexus Seawoods Mall Navi Mumbai</strong>, along with luxury private residential estates across Mumbai and Alibaug.
                </p>
                <p>
                  We don't outsource quality. Every project is measured on-site, modeled in CAD, cut on high-speed CNC fiber lasers, formed on hydraulic press brakes, and <strong className="text-slate-900 font-semibold">100% trial-assembled on our factory floor</strong> prior to dispatch. When our crew arrives on your site, components bolt and weld into place with millimeter accuracy—eliminating costly rework and handover delays.
                </p>
              </div>

              {/* Action buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:shadow-md"
                >
                  Explore Our Services
                </button>
                <button
                  onClick={() => onNavigate('infrastructure')}
                  className="px-6 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200/80 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Inspect Our Workshop
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Column: Architectural Photo with Technical Frame */}
            <div className="lg:col-span-5">
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
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md rounded-xl p-3.5 border border-slate-700/60 shadow-lg text-white">
                  <div className="flex items-center gap-2 text-amber-400 text-[11px] font-black uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
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

      {/* 3. Core Manufacturing Pillars */}
      <section className="py-14 sm:py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-wider">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Our 4 Pillars of Fabrication Integrity
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              The fundamental engineering standards that guarantee every weld, joint, and surface finish meets architectural perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">100% Pre-Assembly</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every staircase, railing run, and facade portal is trial-assembled on our factory floor before dispatch to guarantee zero site welding errors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Certified Prime Metals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We use authentic Jindal SS 304/316 and Tata/SAIL IS 2062 structural steel with verifiable Mill Test Certificates. No substandard blends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">±0.05mm CNC Precision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-speed fiber laser cutting and 160-ton hydraulic CNC press braking guarantee exact tolerances on all complex architectural profiles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">ISO 9001:2008 Certified</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict quality management protocols governing material traceability, argon shielding gas purity, weld inspection, and protective packing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Workshop Facts */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  Leadership Commitment
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Direct Craftsman Accountability on Every Order
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                  "When you work with Pioneer Fab Tech, you speak directly with experienced metalworkers and engineers who understand the practical realities of structural load, thermal expansion, weld discoloration, and installation constraints. We take personal ownership of your drawings from day one."
                </p>
                <div className="pt-2 text-xs text-slate-400">
                  <div className="text-white font-bold text-sm">Sagthabhai Darghabhai Chaudhari</div>
                  <div className="text-amber-400">Founder & Managing Director • Pioneer Fab Tech</div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                  <div className="text-xs text-slate-400 uppercase font-bold">Head Office & Works</div>
                  <div className="text-sm font-semibold text-white mt-1">
                    Jay Ambe Chawl Lake, Near Sai Baba Mandir, Vasai East, Palghar - 401208
                  </div>
                </div>

                <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                  <div className="text-xs text-slate-400 uppercase font-bold">Direct Phone & WhatsApp</div>
                  <div className="text-sm font-semibold text-amber-400 mt-1">
                    +91 90295 55233 / +91 98922 89233
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Client Section - Pura Box Smoothly Slides Horizontally on timer, No Dots, No Arrows */}
      <OurClientsSlider />

    </div>
  );
};
