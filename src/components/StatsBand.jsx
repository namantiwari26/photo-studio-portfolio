import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { brand } from '../data/content';

function CounterItem({ label, value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center px-4 py-6 border-b sm:border-b-0 sm:border-r border-[#7A6F64]/15 last:border-none">
      <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2A2420] tracking-tight font-light mb-1">
        {count}
        <span className="text-[#B08D57]">{suffix}</span>
      </div>
      <p className="text-[11px] uppercase tracking-[0.2em] text-[#7A6F64] font-medium font-sans">
        {label}
      </p>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="py-12 bg-[#ECE3D6]/60 border-b border-[#7A6F64]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {brand.stats.map((stat) => (
            <CounterItem
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

