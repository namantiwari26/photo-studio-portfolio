import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowUpRight, Eye } from 'lucide-react';
import { images } from '../data/images';
import OrnamentDivider from './OrnamentDivider';
import Lightbox from './Lightbox';

export default function HorizontalGallery() {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const featuredItems = images.portfolio.filter((item) => item.featured).slice(0, 6);

  const updateScrollProgress = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    const currentProgress = el.scrollLeft / maxScroll;
    setScrollProgress(Math.min(1, Math.max(0, currentProgress)));

    // Calculate approximate active card
    const cardWidth = 460;
    const idx = Math.min(featuredItems.length - 1, Math.round(el.scrollLeft / cardWidth));
    setActiveIndex(idx);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const scrollByAmount = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = Math.min(el.clientWidth * 0.75, 480);
    el.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftState(el.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollContainerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="relative z-10 w-full bg-[#26211D] text-[#F7F2EA] py-20 lg:py-28 overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10">
        {/* Top Control Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B08D57] font-medium block mb-2">
              Curated Highlights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F7F2EA] uppercase font-light">
              Featured Celebrations
            </h2>
            <OrnamentDivider color="#B08D57" className="my-3 justify-start" />
            <p className="text-xs sm:text-sm text-[#CFC2B0] font-light max-w-lg">
              Unrehearsed glances, sacred courtyard rituals, and quiet vows. Drag horizontally or use the controls to explore.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 self-start md:self-end">
            <div className="text-xs font-mono tracking-widest text-[#B08D57]">
              <span>0{activeIndex + 1}</span>
              <span className="text-white/30 mx-1">/</span>
              <span className="text-white/50">0{featuredItems.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollByAmount('prev')}
                className="w-11 h-11 rounded-full border border-white/20 hover:border-[#B08D57] hover:bg-[#B08D57] hover:text-[#26211D] text-[#F7F2EA] flex items-center justify-center transition-colors duration-200 cursor-pointer"
                aria-label="Previous celebration"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scrollByAmount('next')}
                className="w-11 h-11 rounded-full border border-white/20 hover:border-[#B08D57] hover:bg-[#B08D57] hover:text-[#26211D] text-[#F7F2EA] flex items-center justify-center transition-colors duration-200 cursor-pointer"
                aria-label="Next celebration"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex items-center gap-6 lg:gap-8 px-5 sm:px-8 overflow-x-auto scroll-smooth scrollbar-none select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {/* Intro Card */}
        <div
          className="shrink-0 w-[280px] sm:w-[340px] p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between self-stretch"
          style={{ scrollSnapAlign: 'start' }}
        >
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#B08D57] font-medium block mb-2">
              The Archives
            </span>
            <h3 className="font-serif text-2xl text-[#F7F2EA] font-light leading-snug">
              Every celebration has an unscripted cadence
            </h3>
            <p className="text-xs text-[#CFC2B0] font-light leading-relaxed mt-3">
              We preserve each nuance without staged interruptions. Discover real couples in Rajasthan, Alibaug, and destination venues worldwide.
            </p>
          </div>
          <div className="pt-6">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B08D57] hover:text-white transition-colors"
            >
              <span>View All 30+ Works</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Carousel Image Cards */}
        {featuredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => !isDragging && openLightbox(idx)}
            className="shrink-0 w-[290px] sm:w-[380px] lg:w-[440px] group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#2A2420] shadow-2xl border border-white/10 transition-transform duration-500 hover:-translate-y-1"
            style={{ scrollSnapAlign: 'start' }}
            data-cursor="VIEW"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 pointer-events-none"
              loading="lazy"
            />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur-xs text-[#F7F2EA] border border-white/10">
                {item.tag || item.category}
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B08D57] font-medium mb-1">
                {item.location}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F7F2EA] font-light leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-[#CFC2B0] font-light mt-1">
                {item.client} • {item.date}
              </p>
              <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-[#B08D57] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Click to view full screen</span>
                <Eye className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}

        {/* End CTA Card */}
        <div
          className="shrink-0 w-[260px] sm:w-[320px] p-8 rounded-2xl bg-[#B08D57]/15 border border-[#B08D57]/30 flex flex-col items-center justify-center text-center self-stretch"
          style={{ scrollSnapAlign: 'start' }}
        >
          <span className="text-[10px] uppercase tracking-widest text-[#B08D57] font-medium mb-2">
            Have a date in mind?
          </span>
          <h4 className="font-serif text-2xl text-[#F7F2EA] font-light mb-4">
            Inquire about our availability
          </h4>
          <Link
            to="/contact"
            className="py-3 px-6 rounded-full bg-[#B08D57] text-[#26211D] hover:bg-white transition-colors text-xs uppercase tracking-wider font-medium"
          >
            Check Calendar
          </Link>
        </div>
      </div>

      {/* Progress Track at bottom */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-8">
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#B08D57] transition-all duration-150"
            style={{ width: `${Math.max(15, scrollProgress * 100)}%` }}
          />
        </div>
      </div>

      {/* Lightbox for full preview */}
      <Lightbox
        isOpen={lightboxOpen}
        images={featuredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % featuredItems.length)}
      />
    </section>
  );
}
