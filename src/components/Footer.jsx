import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Leaf, 
  Image as ImageIcon, 
  HelpCircle, 
  Mail, 
  Send, 
  Check, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';
import { brand } from '../data/content';
import OrnamentDivider from './OrnamentDivider';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const darkBarItems = [
    { label: 'Services', icon: Sparkles, link: '/services' },
    { label: 'Approach', icon: Leaf, link: '/about' },
    { label: 'Work', icon: ImageIcon, link: '/portfolio' },
    { label: 'FAQs', icon: HelpCircle, link: '/packages#faq' },
    { label: 'Contact', icon: Mail, link: '/contact' },
  ];

  return (
    <footer className="bg-[#26211D] text-[#F7F2EA] relative">
      {/* Dark Icon Bar (Exact match to Image 1 Gryphon Studio Bottom Bar) */}
      <div className="border-b border-white/10 bg-[#1F1B18]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {darkBarItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.link}
                  className="py-4 md:py-5 px-3 flex items-center justify-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#CFC2B0] hover:text-[#B08D57] transition-all group"
                >
                  <Icon className="w-4 h-4 text-[#B08D57] group-hover:scale-110 transition-transform" strokeWidth={1.25} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Col 1: Studio Wordmark & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-serif text-2xl tracking-[0.2em] uppercase text-[#F7F2EA]">
              {brand.name}
            </h2>
            <p className="text-xs uppercase tracking-[0.3em] text-[#B08D57]">
              {brand.tagline}
            </p>
            <p className="text-xs text-[#CFC2B0] font-light leading-relaxed max-w-sm">
              An editorial studio dedicated to quiet intimacy, candid celebrations, and enduring visual heirlooms. Handcrafted in India, commissioned globally.
            </p>
            <div className="pt-2 text-xs text-[#CFC2B0]/80 space-y-1 font-light">
              <p>{brand.contact.address.line1}</p>
              <p>{brand.contact.address.line2}</p>
              <p>{brand.contact.address.city}, {brand.contact.address.state} — {brand.contact.address.pincode}</p>
              <p className="text-[#B08D57] pt-1">{brand.contact.studioHours}</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
              Explore
            </h3>
            <ul className="space-y-2 text-xs text-[#CFC2B0] font-light">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Atelier</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio & Stories</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services & Film</Link></li>
              <li><Link to="/packages" className="hover:text-white transition-colors">Packages & FAQ</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal & Guides</Link></li>
              <li><Link to="/client-gallery" className="hover:text-white transition-colors">Client Gallery Demo</Link></li>
            </ul>
          </div>

          {/* Col 3: Services Shortlist */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
              Disciplines
            </h3>
            <ul className="space-y-2 text-xs text-[#CFC2B0] font-light">
              <li><Link to="/services#weddings" className="hover:text-white transition-colors">Wedding Celebrations</Link></li>
              <li><Link to="/services#pre-wedding" className="hover:text-white transition-colors">Pre-Wedding & Save-the-Date</Link></li>
              <li><Link to="/services#maternity-newborn" className="hover:text-white transition-colors">Maternity & Newborn</Link></li>
              <li><Link to="/services#events-celebrations" className="hover:text-white transition-colors">Private Events & Milestones</Link></li>
              <li><Link to="/services#corporate-headshots" className="hover:text-white transition-colors">Corporate & Conclaves</Link></li>
              <li><Link to="/services#cinematic-films" className="hover:text-white transition-colors">Cinematography & Reels</Link></li>
              <li><Link to="/services#albums-bespoke" className="hover:text-white transition-colors">Archival Albums & Prints</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
              The Atelier Gazette
            </h3>
            <p className="text-xs text-[#CFC2B0] font-light leading-relaxed">
              Occasional dispatches on wedding planning, light studies, and recent monographs. Never spam.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="pt-1">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/15 text-xs text-[#F7F2EA] placeholder-white/40 focus:outline-none focus:border-[#B08D57]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#B08D57] text-[#26211D] rounded-md text-xs hover:bg-white transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#B08D57] mt-1.5">
                  Thank you for subscribing to our gazette.
                </p>
              )}
            </form>

            <div className="pt-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#CFC2B0]/70 mb-2">Social Channels</p>
              <div className="flex items-center gap-3 text-xs text-[#CFC2B0]">
                <a
                  href={brand.contact.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#B08D57] transition-colors flex items-center gap-1"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <span>•</span>
                <a
                  href={brand.contact.socials.vimeo}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#B08D57] transition-colors"
                >
                  Vimeo
                </a>
                <span>•</span>
                <a
                  href={brand.contact.socials.pinterest}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#B08D57] transition-colors"
                >
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#CFC2B0]/60 font-light gap-4">
          <p>© {new Date().getFullYear()} {brand.name}. All visual works protected under artistic copyright.</p>
          <div className="flex items-center gap-4">
            <Link to="/client-gallery" className="hover:text-[#B08D57]">Client Proofing Portal</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#B08D57]">Privacy & Commissioning Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
