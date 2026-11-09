import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  ChevronDown, 
  X, 
  ChevronRight,
  ArrowRight,
  Sparkles,
  Building2,
  ShieldCheck,
  Award,
  MessageCircle
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, PROJECTS, INFRASTRUCTURE_SPECS, OFFICIAL_CERTIFICATES, MATERIAL_SUPPLY_ITEMS } from '../data/siteData';
import logoImg from '../assets/pioneer_logo_new.png';

export type PageId = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'projects' 
  | 'gallery' 
  | 'materials'
  | 'infrastructure' 
  | 'certificates' 
  | 'contact' 
  | 'enquiry';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onMobileMenuToggle?: (isOpen: boolean) => void;
}

interface SubMenuItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  specs?: string;
  targetPage: PageId;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onMobileMenuToggle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Notify parent component about mobile menu state (to hide floating action buttons)
  useEffect(() => {
    onMobileMenuToggle?.(mobileMenuOpen);
  }, [mobileMenuOpen, onMobileMenuToggle]);

  // Hovered item indices for live preview in each dropdown
  const [hoveredServiceIdx, setHoveredServiceIdx] = useState<number>(0);
  const [hoveredProjectIdx, setHoveredProjectIdx] = useState<number>(0);
  const [hoveredAboutIdx, setHoveredAboutIdx] = useState<number>(0);
  const [hoveredMaterialIdx, setHoveredMaterialIdx] = useState<number>(0);
  const [hoveredInfraIdx, setHoveredInfraIdx] = useState<number>(0);
  const [hoveredCertIdx, setHoveredCertIdx] = useState<number>(0);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedMobileMenu(null);
  }, [currentPage]);

  // Prevent body scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, [mobileMenuOpen]);

  // Exact navigation items:
  // Home | About | Our Services v | Our Project v | Material Supply v | Factory | Gallery | Certificate | Contact
  const navLinks: { id: PageId; label: string; hasDropdown?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About', hasDropdown: false },
    { id: 'services', label: 'Our Services', hasDropdown: true },
    { id: 'projects', label: 'Our Project', hasDropdown: true },
    { id: 'materials', label: 'Material Supply', hasDropdown: true },
    { id: 'infrastructure', label: 'Factory Facility', hasDropdown: false },
    { id: 'gallery', label: 'Gallery', hasDropdown: false },
    { id: 'certificates', label: 'Certificate', hasDropdown: false },
    { id: 'contact', label: 'Contact', hasDropdown: false },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedMobileMenu(null);
  };

  const handleMouseEnter = (linkId: string, hasDropdown?: boolean) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    if (hasDropdown) {
      setActiveDropdown(linkId);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Structured menu items for each dropdown with interactive hover preview
  const servicesSubItems: SubMenuItem[] = SERVICES.map((s) => ({
    id: s.id,
    title: s.title,
    subtitle: s.subtitle,
    image: s.heroImage,
    tag: s.category,
    specs: `Lead Time: ${s.specifications.standardLeadTime} • Grades: ${s.specifications.materialGrades.split(',')[0]}`,
    targetPage: 'services',
  }));

  const projectsSubItems: SubMenuItem[] = PROJECTS.slice(0, 6).map((p) => ({
    id: p.id,
    title: p.title,
    subtitle: `${p.location} • ${p.clientType}`,
    image: p.image,
    tag: p.categoryLabel,
    specs: `Materials: ${p.materials.slice(0, 2).join(', ')}`,
    targetPage: 'projects',
  }));

  const aboutSubItems: SubMenuItem[] = [
    {
      id: 'company-overview',
      title: 'Company Profile & Heritage',
      subtitle: 'Over a decade of architectural metalcraft in Vasai-Virar, Palghar',
      image: './assets/aistudio/WhatsApp_Image_2026-11-03_at_1.04.05_PM__1__7d891123.jpeg',
      tag: 'Company Story',
      specs: 'Founded in Vasai • 850+ Projects Delivered',
      targetPage: 'about',
    },
    {
      id: 'core-process',
      title: '5-Step Engineering Workflow',
      subtitle: 'From CAD drafting & laser profiling to turnkey site installation',
      image: './assets/aistudio/WhatsApp_Image_2026-11-03_at_1.04.03_PM_2f9ff5e2.jpeg',
      tag: 'Engineering Workflow',
      specs: 'IS 2062 & SS 304/316 Certified Fabrication',
      targetPage: 'about',
    },
    {
      id: 'leadership',
      title: 'Quality & In-House Workshop',
      subtitle: 'Direct manufacturing facility without middleman markups',
      image: './assets/aistudio/WhatsApp_Image_2026-11-03_at_1.04.02_PM__1__b8d93cd1.jpeg',
      tag: 'In-House Facility',
      specs: 'Modern CNC Fiber Laser & Hydraulic Bending',
      targetPage: 'about',
    },
  ];

  const certSubItems: SubMenuItem[] = OFFICIAL_CERTIFICATES.map((c) => ({
    id: c.id,
    title: c.shortTitle,
    subtitle: `${c.ministryDepartment} • Reg: ${c.certNumber}`,
    image: c.previewImage,
    tag: c.badge,
    specs: `No: ${c.certNumber} • Valid & In Good Standing`,
    targetPage: 'certificates',
  }));

  const materialsSubItems: SubMenuItem[] = MATERIAL_SUPPLY_ITEMS.map((m) => ({
    id: m.id,
    title: m.name,
    subtitle: m.subtitle,
    image: m.image,
    tag: m.categoryLabel,
    specs: m.specsSummary,
    targetPage: 'materials',
  }));

  const getSubItemsForLink = (linkId: string): SubMenuItem[] => {
    if (linkId === 'services') return servicesSubItems;
    if (linkId === 'projects') return projectsSubItems;
    if (linkId === 'materials' || linkId === 'infrastructure') return materialsSubItems;
    if (linkId === 'about') return aboutSubItems;
    if (linkId === 'certificates') return certSubItems;
    return [];
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-t-0 shadow-none">
      
      {/* Top Utility Contact Bar (Phone & Email Only) - Separated from main header by bottom line */}
      <div className="hidden lg:block bg-white text-slate-700 text-xs py-2 px-4 sm:px-6 border-b border-slate-200 border-t-0">
        <div className="max-w-[1536px] mx-auto flex items-center justify-start">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center gap-2 text-slate-800 hover:text-[#d95c18] transition-colors group cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#d95c18] group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-slate-900">{COMPANY_INFO.phone}</span>
            </a>
            
            {/* Bich ka divider line between phone and email */}
            <div className="h-3.5 w-px bg-slate-300" />

            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-2 text-slate-700 hover:text-[#d95c18] transition-colors group cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#d95c18] group-hover:scale-110 transition-transform" />
              <span className="text-slate-700 font-medium">{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Exactly matching the uploaded reference (image_a42555f8.png) */}
      <div className="bg-white border-b border-slate-200 relative">
        <div className="max-w-[1536px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-20">
            
            {/* Logo Section - Shifted closer to the right toward Home nav item on laptop/desktop */}
            <button 
              onClick={() => handleLinkClick('home')}
              className="flex items-center text-left py-1.5 cursor-pointer shrink-0 transition-opacity duration-200 hover:opacity-90 group"
              title="Pioneer Fab Tech Home"
            >
              <img 
                src={logoImg} 
                alt="Pioneer Fab Tech - Innovation Precision Excellence" 
                className="h-12 sm:h-13 lg:h-15 w-auto max-w-[240px] sm:max-w-[280px] object-contain transition-transform duration-200 group-hover:scale-[1.01]"
              />
            </button>

            {/* Desktop Navigation Links with Clean Column Cells & Thin Vertical Divider Lines (Exact Match) */}
            <nav 
              className="hidden xl:flex items-center h-full border-l border-slate-200"
              onMouseLeave={handleMouseLeave}
            >
              {navLinks.map((link, index) => {
                const isActive = currentPage === link.id;
                const isDropdownOpen = activeDropdown === link.id;

                // Select the correct sub-items & hovered index
                let subItems: SubMenuItem[] = [];
                let currentHoverIdx = 0;
                let setHoverIdx: (i: number) => void = () => {};

                if (link.id === 'services') {
                  subItems = servicesSubItems;
                  currentHoverIdx = hoveredServiceIdx;
                  setHoverIdx = setHoveredServiceIdx;
                } else if (link.id === 'projects') {
                  subItems = projectsSubItems;
                  currentHoverIdx = hoveredProjectIdx;
                  setHoverIdx = setHoveredProjectIdx;
                } else if (link.id === 'materials' || link.id === 'infrastructure') {
                  subItems = materialsSubItems;
                  currentHoverIdx = hoveredMaterialIdx;
                  setHoverIdx = setHoveredMaterialIdx;
                } else if (link.id === 'about') {
                  subItems = aboutSubItems;
                  currentHoverIdx = hoveredAboutIdx;
                  setHoverIdx = setHoveredAboutIdx;
                } else if (link.id === 'certificates') {
                  subItems = certSubItems;
                  currentHoverIdx = hoveredCertIdx;
                  setHoverIdx = setHoveredCertIdx;
                }

                const currentPreviewItem = subItems[currentHoverIdx] || subItems[0];

                return (
                  <div 
                    key={link.id}
                    className="relative h-full flex items-center border-r border-slate-200 group/navitem"
                    onMouseEnter={() => handleMouseEnter(link.id, link.hasDropdown)}
                  >
                    {/* Clean cell button with exact bold typography from reference screenshot */}
                    <button
                      onClick={() => handleLinkClick(link.id)}
                      className={`h-full flex items-center gap-1 xl:gap-1.5 px-3 xl:px-3.5 2xl:px-5 text-[13.5px] 2xl:text-[15px] font-bold transition-colors cursor-pointer select-none whitespace-nowrap ${
                        isActive 
                          ? 'text-[#8B2E1D] bg-amber-50/70 font-extrabold' 
                          : isDropdownOpen
                          ? 'text-[#8B2E1D] bg-slate-50'
                          : 'text-[#0a192f] hover:text-[#8B2E1D] hover:bg-slate-50/70'
                      }`}
                    >
                      <span className="pb-0.5">{link.label}</span>
                      {link.hasDropdown && (
                        <ChevronDown 
                          className={`w-3.5 h-3.5 stroke-[2.8] transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180 text-[#8B2E1D]' : 'text-slate-600 group-hover/navitem:text-[#8B2E1D]'
                          }`} 
                        />
                      )}
                    </button>

                    {/* Full-Width Bottom Border Hover Animation:
                        Only active when hovering with mouse, never stays stuck on active tab, smoothly retracts as soon as mouse leaves */}
                    <span 
                      className="absolute bottom-0 left-0 right-0 h-[3.5px] bg-[#8B2E1D] transition-transform duration-[550ms] ease-out origin-left pointer-events-none z-10 scale-x-0 group-hover/navitem:scale-x-100" 
                    />

                    {/* Interactive Dropdown with Live Preview Box */}
                    {link.hasDropdown && isDropdownOpen && subItems.length > 0 && (
                      <div 
                        className={`absolute top-full z-50 pt-0.5 ${
                          index > 4 ? 'right-0' : 'left-0'
                        }`}
                        onMouseEnter={() => {
                          if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                          setActiveDropdown(link.id);
                        }}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-row min-w-[580px] max-w-[660px] animate-in fade-in slide-in-from-top-1 duration-150">
                          
                          {/* Left Pane: Stacked list matching image_55f1a2e3.png */}
                          <div className="w-[300px] bg-white border-r border-slate-100 py-1.5 shrink-0 max-h-[430px] overflow-y-auto">
                            {subItems.map((item, idx) => {
                              const isItemHovered = currentHoverIdx === idx;
                              return (
                                <div
                                  key={item.id}
                                  onMouseEnter={() => setHoverIdx(idx)}
                                  onClick={() => handleLinkClick(item.targetPage)}
                                  className={`px-4 py-3 border-b border-slate-100 last:border-b-0 flex items-center gap-2.5 cursor-pointer transition-colors text-left ${
                                    isItemHovered
                                      ? 'bg-amber-50/80 text-amber-600 font-bold'
                                      : 'text-slate-700 hover:text-amber-600 font-medium hover:bg-slate-50'
                                  }`}
                                >
                                  {/* Red/amber arrow right on hover */}
                                  <div className="w-4 flex items-center justify-center shrink-0">
                                    {isItemHovered ? (
                                      <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                                    ) : (
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                    )}
                                  </div>
                                  <span className="text-xs leading-snug line-clamp-1">
                                    {item.title}
                                  </span>
                                </div>
                              );
                            })}
                          </div>

                          {/* Right Pane: Live Photo & Specs Preview */}
                          {currentPreviewItem && (
                            <div className="flex-1 bg-slate-50 p-4 flex flex-col justify-between">
                              <div>
                                <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-slate-200 shadow-xs mb-3 border border-slate-200">
                                  <img 
                                    src={currentPreviewItem.image} 
                                    alt={currentPreviewItem.title} 
                                    className="w-full h-full object-cover transition-all duration-300"
                                  />
                                  <div className="absolute top-2 left-2 bg-slate-950/85 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                                    {currentPreviewItem.tag}
                                  </div>
                                </div>

                                <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                                  {currentPreviewItem.title}
                                </h4>
                                <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                                  {currentPreviewItem.subtitle}
                                </p>

                                {currentPreviewItem.specs && (
                                  <div className="mt-2.5 pt-2 border-t border-slate-200 text-[10px] text-slate-500 font-medium truncate">
                                    {currentPreviewItem.specs}
                                  </div>
                                )}
                              </div>

                              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                                <button
                                  onClick={() => handleLinkClick(currentPreviewItem.targetPage)}
                                  className="text-[11px] font-bold text-slate-900 hover:text-amber-600 inline-flex items-center gap-1 cursor-pointer"
                                >
                                  <span>View Details</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          )}

                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </nav>

            {/* Mobile View - 3-DOT MENU BUTTON ON RIGHT (QUOTE BUTTON REMOVED AS REQUESTED) */}
            <div className="flex xl:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="relative group p-2.5 rounded-xl bg-slate-900 text-white shadow-md border border-slate-700 hover:border-amber-400 transition-all active:scale-95 cursor-pointer flex flex-col items-center justify-center gap-1 w-10 h-10"
                aria-label="Open navigation menu from left"
                title="Open menu"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors" />
                <span className="w-2 h-2 rounded-full bg-amber-500 ring-2 ring-amber-400/30 group-hover:scale-115 transition-transform" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 transition-opacity duration-300 xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer - Pure White Background & Expandable Details Accordion */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-[88%] max-w-[360px] bg-white text-slate-800 z-50 shadow-2xl transition-transform duration-300 ease-out xl:hidden flex flex-col border-r border-slate-200 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header with Clean White Surface */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
          <div className="bg-slate-50 border border-slate-200/90 rounded-xl px-3 py-1.5 max-w-[180px] shadow-2xs">
            <img 
              src={logoImg} 
              alt="Pioneer Fab Tech" 
              className="h-8 w-auto object-contain"
            />
          </div>
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Nav Links with Clickable Arrow Details */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            const subItems = link.hasDropdown ? getSubItemsForLink(link.id) : [];
            const hasSubItems = subItems.length > 0;
            const isExpanded = hasSubItems && expandedMobileMenu === link.id;

            return (
              <div key={link.id} className="space-y-1">
                {/* Main Link Row */}
                <div
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-amber-500 text-slate-950 font-extrabold shadow-xs' 
                      : isExpanded
                      ? 'bg-amber-50/80 text-amber-600 font-bold border border-amber-200/80'
                      : 'text-slate-800 hover:bg-slate-50 font-bold border-b border-slate-100/70'
                  }`}
                >
                  {/* Left Title Label */}
                  <button
                    type="button"
                    onClick={() => {
                      if (hasSubItems) {
                        setExpandedMobileMenu(isExpanded ? null : link.id);
                      } else {
                        handleLinkClick(link.id);
                      }
                    }}
                    className="flex-1 text-left text-sm font-bold flex items-center gap-2 cursor-pointer select-none"
                  >
                    <span>{link.label}</span>
                  </button>

                  {/* Right Arrow Button - Click to open/close details */}
                  {hasSubItems ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedMobileMenu(isExpanded ? null : link.id);
                      }}
                      className={`p-1.5 -mr-1 rounded-lg transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'text-slate-950 hover:bg-amber-600/30'
                          : isExpanded
                          ? 'bg-amber-200/60 text-amber-700'
                          : 'text-slate-400 hover:text-amber-600 hover:bg-slate-100'
                      }`}
                      aria-label={`Toggle details for ${link.label}`}
                    >
                      <ChevronRight 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-90 text-amber-600' : ''
                        }`} 
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleLinkClick(link.id)}
                      className="p-1.5 -mr-1 cursor-pointer"
                      aria-label={`Go to ${link.label}`}
                    >
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                    </button>
                  )}
                </div>

                {/* Sub-Items Details Accordion (Appears after clicking arrow or item) */}
                {hasSubItems && isExpanded && (
                  <div className="bg-slate-50/95 border border-slate-200/90 rounded-2xl p-2.5 space-y-2 mt-1 shadow-2xs animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex items-center justify-between px-2 pt-1 pb-1 border-b border-slate-200/80 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      <span>{link.label}</span>
                      <button
                        type="button"
                        onClick={() => handleLinkClick(link.id)}
                        className="text-amber-600 hover:text-amber-700 font-bold inline-flex items-center gap-1 text-xs capitalize cursor-pointer"
                      >
                        <span>View Page</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-1.5 max-h-[300px] overflow-y-auto pr-1">
                      {subItems.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => handleLinkClick(item.targetPage)}
                          className="p-2 rounded-xl bg-white hover:bg-amber-50/70 border border-slate-200/80 hover:border-amber-300 transition-all cursor-pointer flex items-center gap-2.5 group shadow-2xs"
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-11 h-11 rounded-lg object-cover border border-slate-200 shrink-0" 
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-800">
                                {item.tag}
                              </span>
                            </div>
                            <h5 className="text-xs font-bold text-slate-900 group-hover:text-amber-600 truncate mt-0.5">
                              {item.title}
                            </h5>
                            <p className="text-[11px] text-slate-500 truncate">
                              {item.subtitle}
                            </p>
                            {item.specs && (
                              <p className="text-[10px] text-slate-400 truncate mt-0.5 font-medium">
                                {item.specs}
                              </p>
                            )}
                          </div>
                          <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-amber-500 group-hover:text-white text-slate-400 flex items-center justify-center shrink-0 transition-colors">
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleLinkClick(link.id)}
                      className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-amber-500 hover:text-white border border-slate-200 hover:border-amber-500 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <span>Explore All {link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Footer Contact with Clean Light Theme */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/90 space-y-3 shrink-0">
          <div className="space-y-0.5 text-xs text-slate-600">
            <p className="font-extrabold text-slate-900 text-[13px]">Pioneer Fab Tech</p>
            <p className="font-semibold text-slate-700">{COMPANY_INFO.phone}</p>
            <p className="text-slate-500 text-[11px] truncate">{COMPANY_INFO.email}</p>
          </div>

          <div className="flex gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex-1 py-2.5 rounded-xl bg-[#0a192f] hover:bg-slate-800 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Us</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

    </header>
  );
};
