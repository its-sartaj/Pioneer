import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ChevronRight, 
  ChevronsRight,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import logoImg from '../assets/pioneer_logo_new.png';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

/* =========================================================================
   CUSTOM CRISP TECHNICAL BLUEPRINT ICONS (MATCHING REFERENCE IMAGE BADGES)
   ========================================================================= */

// 1. Architectural Spiral & Helical Staircases
const StairsIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path d="M4 19h4v-4h4v-4h4V7h4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 19v-4" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 2. CNC Laser Cut Jali & Decorative Partitions (Laser nozzle with beam/flame)
const LaserCutIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path d="M12 2v6" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M8 8h8l-2 5h-4l-2-5z" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M12 13v3" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 20h16" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="12" cy="19" r="1.5" fill="currentColor" />
  </svg>
);

// 3. Commercial Glass Facades, Doors & Structural Glazing
const FacadeIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <rect x="4" y="3" width="16" height="18" rx="1.5" strokeWidth="2" />
    <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1.5" />
    <line x1="4" y1="9" x2="20" y2="9" strokeWidth="1.5" />
    <line x1="4" y1="15" x2="20" y2="15" strokeWidth="1.5" />
    <circle cx="9" cy="18" r="0.8" fill="currentColor" />
    <circle cx="15" cy="18" r="0.8" fill="currentColor" />
  </svg>
);

// 4. Elevator Portal Cladding & Lift Door Architraves
const ElevatorIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="2" />
    <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1.5" strokeDasharray="2 2" />
    <polyline points="7 9 9 7 11 9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="13 15 15 17 17 15" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 5. SS & Glass Balcony Railings & Handrails
const RailingIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="6" y1="6" x2="6" y2="20" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="6" x2="12" y2="20" strokeWidth="2" strokeLinecap="round" />
    <line x1="18" y1="6" x2="18" y2="20" strokeWidth="2" strokeLinecap="round" />
    <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 6. Heavy Industrial Fabrication & Safety
const SafetyIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path d="M12 3l8 3.5v5.5c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V6.5L12 3z" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="2.5" strokeWidth="1.8" />
    <path d="M12 9.5v1M12 13.5v1M9.5 12h1M13.5 12h1" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020b18] text-white overflow-hidden font-sans border-t-2 border-[#E5A93C]">
      {/* Top Architectural Golden Accent Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent shadow-[0_0_12px_#E5A93C]" />
      
      {/* =========================================================================
          BACKGROUND INDUSTRIAL ATMOSPHERE (EXACT RECREATION OF REFERENCE IMAGE)
         ========================================================================= */}
      
      {/* 1. Deep Midnight Blue Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020917] via-[#04142d] to-[#010814] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent pointer-events-none" />

      {/* 2. Top-Left Brushed Metallic Corner Plate Accent */}
      <div 
        className="absolute -top-20 -left-20 w-80 h-80 pointer-events-none opacity-80"
        style={{
          background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.3) 0%, rgba(71, 85, 105, 0.15) 45%, transparent 60%)',
          clipPath: 'polygon(0 0, 100% 0, 0 100%)'
        }}
      />
      {/* Top-Left Chrome Highlight Bevel Line */}
      <div 
        className="absolute top-0 left-0 w-72 h-[1.5px] bg-gradient-to-r from-slate-200 via-slate-400 to-transparent pointer-events-none rotate-[45deg] origin-top-left opacity-60"
      />



      {/* 4. Steel Warehouse Framework Truss SVG (Right Side Background Silhouette) */}
      <div className="absolute bottom-0 right-0 w-[480px] h-[260px] pointer-events-none opacity-30 hidden md:block">
        <svg viewBox="0 0 480 260" fill="none" className="w-full h-full text-blue-400">
          {/* Vertical Columns */}
          <line x1="80" y1="260" x2="80" y2="100" stroke="currentColor" strokeWidth="3" />
          <line x1="160" y1="260" x2="160" y2="70" stroke="currentColor" strokeWidth="3" />
          <line x1="240" y1="260" x2="240" y2="40" stroke="currentColor" strokeWidth="3.5" />
          <line x1="320" y1="260" x2="320" y2="40" stroke="currentColor" strokeWidth="3.5" />
          <line x1="400" y1="260" x2="400" y2="60" stroke="currentColor" strokeWidth="3" />
          <line x1="470" y1="260" x2="470" y2="90" stroke="currentColor" strokeWidth="3" />

          {/* Roof Rafters & Beams */}
          <line x1="60" y1="110" x2="240" y2="40" stroke="currentColor" strokeWidth="3" />
          <line x1="240" y1="40" x2="480" y2="100" stroke="currentColor" strokeWidth="3" />
          
          {/* Floor Girders */}
          <line x1="60" y1="160" x2="480" y2="160" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
          <line x1="60" y1="210" x2="480" y2="210" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />

          {/* Diagonal Cross Braces */}
          <line x1="80" y1="260" x2="160" y2="160" stroke="currentColor" strokeWidth="1.5" />
          <line x1="160" y1="260" x2="80" y2="160" stroke="currentColor" strokeWidth="1.5" />
          <line x1="160" y1="260" x2="240" y2="160" stroke="currentColor" strokeWidth="1.5" />
          <line x1="240" y1="260" x2="160" y2="160" stroke="currentColor" strokeWidth="1.5" />
          <line x1="240" y1="260" x2="320" y2="160" stroke="currentColor" strokeWidth="1.5" />
          <line x1="320" y1="260" x2="240" y2="160" stroke="currentColor" strokeWidth="1.5" />
          <line x1="320" y1="260" x2="400" y2="160" stroke="currentColor" strokeWidth="1.5" />
          <line x1="400" y1="260" x2="320" y2="160" stroke="currentColor" strokeWidth="1.5" />

          {/* Upper Trusses */}
          <line x1="80" y1="160" x2="160" y2="70" stroke="currentColor" strokeWidth="1.5" />
          <line x1="160" y1="160" x2="240" y2="40" stroke="currentColor" strokeWidth="1.5" />
          <line x1="240" y1="40" x2="320" y2="160" stroke="currentColor" strokeWidth="1.5" />
          <line x1="320" y1="160" x2="400" y2="60" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 5. Polished Stainless Steel Pipes / Tubes (Bottom-Left Corner Graphic) */}
      <div className="absolute bottom-6 left-3 w-48 h-24 pointer-events-none opacity-85 hidden xl:block">
        <svg viewBox="0 0 180 80" fill="none" className="w-full h-full">
          {/* Cylinder 1 (Front Large Round Pipe) */}
          <g>
            {/* Pipe Body */}
            <path d="M28 28 L140 28 L140 68 L28 68 Z" fill="url(#metalPipeGrad)" />
            {/* Front Ellipse Opening */}
            <ellipse cx="28" cy="48" rx="16" ry="20" fill="url(#metalBevelGrad)" stroke="#cbd5e1" strokeWidth="2.5" />
            <ellipse cx="28" cy="48" rx="11" ry="15" fill="#020917" stroke="#475569" strokeWidth="1.5" />
            {/* Chrome Specular Highlights */}
            <line x1="28" y1="33" x2="140" y2="33" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="28" y1="37" x2="140" y2="37" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.6" />
          </g>

          {/* Square Hollow Section 2 (Middle) */}
          <g>
            <rect x="70" y="44" width="28" height="24" rx="2" fill="#030c1d" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="74" y="48" width="20" height="16" rx="1" fill="#020610" stroke="#64748b" strokeWidth="1.2" />
            <path d="M98 44 L150 44 L150 68 L98 68 Z" fill="url(#metalSquareGrad)" />
            <line x1="98" y1="46" x2="150" y2="46" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.7" />
          </g>

          {/* Smaller Square Hollow Section 3 (Right) */}
          <g>
            <rect x="110" y="50" width="22" height="18" rx="2" fill="#030c1d" stroke="#e2e8f0" strokeWidth="1.8" />
            <rect x="113" y="53" width="16" height="12" rx="1" fill="#01040a" stroke="#475569" strokeWidth="1" />
            <path d="M132 50 L175 50 L175 68 L132 68 Z" fill="url(#metalSquareGrad)" />
          </g>

          <defs>
            <linearGradient id="metalPipeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="15%" stopColor="#f8fafc" />
              <stop offset="45%" stopColor="#475569" />
              <stop offset="70%" stopColor="#1e293b" />
              <stop offset="90%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="metalSquareGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="30%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="metalBevelGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          MAIN 4-COLUMN FOOTER CONTENT (EXACT MATCH TO REFERENCE IMAGE)
         ========================================================================= */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">
          
          {/* =====================================================================
              COLUMN 1: BRAND LOGO BADGE & COMPANY PROFILE (Cols 1-3.5)
             ===================================================================== */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-4">
            
            {/* 3D Brushed Metallic Chrome Bevel Badge for Logo */}
            <div className="relative inline-block w-full max-w-[280px]">
              <div className="relative p-[3px] rounded-2xl bg-gradient-to-b from-slate-200 via-slate-400 to-slate-700 shadow-[0_12px_28px_rgba(0,0,0,0.85),inset_0_2px_4px_rgba(255,255,255,0.9)]">
                {/* Inner white glossy surface */}
                <div className="bg-gradient-to-b from-white via-[#fcfdff] to-[#f1f5f9] rounded-xl px-4 py-3 flex items-center justify-center shadow-inner">
                  <img 
                    src={logoImg} 
                    alt="Pioneer Fab Tech - Innovation Precision Excellence" 
                    className="h-12 sm:h-14 w-auto object-contain max-w-full"
                  />
                </div>
              </div>
            </div>

            {/* Clean Architectural Divider */}
            <div className="h-0.5 w-16 bg-[#E5A93C] my-3 rounded-full shadow-[0_0_8px_rgba(229,169,60,0.5)]" />

            {/* Exact Company Description from Reference Image */}
            <p className="text-[13px] text-slate-300 leading-relaxed font-normal pr-2">
              Founded in 2012, Pioneer Fab Tech is an ISO 9001:2008 certified metal fabrication workshop based in Vasai-Virar, Palghar. We manufacture architectural spiral staircases, CNC fiber laser partitions, commercial storefront facades, and certified SS balustrades for leading architects, developers, and luxury residences.
            </p>

          </div>

          {/* =====================================================================
              COLUMN 2: QUICK PAGES (Cols 4-6)
             ===================================================================== */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-3.5">
            
            {/* Header: >> QUICK PAGES with Orange Double Chevron & Glow Line */}
            <div>
              <div className="flex items-center gap-1.5">
                <ChevronsRight className="w-5 h-5 text-[#E5A93C] stroke-[3]" />
                <h4 className="text-[15px] font-black text-white uppercase tracking-wider">
                  QUICK PAGES
                </h4>
              </div>
              {/* Orange Glow Line with flare */}
              <div className="relative h-[2px] w-full max-w-[170px] mt-1.5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E5A93C] via-[#f3c56e] to-transparent shadow-[0_0_10px_#E5A93C]" />
              </div>
            </div>

            {/* 8 Links with Circular Chevron Icons */}
            <ul className="space-y-2 pt-1 text-[13px]">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Our Services' },
                { id: 'projects', label: 'Our Projects' },
                { id: 'gallery', label: 'Project Gallery' },
                { id: 'materials', label: 'Material Supply' },
                { id: 'certificates', label: 'Certificates' },
                { id: 'contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id as PageId)}
                    className="group flex items-center gap-3 text-slate-200 hover:text-[#E5A93C] transition-colors text-left cursor-pointer w-full"
                  >
                    {/* Circular Blue Badge with Chevron ( > ) */}
                    <span className="w-5 h-5 rounded-full bg-[#081a38] border border-[#38bdf8]/60 text-[#38bdf8] flex items-center justify-center shrink-0 shadow-[0_0_6px_rgba(56,189,248,0.35)] group-hover:border-[#E5A93C] group-hover:text-[#E5A93C] group-hover:shadow-[0_0_8px_rgba(229,169,60,0.5)] transition-all">
                      <ChevronRight className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span className="font-medium tracking-wide group-hover-underline-burgundy">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>

          </div>

          {/* =====================================================================
              COLUMN 3: SPECIALIZED SERVICES (Cols 7-9)
             ===================================================================== */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-3.5">
            
            {/* Header: >> SPECIALIZED SERVICES with Orange Double Chevron & Glow Line */}
            <div>
              <div className="flex items-center gap-1.5">
                <ChevronsRight className="w-5 h-5 text-[#E5A93C] stroke-[3]" />
                <h4 className="text-[15px] font-black text-white uppercase tracking-wider">
                  SPECIALIZED SERVICES
                </h4>
              </div>
              {/* Orange Glow Line with flare */}
              <div className="relative h-[2px] w-full max-w-[210px] mt-1.5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E5A93C] via-[#f3c56e] to-transparent shadow-[0_0_10px_#E5A93C]" />
              </div>
            </div>

            {/* 6 Services with Technical Blue Blueprint Icon Badges */}
            <ul className="space-y-3 pt-1 text-[13px]">
              {[
                {
                  title: 'Architectural Spiral & Helical Staircases',
                  fullTitle: 'Architectural Spiral & Helical Staircases',
                  icon: StairsIcon,
                },
                {
                  title: 'CNC Laser Cut Jali & Decorative...',
                  fullTitle: 'CNC Laser Cut Jali & Decorative Partitions',
                  icon: LaserCutIcon,
                },
                {
                  title: 'Commercial Glass Facades, Doors &...',
                  fullTitle: 'Commercial Glass Facades, Doors & Structural Glazing',
                  icon: FacadeIcon,
                },
                {
                  title: 'Elevator Portal Cladding & Lift Door...',
                  fullTitle: 'Elevator Portal Cladding & Lift Door Architraves',
                  icon: ElevatorIcon,
                },
                {
                  title: 'SS & Glass Balcony Railings & Handrails',
                  fullTitle: 'SS & Glass Balcony Railings & Architectural Handrails',
                  icon: RailingIcon,
                },
                {
                  title: 'Heavy Industrial Fabrication & Safety...',
                  fullTitle: 'Heavy Industrial Fabrication & Machine Safety Enclosures',
                  icon: SafetyIcon,
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <li key={idx}>
                    <button
                      onClick={() => onNavigate('services')}
                      title={item.fullTitle}
                      className="group flex items-center gap-3 text-slate-200 hover:text-[#E5A93C] transition-colors text-left cursor-pointer w-full"
                    >
                      {/* Technical Blueprint Neon Square Badge */}
                      <span className="w-6 h-6 rounded-md bg-[#091f42] border border-[#38bdf8] text-[#38bdf8] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(56,189,248,0.45)] group-hover:border-[#E5A93C] group-hover:text-[#E5A93C] group-hover:shadow-[0_0_10px_rgba(229,169,60,0.5)] transition-all">
                        <IconComponent className="w-3.5 h-3.5 stroke-[2]" />
                      </span>
                      <span className="font-medium tracking-wide truncate group-hover-underline-burgundy">{item.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

          </div>

          {/* =====================================================================
              COLUMN 4: WORKSHOP & OFFICE (Cols 10-12)
             ===================================================================== */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-3.5">
            
            {/* Header: >> WORKSHOP & OFFICE with Orange Double Chevron & Glow Line */}
            <div>
              <div className="flex items-center gap-1.5">
                <ChevronsRight className="w-5 h-5 text-[#E5A93C] stroke-[3]" />
                <h4 className="text-[15px] font-black text-white uppercase tracking-wider">
                  WORKSHOP & OFFICE
                </h4>
              </div>
              {/* Orange Glow Line with flare */}
              <div className="relative h-[2px] w-full max-w-[190px] mt-1.5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E5A93C] via-[#f3c56e] to-transparent shadow-[0_0_10px_#E5A93C]" />
              </div>
            </div>

            {/* Address, Phone and Email (Exact Match to Reference) */}
            <div className="space-y-4 pt-1 text-[13px] text-slate-200">
              
              {/* Location with Orange Map Pin Badge */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E5A93C] text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(229,169,60,0.5)] mt-0.5">
                  <MapPin className="w-3.5 h-3.5 fill-slate-950 text-slate-950 stroke-[2.2]" />
                </div>
                <div className="leading-snug text-slate-200 font-medium">
                  <p>S. No.233 H.No.2 Shop No.03 Jay</p>
                  <p>Ambe Chawl Lake Vasai Virar, Palghar</p>
                  <p>Maharashtra 401208</p>
                </div>
              </div>

              {/* Large Bold Phone Number with Solid Orange Phone Icon */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#E5A93C] fill-[#E5A93C]" />
                </div>
                <a 
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-base sm:text-lg font-black text-white hover:text-[#E5A93C] tracking-wide transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              {/* Email with Solid Orange Mail Icon */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#E5A93C] fill-[#E5A93C]/30" />
                </div>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-[13px] text-slate-200 hover:text-[#E5A93C] transition-colors break-all font-medium"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Solid Architectural Divider */}
      <div className="w-full h-px bg-slate-800" />

      {/* =========================================================================
          BOTTOM COPYRIGHT BAR & CURVED METALLIC CAPSULE DOCK
         ========================================================================= */}
      <div className="relative z-10 bg-[#010712] py-3.5 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright Statement (Exact wording requested by user) */}
          <div className="text-xs sm:text-[13px] text-slate-300 tracking-wide font-normal text-center md:text-left">
            © 2026 <span className="text-[#E5A93C] font-semibold">Pioneer Fab Tech</span>. All Rights Reserved. &nbsp;|&nbsp; Designed & Developed by Sajid Web Solution
          </div>

          {/* Sculpted Metallic Curved Capsule / Pill Housing 3 Buttons (Exact Match to Reference Image) */}
          <div className="relative flex items-center p-1 pl-3.5 rounded-full bg-slate-900 border border-slate-800 shadow-sm">
            <div className="flex items-center gap-3">
              
              {/* Button 1: White circle button with black up arrow (Back-to-Top) */}
              <button
                onClick={scrollToTop}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-slate-900 shadow-lg flex items-center justify-center hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                title="Scroll to Top"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4 stroke-[3]" />
              </button>

              {/* Button 2: Deep sapphire blue circle with white telephone icon */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-b from-[#0b2959] to-[#051530] text-white border border-cyan-400/50 shadow-lg flex items-center justify-center hover:border-[#E5A93C] hover:scale-105 active:scale-95 transition-all"
                title="Call Pioneer Fab Tech"
                aria-label="Call +91 90295 55233"
              >
                <Phone className="w-4 h-4 text-white fill-white/20" />
              </a>

              {/* Button 3: Vibrant green circle with WhatsApp icon */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all ring-2 ring-emerald-400/50"
                title="Chat on WhatsApp"
                aria-label="WhatsApp Us Direct"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-white/20" />
              </a>

            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
