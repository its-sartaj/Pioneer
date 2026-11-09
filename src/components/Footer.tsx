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

  // Customizable CSS Variables for theme colors, blueprint grid, and logo card
  const footerVariables = {
    '--footer-bg-top': '#0a1a33',
    '--footer-bg-bottom': '#050b17',
    '--blueprint-grid-line': 'rgba(80, 160, 255, 0.08)',
    '--blueprint-grid-size': '40px',
    '--blueprint-stroke': 'rgba(80, 160, 255, 0.12)',
    '--blueprint-svg-opacity': '0.14',
    '--logo-card-border': 'rgba(80, 160, 255, 0.25)',
    '--logo-card-shadow': '0 8px 24px rgba(0, 0, 0, 0.4)',
    '--logo-glow': 'rgba(255, 138, 0, 0.05)',
    '--accent-orange': '#ff8a00',
  } as React.CSSProperties;

  return (
    <footer 
      className="relative text-white overflow-hidden font-sans border-t border-slate-800"
      style={{
        ...footerVariables,
        background: 'linear-gradient(180deg, var(--footer-bg-top) 0%, var(--footer-bg-bottom) 100%)'
      }}
    >
      {/* =========================================================================
          BACKGROUND BLUEPRINT OVERLAYS (CSS GRID + INLINE SVG LINE-ART)
         ========================================================================= */}

      {/* 1. Blueprint Grid Overlay (Thin cyan/blue lines, 40px grid, pure CSS, no image files) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60 sm:opacity-100 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--blueprint-grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--blueprint-grid-line) 1px, transparent 1px)
          `,
          backgroundSize: 'var(--blueprint-grid-size) var(--blueprint-grid-size)',
        }}
      />

      {/* 2. Bottom-Right Corner: Faint Line-Art of Steel Truss & Spiral Staircase (Stroke only, no fill, max opacity 0.15) */}
      <div 
        className="absolute bottom-0 right-0 pointer-events-none z-0 hidden sm:block w-[340px] md:w-[480px] lg:w-[580px] max-h-[340px] overflow-hidden"
        style={{ opacity: 'var(--blueprint-svg-opacity)' }}
      >
        <svg 
          viewBox="0 0 580 340" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
        >
          {/* Structural Steel Framework Truss Lattice */}
          <g stroke="var(--blueprint-stroke)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            {/* Lower Chord & Horizontal Floor Girders */}
            <line x1="20" y1="320" x2="560" y2="320" />
            <line x1="20" y1="240" x2="560" y2="240" />
            <line x1="40" y1="160" x2="380" y2="160" strokeDasharray="6 4" />
            
            {/* Pitched Roof Rafter Chord */}
            <line x1="20" y1="160" x2="220" y2="60" strokeWidth="2" />
            <line x1="220" y1="60" x2="420" y2="160" strokeWidth="2" />
            <line x1="220" y1="60" x2="220" y2="240" strokeWidth="1.8" />
            
            {/* Vertical Columns & Struts */}
            <line x1="80" y1="320" x2="80" y2="130" />
            <line x1="150" y1="320" x2="150" y2="95" />
            <line x1="290" y1="320" x2="290" y2="95" />
            <line x1="360" y1="320" x2="360" y2="130" />
            <line x1="430" y1="320" x2="430" y2="240" />
            <line x1="500" y1="320" x2="500" y2="240" />
            
            {/* Pratt & Warren Diagonal Web Braces */}
            <line x1="20" y1="320" x2="80" y2="240" />
            <line x1="80" y1="240" x2="150" y2="320" />
            <line x1="150" y1="320" x2="220" y2="240" />
            <line x1="220" y1="240" x2="290" y2="320" />
            <line x1="290" y1="320" x2="360" y2="240" />
            <line x1="360" y1="240" x2="430" y2="320" />
            <line x1="430" y1="320" x2="500" y2="240" />
            <line x1="500" y1="240" x2="560" y2="320" />

            {/* Roof Truss Diagonals */}
            <line x1="20" y1="160" x2="80" y2="240" />
            <line x1="80" y1="130" x2="150" y2="240" />
            <line x1="150" y1="95" x2="220" y2="240" />
            <line x1="220" y1="60" x2="290" y2="160" />
            <line x1="290" y1="95" x2="360" y2="240" />
            <line x1="360" y1="130" x2="420" y2="160" />
          </g>

          {/* Architectural Spiral Staircase Helix Line-Art */}
          <g stroke="var(--blueprint-stroke)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Central Axis Steel Support Column */}
            <line x1="470" y1="40" x2="470" y2="320" strokeWidth="2.5" />
            
            {/* Outer Helical Stringer Handrail Waves */}
            <path d="M 420 50 C 510 65, 520 100, 470 120 C 410 145, 410 180, 470 205 C 520 225, 520 260, 470 280 C 420 300, 420 330, 460 340" />
            <path d="M 420 62 C 510 77, 520 112, 470 132 C 410 157, 410 192, 470 217 C 520 237, 520 272, 470 292 C 420 312, 420 340, 460 340" strokeDasharray="3 3" />

            {/* Radial Helical Treads / Cantilever Steps */}
            <line x1="470" y1="50" x2="420" y2="50" />
            <line x1="470" y1="65" x2="440" y2="56" />
            <line x1="470" y1="80" x2="485" y2="68" />
            <line x1="470" y1="95" x2="512" y2="86" />
            <line x1="470" y1="110" x2="500" y2="108" />
            <line x1="470" y1="125" x2="465" y2="124" />
            <line x1="470" y1="140" x2="425" y2="135" />
            <line x1="470" y1="155" x2="415" y2="158" />
            <line x1="470" y1="170" x2="430" y2="182" />
            <line x1="470" y1="185" x2="465" y2="198" />
            <line x1="470" y1="200" x2="505" y2="204" />
            <line x1="470" y1="215" x2="515" y2="225" />
            <line x1="470" y1="230" x2="495" y2="246" />
            <line x1="470" y1="245" x2="455" y2="260" />
            <line x1="470" y1="260" x2="425" y2="270" />
            <line x1="470" y1="275" x2="430" y2="290" />
            <line x1="470" y1="290" x2="460" y2="305" />
            <line x1="470" y1="305" x2="495" y2="315" />

            {/* Helical Baluster Upright Rods */}
            <line x1="420" y1="50" x2="420" y2="62" />
            <line x1="512" y1="86" x2="512" y2="98" />
            <line x1="415" y1="158" x2="415" y2="170" />
            <line x1="515" y1="225" x2="515" y2="237" />
            <line x1="425" y1="270" x2="425" y2="282" />
          </g>
        </svg>
      </div>

      {/* =========================================================================
          MAIN 4-COLUMN FOOTER CONTENT (POSITION: RELATIVE; Z-INDEX: 1)
         ========================================================================= */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">
          
          {/* =====================================================================
              COLUMN 1: BRAND LOGO BADGE & COMPANY PROFILE (Cols 1-3.5)
             ===================================================================== */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-4">
            
            {/* Logo Badge Card (White rounded card with subtle blue border, soft shadow, & soft orange glow) */}
            <div className="relative inline-block w-full max-w-[280px]">
              {/* Very soft radial glow of orange (rgba(255,138,0,0.05)) behind the card */}
              <div 
                className="absolute -inset-3 rounded-[24px] pointer-events-none blur-md"
                style={{
                  background: 'radial-gradient(circle, var(--logo-glow) 0%, transparent 72%)'
                }}
              />

              {/* White Rounded Card Badge (border-radius 16px, subtle border, soft shadow, ample padding) */}
              <div 
                className="relative bg-white flex items-center justify-center transition-all duration-300"
                style={{
                  borderRadius: '16px',
                  border: '1px solid var(--logo-card-border)',
                  boxShadow: 'var(--logo-card-shadow)',
                  padding: '16px 20px',
                }}
              >
                <img 
                  src={logoImg} 
                  alt="Pioneer Fab Tech - Innovation Precision Excellence" 
                  className="h-12 sm:h-13 w-auto object-contain max-w-full"
                />
              </div>
            </div>

            {/* Clean Architectural Accent Line */}
            <div className="h-0.5 w-16 bg-[#ff8a00] my-3 rounded-full shadow-[0_0_8px_rgba(255,138,0,0.4)]" />

            {/* Exact Company Description from Reference Image */}
            <p className="text-[13px] text-slate-200 leading-relaxed font-normal pr-2">
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
                <ChevronsRight className="w-5 h-5 text-[#ff8a00] stroke-[3]" />
                <h4 className="text-[15px] font-black text-white uppercase tracking-wider">
                  QUICK PAGES
                </h4>
              </div>
              {/* Orange Glow Line with flare */}
              <div className="relative h-[2px] w-full max-w-[170px] mt-1.5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff8a00] via-[#ffa133] to-transparent shadow-[0_0_10px_#ff8a00]" />
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
                    className="group flex items-center gap-3 text-slate-200 hover:text-[#ff8a00] transition-colors text-left cursor-pointer w-full"
                  >
                    {/* Circular Blue Badge with Chevron ( > ) */}
                    <span className="w-5 h-5 rounded-full bg-[#081a38] border border-[#38bdf8]/60 text-[#38bdf8] flex items-center justify-center shrink-0 shadow-[0_0_6px_rgba(56,189,248,0.35)] group-hover:border-[#ff8a00] group-hover:text-[#ff8a00] group-hover:shadow-[0_0_8px_rgba(255,138,0,0.5)] transition-all">
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
                <ChevronsRight className="w-5 h-5 text-[#ff8a00] stroke-[3]" />
                <h4 className="text-[15px] font-black text-white uppercase tracking-wider">
                  SPECIALIZED SERVICES
                </h4>
              </div>
              {/* Orange Glow Line with flare */}
              <div className="relative h-[2px] w-full max-w-[210px] mt-1.5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff8a00] via-[#ffa133] to-transparent shadow-[0_0_10px_#ff8a00]" />
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
                      className="group flex items-center gap-3 text-slate-200 hover:text-[#ff8a00] transition-colors text-left cursor-pointer w-full"
                    >
                      {/* Technical Blueprint Neon Square Badge */}
                      <span className="w-6 h-6 rounded-md bg-[#091f42] border border-[#38bdf8] text-[#38bdf8] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(56,189,248,0.45)] group-hover:border-[#ff8a00] group-hover:text-[#ff8a00] group-hover:shadow-[0_0_10px_rgba(255,138,0,0.5)] transition-all">
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
                <ChevronsRight className="w-5 h-5 text-[#ff8a00] stroke-[3]" />
                <h4 className="text-[15px] font-black text-white uppercase tracking-wider">
                  WORKSHOP & OFFICE
                </h4>
              </div>
              {/* Orange Glow Line with flare */}
              <div className="relative h-[2px] w-full max-w-[190px] mt-1.5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff8a00] via-[#ffa133] to-transparent shadow-[0_0_10px_#ff8a00]" />
              </div>
            </div>

            {/* Address, Phone and Email (Exact Match to Reference) */}
            <div className="space-y-4 pt-1 text-[13px] text-slate-200">
              
              {/* Location with Orange Map Pin Badge */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff8a00] text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(255,138,0,0.4)] mt-0.5">
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
                  <Phone className="w-5 h-5 text-[#ff8a00] fill-[#ff8a00]" />
                </div>
                <a 
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-base sm:text-lg font-black text-white hover:text-[#ff8a00] tracking-wide transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              {/* Email with Solid Orange Mail Icon */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#ff8a00] fill-[#ff8a00]/30" />
                </div>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-[13px] text-slate-200 hover:text-[#ff8a00] transition-colors break-all font-medium"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Solid Architectural Divider */}
      <div className="relative z-10 w-full h-px bg-slate-800/80" />

      {/* =========================================================================
          BOTTOM COPYRIGHT BAR & CURVED METALLIC CAPSULE DOCK
         ========================================================================= */}
      <div className="relative z-10 bg-[#050b17]/90 backdrop-blur-xs py-3.5 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright Statement (Exact wording requested by user) */}
          <div className="text-xs sm:text-[13px] text-slate-300 tracking-wide font-normal text-center md:text-left">
            © 2026 <span className="text-[#ff8a00] font-semibold">Pioneer Fab Tech</span>. All Rights Reserved. &nbsp;|&nbsp; Designed & Developed by Sajid Web Solution
          </div>

          {/* Sculpted Metallic Curved Capsule / Pill Housing 3 Buttons */}
          <div className="relative flex items-center p-1 pl-3.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-sm">
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
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-b from-[#0b2959] to-[#051530] text-white border border-cyan-400/50 shadow-lg flex items-center justify-center hover:border-[#ff8a00] hover:scale-105 active:scale-95 transition-all"
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
