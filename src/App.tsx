import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { MaterialSupplyPage } from './pages/MaterialSupplyPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { CertificatesPage } from './pages/CertificatesPage';
import { ContactPage } from './pages/ContactPage';
import { EnquiryPage } from './pages/EnquiryPage';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from './data/siteData';
import { useGlobalScrollReveal } from './components/ScrollReveal';

const VALID_PAGES: PageId[] = [
  'home', 'about', 'services', 'projects', 'gallery',
  'materials', 'infrastructure', 'certificates', 'contact', 'enquiry'
];

const getPageFromLocation = (): PageId => {
  if (typeof window === 'undefined') return 'home';
  const cleanHash = window.location.hash.replace(/^#\/?/, '').split('?')[0].toLowerCase() as PageId;
  return VALID_PAGES.includes(cleanHash) ? cleanHash : 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromLocation);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Synchronize browser history / URL hash changes (Enables Browser Back & Forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromLocation();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Initialize smooth scroll reveal animations across all pages
  useGlobalScrollReveal(currentPage);

  // Fast page switching with real URL updates for deep linking and back-button support
  const handleNavigate = (page: PageId) => {
    if (page === currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Update browser URL hash cleanly
    if (page === 'home') {
      history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentPage(page);
  };

  const [isAtBottom, setIsAtBottom] = useState(false);

  // Scroll listener for back to top button and footer collision detection
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Check if user is near the footer to avoid double-dock overlapping
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 350;
      setIsAtBottom(scrollPosition >= threshold);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 relative">
      
      {/* Top Navigation Bar with White background for logo */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onMobileMenuToggle={setIsMobileMenuOpen}
      />

      {/* Main Page Content - Fast, smooth transition with instant loading */}
      <main className="flex-1">
        <div key={currentPage} className="animate-in fade-in duration-150 ease-out">
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
          {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
          {currentPage === 'projects' && <ProjectsPage onNavigate={handleNavigate} />}
          {currentPage === 'gallery' && <GalleryPage onNavigate={handleNavigate} />}
          {currentPage === 'materials' && <MaterialSupplyPage onNavigate={handleNavigate} />}
          {currentPage === 'infrastructure' && <InfrastructurePage onNavigate={handleNavigate} />}
          {currentPage === 'certificates' && <CertificatesPage onNavigate={handleNavigate} />}
          {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
          {currentPage === 'enquiry' && <EnquiryPage />}
        </div>
      </main>

      {/* Footer with exact copyright attribution */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Buttons: Direct WhatsApp & Phone (hidden when drawer is open or near footer) */}
      <div 
        className={`fixed bottom-5 right-5 z-30 flex flex-row items-center gap-3 transition-all duration-200 ${
          isAtBottom || isMobileMenuOpen ? 'opacity-0 pointer-events-none translate-y-3' : 'opacity-100'
        }`}
      >
        
        {/* Back to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs text-slate-700 shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-100 hover:text-slate-950 transition-all cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating Call Button in a line */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="w-12 h-12 rounded-full bg-slate-900 text-white shadow-xl flex items-center justify-center hover:bg-slate-800 transition-transform hover:scale-105 border border-slate-700"
          title="Call Pioneer Fab Tech"
          aria-label="Call +91 90295 55233"
        >
          <Phone className="w-5 h-5 text-amber-400" />
        </a>

        {/* Floating WhatsApp Button in a line */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 ring-4 ring-emerald-500/20"
          title="Chat on WhatsApp"
          aria-label="Chat with Pioneer Fab Tech on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>

      </div>

    </div>
  );
}
