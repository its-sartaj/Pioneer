import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Filter,
  MessageCircle
} from 'lucide-react';
import { PROJECTS, COMPANY_INFO } from '../data/siteData';
import { PageId } from '../components/Navbar';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
}

const CATEGORY_FILTERS = [
  { id: 'all', label: 'All Projects (4 Malls)' },
  { id: 'nexus-hyderabad', label: 'Nexus Mall Hyderabad' },
  { id: 'westend-pune', label: 'Westend Mall Pune' },
  { id: 'nexus-mumbai', label: 'Nexus Mumbai' },
  { id: 'nexus-pune', label: 'Nexus Mall Pune' },
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchLocation, setSearchLocation] = useState<string>('');

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchCategory = activeCategory === 'all' || proj.category === activeCategory;
    const matchLocation = !searchLocation || proj.location.toLowerCase().includes(searchLocation.toLowerCase()) || proj.clientType.toLowerCase().includes(searchLocation.toLowerCase());
    return matchCategory && matchLocation;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="max-w-3xl reveal-word">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Executed Fabrication Track Record</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Completed Projects
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Explore authentic fabrications engineered at our Vasai-Virar facility and installed on site across Mumbai, Thane, Pune, and regional architectural landmarks.
          </p>
        </div>

        {/* Filter Controls (Segmented Buttons + Location Filter) */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-4 reveal-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Segmented Control */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {CATEGORY_FILTERS.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-950'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Quick search by location/client */}
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Filter by city (e.g. Bandra, Pune)..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full px-3.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>

          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>Showing <strong className="text-slate-900 font-semibold">{filteredProjects.length}</strong> authenticated project case studies</span>
            {searchLocation && (
              <button 
                onClick={() => setSearchLocation('')}
                className="text-amber-600 font-semibold hover:underline"
              >
                Clear location filter
              </button>
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group reveal-image ${
                idx % 3 === 1 ? 'delay-150' : idx % 3 === 2 ? 'delay-300' : ''
              }`}
            >
              <div>
                {/* Real Photo */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                    {project.categoryLabel}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-xs">
                    {project.completionYear}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.location}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500 truncate">{project.clientType}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Materials Tags */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Materials & Finishes:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.materials.map((mat, i) => (
                        <span 
                          key={i} 
                          className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Features */}
                  <div className="mt-3 space-y-1">
                    {project.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onNavigate('enquiry')}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Inquire Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-base text-slate-600">No project case studies matched your current filter.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchLocation(''); }}
              className="mt-3 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
