import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplete(true);
      if (onComplete) onComplete();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] }
          }}
          className="fixed inset-0 z-[10000] bg-[#26211D] text-[#F7F2EA] flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
            {/* Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-12 h-12 rounded-full border border-[#B08D57]/50 flex items-center justify-center mb-4"
            >
              <span className="font-serif text-lg tracking-widest text-[#B08D57]">A</span>
            </motion.div>

            {/* Wordmark */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase font-light text-[#F7F2EA]"
            >
              Aurelia Studio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#CFC2B0] mt-2 font-light"
            >
              Photography & Cinematic Films
            </motion.p>

            {/* Drawing Hairline */}
            <div className="w-36 h-[1px] bg-white/10 mt-6 overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
                className="w-full h-full bg-[#B08D57]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

