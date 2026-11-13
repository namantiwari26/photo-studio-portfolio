import React from 'react';
import { motion } from 'framer-motion';
import { brand } from '../data/content';
import OrnamentDivider from './OrnamentDivider';

export default function ProcessSection() {
  return (
    <section className="relative z-10 w-full py-20 md:py-28 bg-[#F7F2EA] border-b border-[#7A6F64]/10 clear-both">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (matching Gryphon Studio Process heading block) */}
          <div className="lg:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
              Our Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2420] tracking-tight uppercase font-light">
              Process
            </h2>
            <OrnamentDivider className="my-3 justify-start" />
            <p className="text-sm text-[#7A6F64] font-light leading-relaxed max-w-sm">
              A calm, collaborative journey from your initial note to receiving your archival heirloom prints.
            </p>
          </div>

          {/* Right Column: 4 Numbered Steps Row with Connecting Line (matching Image 1) */}
          <div className="lg:col-span-8 relative">
            {/* Connecting Hairline that draws across on desktop */}
            <div className="hidden md:block absolute top-6 left-6 right-6 h-[1px] bg-[#7A6F64]/20 z-0 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="w-full h-full bg-[#B08D57] origin-left"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
              {brand.processSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-[#F7F2EA] p-2 rounded-xl"
                >
                  {/* Number Badge (circular ring matching Image 1) */}
                  <div className="w-12 h-12 rounded-full border border-[#B08D57] bg-[#F7F2EA] flex items-center justify-center font-serif text-base text-[#2A2420] mb-4 shadow-2xs">
                    {step.step.replace(/^0/, '')}
                  </div>

                  <h3 className="font-serif text-lg text-[#2A2420] font-normal mb-1">
                    {step.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider text-[#B08D57] font-medium mb-1.5">
                    {step.title}
                  </p>
                  <p className="text-xs text-[#7A6F64] font-light leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
