import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { brand } from '../data/content';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = `https://wa.me/${brand.contact.whatsapp}?text=${encodeURIComponent(brand.contact.whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {/* Optional Greeting Pill */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 10 }}
            className="hidden sm:flex items-center gap-2 bg-[#26211D] text-[#F7F2EA] px-3.5 py-2 rounded-xl shadow-xl border border-[#B08D57]/30 text-xs font-light max-w-xs"
          >
            <span>Have dates in mind? Chat with our studio concierge.</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#CFC2B0] hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 rounded-full bg-[#26211D] text-[#B08D57] hover:bg-[#B08D57] hover:text-[#26211D] shadow-xl border border-[#B08D57]/40 flex items-center justify-center transition-all duration-300 hover:scale-105 group relative"
        aria-label="Direct WhatsApp consultation"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#26211D]" />
        <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
      </a>
    </div>
  );
}

