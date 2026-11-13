import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { brand } from '../data/content';
import { images } from '../data/images';
import OrnamentDivider from './OrnamentDivider';
import BookingCard from './BookingCard';

export default function Hero() {
  const containerRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);

  useEffect(() => {
    // Subtle parallax drift on the three columns
    const ctx = gsap.context(() => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        gsap.to(col1Ref.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
        gsap.to(col2Ref.current, {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.8,
          },
        });
        gsap.to(col3Ref.current, {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-[#7A6F64]/10 bg-[#F7F2EA]"
    >
      {/* Background Architectural Venue Watermark / Texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply">
        <img
          src={images.hero.bgVenue.url}
          alt=""
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Hero Heading (Gryphon Studio & Moments by Eve aesthetic) */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
              The Fine Art of Remembering
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[76px] tracking-tight leading-[1.05] text-[#2A2420]">
              Aurelia Studio
            </h1>
            <OrnamentDivider className="my-3 md:my-4" />
            <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#7A6F64] font-light">
              Wedding Celebrations, Portraits & Cinematic Films
            </p>
          </motion.div>
        </div>

        {/* The 3-Column Tall Photo Triptych (Image 2) with Floating Assessment Card (Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left/Center: The 3 Tall Columns Triptych */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {/* Column 1 */}
            <motion.div
              ref={col1Ref}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm aspect-[3/4.6] bg-[#ECE3D6]"
              data-cursor="VIEW"
            >
              <img
                src={images.hero.triptych1.url}
                alt={images.hero.triptych1.alt}
                width={images.hero.triptych1.width}
                height={images.hero.triptych1.height}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white text-xs font-sans tracking-widest uppercase">
                  {images.hero.triptych1.title}
                </p>
              </div>
            </motion.div>

            {/* Column 2 (Taller offset in center) */}
            <motion.div
              ref={col2Ref}
              initial={{ opacity: 0, y: 55 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm aspect-[3/4.8] sm:-translate-y-3 bg-[#ECE3D6]"
              data-cursor="VIEW"
            >
              <img
                src={images.hero.triptych2.url}
                alt={images.hero.triptych2.alt}
                width={images.hero.triptych2.width}
                height={images.hero.triptych2.height}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white text-xs font-sans tracking-widest uppercase">
                  {images.hero.triptych2.title}
                </p>
              </div>
            </motion.div>

            {/* Column 3 */}
            <motion.div
              ref={col3Ref}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm aspect-[3/4.6] bg-[#ECE3D6]"
              data-cursor="VIEW"
            >
              <img
                src={images.hero.triptych3.url}
                alt={images.hero.triptych3.alt}
                width={images.hero.triptych3.width}
                height={images.hero.triptych3.height}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white text-xs font-sans tracking-widest uppercase">
                  {images.hero.triptych3.title}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: The Floating Assessment Booking Card (Image 1) */}
          <div className="lg:col-span-4 lg:-mt-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            >
              <BookingCard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

