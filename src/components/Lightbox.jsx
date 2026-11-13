import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ isOpen, images = [], currentIndex = 0, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-[#1a1715]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 md:p-8 select-none"
      >
        {/* Top Bar: Title, Counter & Close */}
        <div className="flex items-center justify-between text-[#F7F2EA] border-b border-white/10 pb-4 z-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
              {current.category || 'Portfolio'}
            </span>
            <h4 className="font-serif text-lg sm:text-xl text-[#F7F2EA]">
              {current.title}
            </h4>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs tracking-widest text-[#CFC2B0] font-light">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-[#F7F2EA] hover:text-[#B08D57] transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" strokeWidth={1.25} />
            </button>
          </div>
        </div>

        {/* Center: Image & Navigation */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          {/* Previous Button */}
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-[#B08D57] text-white hover:text-[#26211D] flex items-center justify-center transition-all duration-300 backdrop-blur-xs"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>

          {/* Current Lightbox Image */}
          <motion.div
            key={current.id || current.url}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="max-h-[75vh] max-w-[88vw] flex items-center justify-center"
          >
            <img
              src={current.url}
              alt={current.title || current.alt}
              className="max-h-[72vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-[#B08D57] text-white hover:text-[#26211D] flex items-center justify-center transition-all duration-300 backdrop-blur-xs"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>

        {/* Bottom Bar: Caption, Location, Client */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#CFC2B0] gap-2">
          <p className="font-light text-center sm:text-left max-w-xl">
            {current.description || current.alt}
          </p>
          <div className="flex items-center gap-4 text-[11px] text-[#B08D57]">
            {current.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {current.location}
              </span>
            )}
            {current.date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {current.date}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

