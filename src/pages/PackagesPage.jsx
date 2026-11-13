import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, ChevronDown, ChevronUp, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import OrnamentDivider from '../components/OrnamentDivider';
import CTASection from '../components/CTASection';
import { brand } from '../data/content';

export default function PackagesPage() {
  const [packageType, setPackageType] = useState('weddings'); // 'weddings' | 'portraits'
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const currentPackages = packageType === 'weddings'
    ? brand.packages.weddings
    : brand.packages.portraitsAndEvents;

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-20 bg-[#F7F2EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
              Investment & Commissioning
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2A2420] tracking-tight uppercase font-light">
              Packages
            </h1>
            <OrnamentDivider className="my-3" />
            <p className="text-sm text-[#7A6F64] font-light leading-relaxed">
              Transparent, tailored collections designed around your day. Every commission includes full print release, personal consultations, and high-resolution deliverables.
            </p>

            {/* Toggle Switch */}
            <div className="flex items-center justify-center gap-2 mt-8 p-1.5 bg-[#ECE3D6] rounded-full max-w-sm mx-auto">
              <button
                onClick={() => setPackageType('weddings')}
                className={`flex-1 py-2.5 px-4 text-xs uppercase tracking-[0.18em] rounded-full transition-all duration-300 font-medium ${
                  packageType === 'weddings'
                    ? 'bg-[#26211D] text-[#F7F2EA] shadow-xs'
                    : 'text-[#7A6F64] hover:text-[#2A2420]'
                }`}
              >
                Wedding Celebrations
              </button>
              <button
                onClick={() => setPackageType('portraits')}
                className={`flex-1 py-2.5 px-4 text-xs uppercase tracking-[0.18em] rounded-full transition-all duration-300 font-medium ${
                  packageType === 'portraits'
                    ? 'bg-[#26211D] text-[#F7F2EA] shadow-xs'
                    : 'text-[#7A6F64] hover:text-[#2A2420]'
                }`}
              >
                Events & Portraits
              </button>
            </div>
          </div>

          {/* Pricing Tiers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
            {currentPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? 'bg-[#26211D] text-[#F7F2EA] shadow-xl border-2 border-[#B08D57]'
                    : 'bg-white text-[#2A2420] shadow-sm border border-[#7A6F64]/15 hover:shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B08D57] text-[#26211D] px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    Most Booked
                  </div>
                )}

                <div>
                  <div className="border-b border-[#7A6F64]/20 pb-6 mb-6">
                    <h3 className="font-serif text-2xl font-light tracking-wide mb-1">
                      {pkg.name}
                    </h3>
                    <p className={`text-xs font-light ${pkg.popular ? 'text-[#CFC2B0]' : 'text-[#7A6F64]'}`}>
                      {pkg.subtitle}
                    </p>
                    <div className="mt-4">
                      <span className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
                        {pkg.price}
                      </span>
                      <p className={`text-[11px] font-light mt-1 ${pkg.popular ? 'text-[#B08D57]' : 'text-[#7A6F64]'}`}>
                        {pkg.priceDetails}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className={`text-[10px] uppercase tracking-[0.2em] font-medium ${pkg.popular ? 'text-[#B08D57]' : 'text-[#7A6F64]'}`}>
                      Included in this commission:
                    </p>
                    <ul className="space-y-2.5 text-xs font-light">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? 'text-[#B08D57]' : 'text-[#B08D57]'}`} />
                          <span className={pkg.popular ? 'text-[#F7F2EA]' : 'text-[#2A2420]'}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#7A6F64]/20">
                  <p className={`text-[11px] font-light italic ${pkg.popular ? 'text-[#CFC2B0]/80' : 'text-[#7A6F64]'}`}>
                    {pkg.extraDetails}
                  </p>
                  <Link
                    to={`/contact?package=${encodeURIComponent(pkg.name)}`}
                    className={`w-full py-3.5 px-6 rounded-xl text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-colors ${
                      pkg.popular
                        ? 'bg-[#B08D57] text-[#26211D] hover:bg-white'
                        : 'bg-[#26211D] text-[#F7F2EA] hover:bg-[#B08D57]'
                    }`}
                  >
                    <span>Reserve Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#7A6F64]/15 shadow-sm mb-20">
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B08D57] font-medium block mb-1">
                Bespoke Additions
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2420] font-light">
                Tailor Your Commission
              </h3>
              <p className="text-xs text-[#7A6F64] font-light mt-1">
                Add cinema reels, drone licenses, extra hours, or heirloom albums to any base tier.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brand.packages.addOns.map((addon) => (
                <div
                  key={addon.id}
                  className="p-5 rounded-2xl bg-[#F7F2EA] border border-[#7A6F64]/10 hover:border-[#B08D57] transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-base text-[#2A2420] font-medium">
                      {addon.name}
                    </h4>
                    <span className="font-sans text-xs font-semibold text-[#B08D57] shrink-0 ml-2">
                      {addon.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#7A6F64] font-light leading-relaxed">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div id="faq" className="max-w-3xl mx-auto scroll-mt-28">
            <div className="text-center mb-10">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-1">
                Clarity & Confidence
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2A2420] font-light uppercase">
                Frequently Answered Questions
              </h3>
              <OrnamentDivider className="my-3" />
            </div>

            <div className="space-y-4">
              {brand.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-[#7A6F64]/15 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-base sm:text-lg text-[#2A2420] font-normal">
                        {faq.q}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-[#ECE3D6] text-[#2A2420] flex items-center justify-center shrink-0">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 text-xs sm:text-sm text-[#7A6F64] font-light leading-relaxed border-t border-[#7A6F64]/10 pt-4"
                        >
                          <p>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20">
            <CTASection />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

