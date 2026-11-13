import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Eye, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import OrnamentDivider from '../components/OrnamentDivider';
import Lightbox from '../components/Lightbox';
import { images } from '../data/images';
import CTASection from '../components/CTASection';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'stories'
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  const categories = [
    'All',
    'Weddings',
    'Pre-Wedding',
    'Portraits',
    'Maternity',
    'Newborn',
    'Kids',
    'Events',
    'Corporate',
    'Fashion',
    'Commercial',
  ];

  const filteredItems = activeCategory === 'All'
    ? images.portfolio
    : images.portfolio.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-20 bg-[#F7F2EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
              Visual Archive
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2A2420] tracking-tight uppercase font-light">
              Portfolio
            </h1>
            <OrnamentDivider className="my-3" />
            <p className="text-sm text-[#7A6F64] font-light leading-relaxed">
              Moments of stillness, joyous chaos, and enduring devotion. Curated from celebrations and monographs across the subcontinent and beyond.
            </p>

            {/* View Switcher: Curated Works vs Editorial Stories */}
            <div className="flex items-center justify-center gap-2 mt-8 p-1 bg-[#ECE3D6] rounded-full max-w-xs mx-auto">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`flex-1 py-2 text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 font-medium ${
                  activeTab === 'gallery'
                    ? 'bg-[#26211D] text-[#F7F2EA] shadow-xs'
                    : 'text-[#7A6F64] hover:text-[#2A2420]'
                }`}
              >
                Gallery Works
              </button>
              <button
                onClick={() => setActiveTab('stories')}
                className={`flex-1 py-2 text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 font-medium ${
                  activeTab === 'stories'
                    ? 'bg-[#26211D] text-[#F7F2EA] shadow-xs'
                    : 'text-[#7A6F64] hover:text-[#2A2420]'
                }`}
              >
                Featured Stories
              </button>
            </div>
          </div>

          {activeTab === 'gallery' ? (
            <>
              {/* Category Filter Pills with Framer Motion layout transitions */}
              <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
                {categories.map((category) => {
                  const isSelected = activeCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-[0.16em] transition-all duration-300 font-medium ${
                        isSelected
                          ? 'text-[#F7F2EA] bg-[#26211D]'
                          : 'text-[#7A6F64] hover:text-[#2A2420] bg-white/60 border border-[#7A6F64]/15'
                      }`}
                    >
                      {category}
                      {isSelected && (
                        <motion.span
                          layoutId="activeFilterPill"
                          className="absolute inset-0 bg-[#26211D] rounded-full -z-10"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Masonry / Asymmetric Grid */}
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                <AnimatePresence>
                  {filteredItems.map((item, index) => {
                    const isTall = item.aspect === 'portrait';
                    return (
                      <motion.div
                        layout
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => openLightbox(index)}
                        className={`group relative rounded-2xl overflow-hidden bg-[#ECE3D6] border border-[#7A6F64]/15 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-500 ${
                          isTall ? 'aspect-[3/4.2]' : 'aspect-[4/3.2]'
                        }`}
                        data-cursor="VIEW"
                      >
                        <img
                          src={item.url}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* Subtle Tag Top Left */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-[#26211D]/80 text-[#F7F2EA] backdrop-blur-xs font-medium">
                            {item.tag || item.category}
                          </span>
                        </div>

                        {/* Bottom Overlay Slide-up */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#B08D57] font-medium mb-1">
                            {item.location}
                          </span>
                          <h3 className="font-serif text-xl sm:text-2xl font-light leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs text-[#CFC2B0] font-light mt-1.5 line-clamp-2">
                            {item.description}
                          </p>
                          <div className="pt-3 flex items-center justify-between text-[11px] text-[#CFC2B0] border-t border-white/15 mt-3">
                            <span>{item.client}</span>
                            <span className="flex items-center gap-1 text-[#B08D57]">
                              <Eye className="w-3.5 h-3.5" />
                              View Full Size
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </>
          ) : (
            /* Stories Case Studies View */
            <div className="space-y-24">
              {images.stories.map((story, sIndex) => (
                <article
                  key={story.id}
                  className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-[#7A6F64]/15 shadow-sm space-y-12"
                >
                  {/* Story Hero Header */}
                  <div className="max-w-3xl mx-auto text-center space-y-3">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-[#B08D57] font-medium">
                      Case Study {sIndex + 1}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-5xl text-[#2A2420] font-light tracking-tight">
                      {story.title}
                    </h2>
                    <p className="font-serif italic text-lg text-[#7A6F64]">
                      {story.subtitle}
                    </p>
                    <div className="flex items-center justify-center gap-6 text-xs text-[#7A6F64] pt-2">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
                        {story.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#B08D57]" />
                        {story.date}
                      </span>
                    </div>
                  </div>

                  {/* Story Full-Bleed Hero Image */}
                  <div className="rounded-2xl overflow-hidden aspect-[16/9] max-h-[550px] shadow-md bg-[#ECE3D6]">
                    <img
                      src={story.heroImage}
                      alt={story.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Client Quote Pullout */}
                  <div className="max-w-2xl mx-auto text-center py-4 border-y border-[#7A6F64]/15">
                    <p className="font-serif italic text-lg sm:text-xl text-[#2A2420] font-light leading-relaxed">
                      "{story.clientQuote}"
                    </p>
                    <span className="text-xs uppercase tracking-widest text-[#B08D57] block mt-2">
                      — {story.title}
                    </span>
                  </div>

                  {/* Narrative Body */}
                  <div className="max-w-3xl mx-auto space-y-4 text-sm sm:text-base text-[#7A6F64] font-light leading-relaxed">
                    {story.storyParagraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {/* Story Multi-Image Mixed Layout */}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.25em] text-[#7A6F64] text-center mb-6 font-medium">
                      Curated Gallery Selections
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {story.galleryImages.map((imgUrl, gIdx) => (
                        <div
                          key={gIdx}
                          className="rounded-xl overflow-hidden aspect-[4/3] bg-[#ECE3D6] group"
                          data-cursor="VIEW"
                        >
                          <img
                            src={imgUrl}
                            alt={`${story.title} gallery frame ${gIdx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vendor Credits */}
                  <div className="bg-[#F7F2EA] rounded-2xl p-6 sm:p-8 border border-[#7A6F64]/10">
                    <h4 className="font-serif text-lg text-[#2A2420] mb-4">
                      Creative Collaborators & Vendor Credits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-[#7A6F64]">
                      <div>
                        <span className="text-[#2A2420] font-medium block">Venue</span>
                        <span>{story.vendors.venue}</span>
                      </div>
                      <div>
                        <span className="text-[#2A2420] font-medium block">Planning & Design</span>
                        <span>{story.vendors.planning}</span>
                      </div>
                      <div>
                        <span className="text-[#2A2420] font-medium block">Couture</span>
                        <span>{story.vendors.couture}</span>
                      </div>
                      <div>
                        <span className="text-[#2A2420] font-medium block">Floral Artistry</span>
                        <span>{story.vendors.florals || 'Atelier Floral Collaborator'}</span>
                      </div>
                      <div>
                        <span className="text-[#2A2420] font-medium block">Cinematography</span>
                        <span>{story.vendors.cinematography}</span>
                      </div>
                      <div>
                        <span className="text-[#2A2420] font-medium block">Photography</span>
                        <span>Aurelia Studio Principal Documentarians</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Lightbox Component */}
        <Lightbox
          isOpen={lightboxOpen}
          images={filteredItems}
          currentIndex={currentLightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setCurrentLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)}
          onNext={() => setCurrentLightboxIndex((prev) => (prev + 1) % filteredItems.length)}
        />

        <div className="mt-20">
          <CTASection />
        </div>
      </div>
    </PageTransition>
  );
}

