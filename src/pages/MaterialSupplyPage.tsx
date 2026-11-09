import React, { useState } from 'react';
import { 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  FileText, 
  Truck, 
  Scissors, 
  Award,
  ChevronRight,
  Filter
} from 'lucide-react';
import { MATERIAL_SUPPLY_ITEMS, MaterialSupplyItem, COMPANY_INFO } from '../data/siteData';
import { PageId } from '../components/Navbar';

interface MaterialSupplyPageProps {
  onNavigate: (page: PageId) => void;
}

export const MaterialSupplyPage: React.FC<MaterialSupplyPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Materials', count: MATERIAL_SUPPLY_ITEMS.length },
    { id: 'stainless-steel', label: 'Stainless Steel', count: MATERIAL_SUPPLY_ITEMS.filter(m => m.category === 'stainless-steel').length },
    { id: 'copper', label: 'Copper', count: MATERIAL_SUPPLY_ITEMS.filter(m => m.category === 'copper').length },
    { id: 'aluminium', label: 'Aluminium', count: MATERIAL_SUPPLY_ITEMS.filter(m => m.category === 'aluminium').length },
    { id: 'titanium', label: 'Titanium', count: MATERIAL_SUPPLY_ITEMS.filter(m => m.category === 'titanium').length },
    { id: 'structural', label: 'Structural Steel', count: MATERIAL_SUPPLY_ITEMS.filter(m => m.category === 'structural').length },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? MATERIAL_SUPPLY_ITEMS 
    : MATERIAL_SUPPLY_ITEMS.filter(item => item.category === selectedCategory);

  const handleWhatsAppEnquiry = (itemName: string) => {
    const text = encodeURIComponent(`Hi Pioneer Fab Tech, I would like to inquire about pricing, stock availability, and Mill Test Certificates for ${itemName}.`);
    window.open(`https://wa.me/919029555233?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* =====================================================================
          1. Hero Header Banner matching Site Theme (like Gallery & About pages)
         ===================================================================== */}
      <section className="relative bg-slate-950 text-white py-14 sm:py-20 overflow-hidden border-b border-slate-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: "url('./assets/images/achievements_bg_1793880633351.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950" />
        
        {/* Subtle orange accent glow line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff7a00] to-transparent shadow-[0_0_12px_#ff7a00]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            Material Supply
          </h1>
          
          {/* Breadcrumb Navigation: Home > Material Supply */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#ff7a00] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#ff7a00] font-semibold">Material Supply</span>
          </div>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300 pt-2 leading-relaxed">
            Prime Certified Stainless Steel, Copper, Aluminium & Titanium Raw Materials. Mill Test Certificates (MTC 3.1) with ready inventory in Vasai-Virar, Palghar.
          </p>
        </div>
      </section>

      {/* =====================================================================
          2. Overview & Trust Badges Strip
         ===================================================================== */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-100">
              <ShieldCheck className="w-6 h-6 text-[#ff7a00] mb-1.5" />
              <span className="text-xs font-bold text-slate-900">EN 10204 3.1 MTC</span>
              <span className="text-[11px] text-slate-500">100% Genuine Mill Certified</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Scissors className="w-6 h-6 text-[#ff7a00] mb-1.5" />
              <span className="text-xs font-bold text-slate-900">Custom Cut-to-Size</span>
              <span className="text-[11px] text-slate-500">Laser & Shearing Accuracy</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Layers className="w-6 h-6 text-[#ff7a00] mb-1.5" />
              <span className="text-xs font-bold text-slate-900">11 Material Categories</span>
              <span className="text-[11px] text-slate-500">Ready Stockyard Inventory</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Truck className="w-6 h-6 text-[#ff7a00] mb-1.5" />
              <span className="text-xs font-bold text-slate-900">Prompt Site Dispatch</span>
              <span className="text-[11px] text-slate-500">Mumbai, Pune & Pan-India</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. Section Title Divider (matching screenshot layout style)
         ===================================================================== */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-slate-200 w-full" />
            <div className="absolute bg-slate-50 px-6 flex items-center gap-2">
              <span className="text-base sm:text-lg font-bold text-[#d95c18] uppercase tracking-wider">
                Explore Our Material Supply
              </span>
            </div>
          </div>
          
          <p className="text-center text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mt-3">
            Browse our complete range of 11 prime-grade certified raw materials with full technical specifications, dimensions, and instant quotation support.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400 hover:bg-slate-100'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  selectedCategory === cat.id ? 'bg-[#ff7a00] text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* =====================================================================
              4. The 11 Material Supply Cards Grid
             ===================================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {filteredItems.map((item: MaterialSupplyItem) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#ff7a00]/40"
              >
                <div>
                  {/* Card Image with Uniform Box Size and Overlay */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Stock Status Badge */}
                    <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-full text-[11px] font-semibold shadow-xs">
                      Ready Stock
                    </div>

                    {/* Category Label */}
                    <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-slate-200 px-2 py-0.5 rounded text-[11px] font-medium">
                      {item.categoryLabel}
                    </div>
                  </div>

                  {/* Card Details Body */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-[#d95c18] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#d95c18] mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    {/* Specifications Box */}
                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-slate-800">Grades: </span>
                        <span className="text-slate-600">{item.grades.slice(0, 4).join(', ')}{item.grades.length > 4 ? ` +${item.grades.length - 4} more` : ''}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-800">Dimensions: </span>
                        <span className="text-slate-600 line-clamp-1">{item.dimensions}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-800">Standards: </span>
                        <span className="text-slate-600">{item.standards.join(' • ')}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-800">Finishes: </span>
                        <span className="text-slate-600 line-clamp-1">{item.finishes.join(', ')}</span>
                      </div>
                    </div>

                    {/* Applications Snippet */}
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Typical Applications:
                      </span>
                      <ul className="mt-1 space-y-1 text-xs text-slate-600">
                        {item.applications.slice(0, 2).map((app, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="line-clamp-1">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 sm:p-6 pt-0 space-y-2">
                  <button
                    onClick={() => handleWhatsAppEnquiry(item.name)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#ff7a00] text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm cursor-pointer group/btn"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-amber-400 group-hover/btn:text-white" />
                    <span>Request Material Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
                    <span>MTC 3.1 Available</span>
                    <span>Ready Dispatch Stock</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================================
          5. In-Stock Yard & Warehouse Facility Section
         ===================================================================== */}
      <section className="bg-white border-t border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#d95c18] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#ff7a00]" />
                <span>Central Material Yard - Vasai Virar, Palghar</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Bulk Raw Material Supply & On-Demand Cut-to-Size
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you need single prototype plates or full truckloads of structural stainless steel, our Vasai-Virar stockyard delivers prime-grade raw materials directly to your fabrication bays, manufacturing units, or construction project sites.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Ultrasonic Tested:</strong> Internal integrity guarantee</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Chemical Analysis:</strong> Full PMI testing available</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Slitting & Shearing:</strong> Custom widths & lengths</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Protective Packaging:</strong> Wooden pallets & laser film</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('enquiry')}
                  className="px-6 py-3 rounded-xl bg-[#ff7a00] hover:bg-[#d95c18] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Submit Bill of Materials (BOM)</span>
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#d95c18]" />
                  <span>Call: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-slate-200">
                <img 
                  src="./assets/images/ss_sheet_stack_1794209390147.jpg" 
                  alt="Stainless Steel Sheet Inventory" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-slate-200">
                <img 
                  src="./assets/images/ss_pipes_tubes_1794209432429.jpg" 
                  alt="Stainless Steel Pipes and Tubes Stock" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-slate-200">
                <img 
                  src="./assets/images/copper_bars_sheet_1794209392520.jpg" 
                  alt="Pure Copper Bars and Sheets" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-slate-200">
                <img 
                  src="./assets/images/ss_structure_beams_1794209453745.jpg" 
                  alt="Structural Stainless Steel Sections" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          6. Instant RFQ & Contact Action Box
         ===================================================================== */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide">
            Need Immediate Material Pricing or Mill Test Certificates?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Send us your required sizes, material grades, and tonnage. Our Vasai Virar desk will provide an official quotation within 1 working hour.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => handleWhatsAppEnquiry('Raw Materials')}
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Material Inquiry: +91 90295 55233</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Visit Workshop & Stockyard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
