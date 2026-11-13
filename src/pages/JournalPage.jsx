import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen, X, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import OrnamentDivider from '../components/OrnamentDivider';
import CTASection from '../components/CTASection';
import { images } from '../data/images';

export default function JournalPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <PageTransition>
      <div className="pt-28 pb-20 bg-[#F7F2EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
              Perspectives & Planning
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2A2420] tracking-tight uppercase font-light">
              The Journal
            </h1>
            <OrnamentDivider className="my-3" />
            <p className="text-sm text-[#7A6F64] font-light leading-relaxed">
              Essays on natural light, cultural ceremony timelines, wardrobe recommendations, and holding sacred space for celebration.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {images.journal.map((post, idx) => (
              <article
                key={post.id}
                onClick={() => setSelectedArticle(post)}
                className="bg-white rounded-3xl overflow-hidden border border-[#7A6F64]/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE3D6]">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-[#26211D]/80 backdrop-blur-xs text-[#F7F2EA] px-3.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-medium">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-[#7A6F64]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#B08D57]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl text-[#2A2420] font-normal group-hover:text-[#B08D57] transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#7A6F64] font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between border-t border-[#7A6F64]/10 text-xs uppercase tracking-wider text-[#2A2420] font-medium">
                  <span>Read Article</span>
                  <div className="w-8 h-8 rounded-full border border-[#7A6F64]/20 flex items-center justify-center group-hover:bg-[#26211D] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Full Article Reader Modal */}
          <AnimatePresence>
            {selectedArticle && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-[#1a1715]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
                onClick={() => setSelectedArticle(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl border border-[#7A6F64]/20 my-auto max-h-[90vh] flex flex-col"
                >
                  {/* Modal Header Bar */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-[#7A6F64]/15 bg-[#F7F2EA]">
                    <span className="text-[10px] uppercase tracking-widest text-[#B08D57] font-medium">
                      {selectedArticle.category}
                    </span>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="p-1.5 rounded-full hover:bg-black/5 text-[#2A2420]"
                      aria-label="Close reader"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Modal Body */}
                  <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-xs text-[#7A6F64]">
                        <span>{selectedArticle.date}</span>
                        <span>•</span>
                        <span>{selectedArticle.readTime}</span>
                      </div>
                      <h1 className="font-serif text-3xl sm:text-4xl text-[#2A2420] font-light leading-tight">
                        {selectedArticle.title}
                      </h1>
                    </div>

                    <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-[#ECE3D6]">
                      <img
                        src={selectedArticle.cover}
                        alt={selectedArticle.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-4 text-sm sm:text-base text-[#7A6F64] font-light leading-relaxed">
                      {selectedArticle.content.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-[#7A6F64]/15 flex items-center justify-between text-xs text-[#7A6F64]">
                      <span>Written by Aurelia Ray</span>
                      <button
                        onClick={() => setSelectedArticle(null)}
                        className="text-[#2A2420] font-medium underline decoration-[#B08D57]"
                      >
                        Back to all articles
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-20">
            <CTASection />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

