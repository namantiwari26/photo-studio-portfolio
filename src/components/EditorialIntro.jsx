import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import OrnamentDivider from './OrnamentDivider';

export default function EditorialIntro() {
  return (
    <section className="relative py-24 md:py-36 bg-[#F7F2EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        {/* Scattered Photo Left (matching Image 2) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="hidden md:block absolute -top-8 left-4 lg:left-12 w-36 lg:w-48 aspect-[3/4] rounded-lg overflow-hidden shadow-lg border-4 border-white rotate-[-3deg] z-10 bg-[#ECE3D6]"
          data-cursor="VIEW"
        >
          <img
            src={images.hero.scatter1.url}
            alt={images.hero.scatter1.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Scattered Photo Right (matching Image 2) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="hidden md:block absolute -bottom-10 right-4 lg:right-14 w-40 lg:w-52 aspect-[3/4] rounded-lg overflow-hidden shadow-lg border-4 border-white rotate-[4deg] z-10 bg-[#ECE3D6]"
          data-cursor="VIEW"
        >
          <img
            src={images.hero.scatter2.url}
            alt={images.hero.scatter2.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Center Editorial Typography */}
        <div className="max-w-2xl mx-auto text-center relative z-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-3">
              For the moments you'll want to relive
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#2A2420] leading-[1.15] uppercase font-light">
              Capturing the Intimacy in the Grand & the Everyday
            </h2>

            <OrnamentDivider className="my-5" />

            <p className="text-sm md:text-base text-[#7A6F64] font-light leading-relaxed max-w-xl mx-auto">
              We are not here to stage forced smiles or manufacture emotion. We are here to hold space for who you are, exactly as you are — no pressure, no performance. Our approach is quiet, intuitive, and patient, focused on the in-between glances that say more than words ever could.
            </p>

            <div className="pt-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-serif italic">
                Aurelia Ray — Principal Documentarian
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

