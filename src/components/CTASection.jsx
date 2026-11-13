import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUpRight, Phone } from 'lucide-react';
import { brand } from '../data/content';
import OrnamentDivider from './OrnamentDivider';
import Magnetic from './Magnetic';

export default function CTASection() {
  const whatsappUrl = `https://wa.me/${brand.contact.whatsapp}?text=${encodeURIComponent(brand.contact.whatsappMessage)}`;

  return (
    <section className="py-24 md:py-32 bg-[#F7F2EA] border-b border-[#7A6F64]/10 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 relative z-10">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
          Reserve Your Dates
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A2420] tracking-tight uppercase font-light leading-tight">
          Let Us Frame Your Story
        </h2>

        <OrnamentDivider className="my-5" />

        <p className="text-sm sm:text-base text-[#7A6F64] font-light leading-relaxed max-w-xl mx-auto mb-10">
          We accept a strictly limited number of commissions each season to ensure personal creative dedication. Inquire early for peak autumn and winter wedding dates.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Magnetic strength={0.25}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#26211D] text-[#F7F2EA] hover:bg-[#B08D57] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2.5 shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#B08D57]" />
              <span>Connect on WhatsApp</span>
            </a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#2A2420] text-[#2A2420] hover:bg-[#2A2420] hover:text-[#F7F2EA] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2"
            >
              <span>Consultation Form</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Magnetic>
        </div>

        <div className="mt-8 text-xs text-[#7A6F64] font-light flex items-center justify-center gap-2">
          <span>Or call directly:</span>
          <a
            href={`tel:${brand.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="text-[#2A2420] font-medium hover:text-[#B08D57] underline decoration-[#B08D57]/40"
          >
            {brand.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

