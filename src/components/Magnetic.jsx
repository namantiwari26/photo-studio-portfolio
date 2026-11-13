import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Magnetic({ children, strength = 0.35, className = "" }) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el || window.matchMedia('(pointer: coarse)').matches) return;

    let xTo = gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" });
    let yTo = gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      xTo(deltaX);
      yTo(deltaY);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={elRef} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}

