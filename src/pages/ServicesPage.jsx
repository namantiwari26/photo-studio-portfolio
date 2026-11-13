import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import OrnamentDivider from '../components/OrnamentDivider';
import CTASection from '../components/CTASection';
import { brand } from '../data/content';

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 bg-[#F7F2EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
              Disciplines & Craft
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2A2420] tracking-tight uppercase font-light">
              Services
            </h1>
            <OrnamentDivider className="my-3" />
            <p className="text-sm text-[#7A6F64] font-light leading-relaxed">
              From intimate vows in coastal chapels to multi-day royal palace unions, corporate summits, and fine-art monographs. Each commission is approached with reverence for natural light and genuine emotion.
            </p>
          </div>

          {/* Quick Sub-nav pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-16 max-w-4xl mx-auto">
            {brand.services.map((srv) => (
              <a
                key={srv.id}
                href={`#${srv.id}`}
                className="px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider bg-white/70 hover:bg-[#26211D] hover:text-[#F7F2EA] text-[#7A6F64] border border-[#7A6F64]/15 transition-all"
              >
                {srv.title.split('&')[0].trim()}
              </a>
            ))}
          </div>

          {/* Services Detailed List (Alternating Layouts) */}
          <div className="space-y-20 md:space-y-28">
            {brand.services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <section
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-[#7A6F64]/15 shadow-sm scroll-mt-28"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Image Column */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative aspect-[4/3.8] rounded-2xl overflow-hidden bg-[#ECE3D6] shadow-md border border-[#7A6F64]/10 group">
                        <img
                          src={service.heroImage}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 bg-[#26211D]/80 backdrop-blur-xs text-[#F7F2EA] px-3.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-medium">
                          {service.badge}
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-medium block mb-1">
                          Service {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2A2420] font-light">
                          {service.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-[#7A6F64] font-light leading-relaxed mt-2">
                          {service.shortDescription}
                        </p>
                      </div>

                      {/* Coverage / Sub-services bullet list */}
                      <div>
                        <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#2A2420] font-medium mb-2.5">
                          What We Cover
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#7A6F64] font-light">
                          {service.subServices.map((sub, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] mt-1.5 shrink-0" />
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Inclusions */}
                      <div className="bg-[#F7F2EA] p-4 rounded-xl border border-[#7A6F64]/10">
                        <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#2A2420] font-medium mb-2 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-[#B08D57]" />
                          Signature Inclusions
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#7A6F64] font-light">
                          {service.inclusions.map((inc, iIdx) => (
                            <li key={iIdx} className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Meta Info: Turnaround & Ideal For */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#7A6F64] pt-1">
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[#2A2420] font-medium block">Turnaround Time</span>
                            <span>{service.turnaround}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Heart className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[#2A2420] font-medium block">Starting Retainer</span>
                            <span className="text-[#B08D57] font-medium">{service.startingPrice}</span>
                          </div>
                        </div>
                      </div>

                      {/* Ideal For Quote */}
                      <p className="text-xs text-[#7A6F64] italic border-l-2 border-[#B08D57] pl-3 py-0.5">
                        <strong className="not-italic text-[#2A2420]">Ideal for: </strong>
                        {service.idealFor}
                      </p>

                      {/* Action Button prefilling booking form */}
                      <div className="pt-2">
                        <Link
                          to={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#26211D] text-[#F7F2EA] hover:bg-[#B08D57] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium shadow-xs"
                        >
                          <span>Inquire About {service.title.split('&')[0]}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-24">
            <CTASection />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

