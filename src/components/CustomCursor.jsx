import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;
    document.body.classList.add('has-custom-cursor');

    const cursor = cursorRef.current;
    if (!cursor) return;

    let xTo = gsap.quickTo(cursor, "x", { duration: 0.25, ease: "power2.out" });
    let yTo = gsap.quickTo(cursor, "y", { duration: 0.25, ease: "power2.out" });

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      const clickable = e.target.closest('a, button, input, select, textarea, [role="button"]');

      if (target) {
        const text = target.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovering(true);
      } else if (clickable) {
        setCursorText('');
        setIsHovering(true);
      } else {
        setCursorText('');
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out border ${
          cursorText
            ? 'w-20 h-20 bg-[#26211D]/90 text-[#F7F2EA] border-[#B08D57]/40 shadow-xl backdrop-blur-xs scale-100'
            : isHovering
            ? 'w-12 h-12 bg-[#B08D57]/20 border-[#B08D57] scale-100'
            : 'w-4 h-4 bg-[#2A2420]/30 border-[#2A2420]/60 scale-75'
        }`}
      >
        {cursorText && (
          <span
            ref={textRef}
            className="text-[10px] uppercase font-sans tracking-[0.2em] font-medium"
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}

