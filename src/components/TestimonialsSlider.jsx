import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { brand } from '../data/content';
import OrnamentDivider from './OrnamentDivider';

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-[#B08D57]" aria-label={`${count} out of 5 stars`}>
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-[#B08D57]"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = brand.testimonials;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 md:py-36 bg-[#F7F2EA] border-b border-[#7A6F64]/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
            In Their Own Words
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2420] tracking-tight uppercase font-light">
            Kind Words & Memoirs
          </h2>
          <OrnamentDivider className="my-3" />
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-xs border border-[#7A6F64]/10 max-w-3xl mx-auto">
          {/* Subtle Quote Watermark */}
          <div className="absolute top-6 right-8 text-[#B08D57]/15 pointer-events-none">
            <Quote className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <StarRating count={current.rating} />
                <span className="text-[11px] uppercase tracking-wider text-[#7A6F64] font-medium">
                  Verified Review
                </span>
              </div>

              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-[#2A2420] font-light leading-relaxed italic">
                "{current.quote}"
              </blockquote>

              <div className="pt-4 border-t border-[#7A6F64]/10 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#ECE3D6] border border-[#B08D57]/30">
                    <img
                      src={current.avatar}
                      alt={current.names}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#2A2420] font-medium">
                      {current.names}
                    </h4>
                    <p className="text-xs text-[#7A6F64] font-light">
                      {current.event} • {current.location}
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full border border-[#7A6F64]/20 flex items-center justify-center text-[#2A2420] hover:bg-[#26211D] hover:text-white hover:border-[#26211D] transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full border border-[#7A6F64]/20 flex items-center justify-center text-[#2A2420] hover:bg-[#26211D] hover:text-white hover:border-[#26211D] transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === currentIndex ? 'w-8 bg-[#B08D57]' : 'w-2 bg-[#7A6F64]/30'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

