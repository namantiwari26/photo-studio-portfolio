import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { images } from '../data/images';
import { brand } from '../data/content';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function InstagramStrip() {
  return (
    <section className="bg-white border-b border-[#7A6F64]/10">
      <div className="py-6 px-6 text-center border-b border-[#7A6F64]/10">
        <a
          href={brand.contact.socials.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#7A6F64] hover:text-[#B08D57] transition-colors"
        >
          <InstagramIcon className="w-3.5 h-3.5" />
          <span>Follow our daily journal {brand.contact.socials.instagramHandle}</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {images.instagram.map((photo) => (
          <a
            key={photo.id}
            href={brand.contact.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square overflow-hidden bg-[#ECE3D6] block border-r border-b sm:border-b-0 border-[#7A6F64]/10 last:border-r-0"
            data-cursor="VIEW"
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-white">
              <InstagramIcon className="w-5 h-5 mb-1.5 opacity-80" />
              <p className="text-[10px] uppercase tracking-wider line-clamp-2">
                {photo.caption}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
