import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, HeartHandshake, Camera, Film } from 'lucide-react';
import { motion } from 'framer-motion';
import OrnamentDivider from './OrnamentDivider';

export default function ServicesOverview() {
  const cards = [
    {
      id: 'weddings',
      title: 'Weddings',
      icon: Sparkles,
      image: '/images/weddings/wedding-main.jpg',
      alt: 'Wedding ceremony floral archway and heritage courtyard',
      description: 'Multi-day celebrations, sacred rituals, and candid family intimacy across India and destinations.',
      link: '/services#weddings',
    },
    {
      id: 'approach',
      title: 'Portraits & Milestones',
      icon: HeartHandshake,
      image: '/images/portraits/portrait-1.jpg',
      alt: 'Editorial natural light portrait',
      description: 'Unhurried sessions celebrating expectant mothers, newborn tenderness, and personal creative monographs.',
      link: '/services#maternity-newborn',
    },
    {
      id: 'work',
      title: 'Selected Work',
      icon: Camera,
      image: '/images/hero/triptych-2.jpg',
      alt: 'Couple strolling along palace grounds',
      description: 'Explore real celebrations, fine-art monographs, and architectural memoirs.',
      link: '/portfolio',
    },
    {
      id: 'cinema',
      title: 'Cinematic Films',
      icon: Film,
      image: '/images/weddings/wedding-3.jpg',
      alt: 'Atmospheric evening dance under festoon lights',
      description: 'Poetic motion pictures captured with cinema prime optics and authentic sound design.',
      link: '/services#cinematic-films',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#ECE3D6]/50 border-y border-[#7A6F64]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
            Disciplines & Dedication
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2420] tracking-tight uppercase font-light">
            Our Core Offerings
          </h2>
          <OrnamentDivider className="my-3" />
        </div>

        {/* 4 Cards Grid (matching Gryphon Studio 3-image cards style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                className="group bg-white rounded-2xl p-4 shadow-sm border border-[#7A6F64]/10 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image with rounded corners matching Image 1 */}
                  <div className="rounded-xl overflow-hidden aspect-[4/4.5] bg-[#ECE3D6] mb-5 relative">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#ECE3D6]/70 flex items-center justify-center text-[#B08D57]">
                      <Icon className="w-3.5 h-3.5" strokeWidth={1.25} />
                    </div>
                    <h3 className="font-serif text-xl text-[#2A2420] font-normal">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#7A6F64] font-light leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                {/* Arrow Link */}
                <div className="pt-2 border-t border-[#7A6F64]/10 flex justify-end">
                  <Link
                    to={card.link}
                    className="w-8 h-8 rounded-full border border-[#7A6F64]/20 flex items-center justify-center text-[#2A2420] group-hover:bg-[#26211D] group-hover:text-white group-hover:border-[#26211D] transition-all duration-300"
                    aria-label={`Learn more about ${card.title}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.25} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

