import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import OrnamentDivider from './OrnamentDivider';

export default function MeetPhotographer() {
  const photographer = images.team.photographer;

  return (
    <section className="py-24 md:py-36 bg-[#FFFFFF] border-b border-[#7A6F64]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Photographer Portrait with camera (matching Image 2) */}
          <div className="lg:col-span-5 lg:col-start-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[#7A6F64]/15 bg-[#ECE3D6] max-w-md mx-auto"
              data-cursor="VIEW"
            >
              <img
                src={photographer.url}
                alt={photographer.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center border border-[#7A6F64]/10">
                <p className="font-serif text-sm text-[#2A2420]">Aurelia Ray</p>
                <p className="text-[10px] uppercase tracking-widest text-[#7A6F64]">Atelier Principal & Artist</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Typography & Bio (matching Image 2) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-lg"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-3">
                It's nice to meet you, I'm Aurelia
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#2A2420] leading-tight uppercase font-light">
                Meet Your Photographer
              </h2>

              <OrnamentDivider className="my-4 justify-start" />

              <div className="space-y-4 text-sm sm:text-base text-[#7A6F64] font-light leading-relaxed">
                <p>
                  I have spent over a decade documenting life through a viewfinder. My background in visual anthropology and classical painting shapes how I observe ceremonies: noticing light shifting across silk, the sudden grip of a mother's hand, and the laughter that erupts when formalities drop away.
                </p>
                <p>
                  My approach is fundamentally calm and honest. When you work with our studio, there are no megaphones, no awkward commands to tilt your chin, and no manufactured drama. We let your day unfold naturally, creating an environment where you feel deeply seen, respected, and completely yourself.
                </p>
              </div>

              <div className="pt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#2A2420] hover:text-[#B08D57] font-medium group transition-colors"
                >
                  <span className="border-b border-[#2A2420] group-hover:border-[#B08D57] pb-1">
                    More About Me & The Atelier
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.25} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

