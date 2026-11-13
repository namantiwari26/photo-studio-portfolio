import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { brand } from '../data/content';
import Magnetic from './Magnetic';
import OrnamentDivider from './OrnamentDivider';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 180) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'Packages', href: '/packages' },
    { label: 'Journal', href: '/journal' },
    { label: 'Client Gallery', href: '/client-gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#F7F2EA]/95 backdrop-blur-md shadow-xs border-b border-[#7A6F64]/15 py-3'
            : 'bg-[#F7F2EA]/80 backdrop-blur-xs border-b border-[#7A6F64]/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Top Brand Wordmark (matching Moments by Eve & Gryphon Studio) */}
          <div className="flex items-center justify-between pb-2 border-b border-[#7A6F64]/15">
            <div className="hidden lg:flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-[#7A6F64] font-medium">
              <span>Mumbai</span>
              <span className="w-1 h-1 rounded-full bg-[#B08D57]" />
              <span>Worldwide</span>
            </div>

            <Link
              to="/"
              className="mx-auto text-center group cursor-pointer"
            >
              <h1 className="font-serif text-2xl md:text-3xl lg:text-[28px] tracking-[0.22em] uppercase text-[#2A2420] transition-colors group-hover:text-[#B08D57]">
                {brand.name}
              </h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#7A6F64] font-sans -mt-0.5">
                {brand.tagline}
              </p>
            </Link>

            <div className="hidden lg:flex items-center justify-end gap-4">
              <Magnetic strength={0.3}>
                <Link
                  to="/contact"
                  className="px-5 py-2 rounded-full border border-[#2A2420] text-[#2A2420] hover:bg-[#2A2420] hover:text-[#F7F2EA] transition-all duration-300 text-[11px] uppercase tracking-[0.18em] font-medium flex items-center gap-1.5"
                >
                  <span>Book a Date</span>
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </Link>
              </Magnetic>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#2A2420] hover:text-[#B08D57] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
              </button>
            </div>
          </div>

          {/* Bottom Desktop Navigation Row */}
          <nav className="hidden lg:flex items-center justify-center gap-8 pt-2.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-[11px] uppercase tracking-[0.22em] transition-all relative py-1 font-medium ${
                    isActive
                      ? 'text-[#2A2420]'
                      : 'text-[#7A6F64] hover:text-[#2A2420]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B08D57]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#26211D] text-[#F7F2EA] pt-28 px-6 pb-10 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <OrnamentDivider color="#B08D57" className="mb-2" />
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-serif text-2xl tracking-[0.15em] uppercase transition-colors ${
                        isActive ? 'text-[#B08D57]' : 'text-[#F7F2EA] hover:text-[#B08D57]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-8 border-t border-white/10 text-center flex flex-col items-center gap-4">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full max-w-xs py-3 rounded-full bg-[#B08D57] text-[#26211D] font-medium text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2"
              >
                <span>Reserve Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-6 text-sm text-[#CFC2B0] font-light">
                <a
                  href={`https://wa.me/${brand.contact.whatsapp}?text=${encodeURIComponent(brand.contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#B08D57]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${brand.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-[#B08D57]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Atelier</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

