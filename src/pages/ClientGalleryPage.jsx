import React, { useState } from 'react';
import { Lock, Unlock, Heart, Download, Check, ArrowRight, ShieldCheck, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import OrnamentDivider from '../components/OrnamentDivider';
import Lightbox from '../components/Lightbox';
import { brand } from '../data/content';
import { images } from '../data/images';

export default function ClientGalleryPage() {
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedPhotos, setSelectedPhotos] = useState(new Set());
  const [downloadToast, setDownloadToast] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const demoData = brand.clientGalleryDemo;
  const galleryPhotos = images.portfolio; // Show all portfolio images as the proofing set

  const handleUnlock = (e) => {
    e.preventDefault();
    if (passcode.trim() === demoData.demoPasscode) {
      setIsUnlocked(true);
      setErrorMsg('');
    } else {
      setErrorMsg(`Incorrect passcode. Use the demo key: "${demoData.demoPasscode}"`);
    }
  };

  const toggleSelectPhoto = (id, e) => {
    e.stopPropagation();
    const updated = new Set(selectedPhotos);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    setSelectedPhotos(updated);
  };

  const handleDownload = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 3500);
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-20 bg-[#F7F2EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {!isUnlocked ? (
            /* Password-gated lock screen */
            <div className="max-w-md mx-auto py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-[#26211D] text-[#B08D57] flex items-center justify-center mx-auto mb-6 shadow-md">
                <Lock className="w-7 h-7" strokeWidth={1.5} />
              </div>

              <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
                Private Proofing Vault
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#2A2420] font-light uppercase">
                Client Gallery Access
              </h1>
              <OrnamentDivider className="my-4" />

              <p className="text-xs sm:text-sm text-[#7A6F64] font-light leading-relaxed mb-8">
                Enter your private family passcode to review your proofing collection, mark selections for album printing, and download high-resolution masters.
              </p>

              <form onSubmit={handleUnlock} className="bg-white p-6 sm:p-8 rounded-3xl border border-[#7A6F64]/15 shadow-sm space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#7A6F64] mb-1.5 font-medium text-left">
                    Access Passcode
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Enter gallery passcode"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F2EA] border border-[#7A6F64]/20 text-sm text-[#2A2420] placeholder-[#7A6F64]/50 focus:outline-none focus:border-[#B08D57]"
                  />
                  {errorMsg && (
                    <p className="text-xs text-rose-600 font-light mt-1.5 text-left">
                      {errorMsg}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#26211D] text-[#F7F2EA] hover:bg-[#B08D57] transition-colors text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Unlock Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-2">
                  <p className="text-[11px] text-[#7A6F64] bg-[#ECE3D6]/60 p-2.5 rounded-lg font-light">
                    Demo Password: <strong className="font-mono text-[#2A2420]">{demoData.demoPasscode}</strong>
                  </p>
                </div>
              </form>
            </div>
          ) : (
            /* Unlocked Client Proofing Gallery */
            <div>
              {/* Gallery Header */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#7A6F64]/15 shadow-sm mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B08D57] font-medium mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Private Client Archive</span>
                  </div>
                  <h1 className="font-serif text-3xl sm:text-4xl text-[#2A2420] font-light">
                    {demoData.eventTitle}
                  </h1>
                  <p className="text-xs sm:text-sm text-[#7A6F64] font-light mt-1">
                    {demoData.clientNames} • {demoData.eventDate} • {galleryPhotos.length} Master Frames
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsUnlocked(false)}
                    className="px-4 py-2 rounded-full border border-[#7A6F64]/20 text-xs text-[#7A6F64] hover:text-[#2A2420] hover:bg-[#F7F2EA] transition-colors"
                  >
                    Lock Vault
                  </button>
                </div>
              </div>

              {/* Floating Action Ribbon */}
              <div className="sticky top-20 z-30 bg-[#26211D] text-[#F7F2EA] rounded-2xl p-4 mb-8 shadow-xl flex flex-wrap items-center justify-between gap-4 border border-[#B08D57]/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B08D57]/20 flex items-center justify-center text-[#B08D57]">
                    <Heart className="w-4 h-4 fill-[#B08D57]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#CFC2B0] font-light block">
                      Album Selections
                    </span>
                    <span className="font-serif text-sm font-medium">
                      {selectedPhotos.size} of {galleryPhotos.length} photos marked
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {selectedPhotos.size > 0 && (
                    <button
                      onClick={() => setSelectedPhotos(new Set())}
                      className="text-xs text-[#CFC2B0] hover:text-white underline decoration-[#B08D57]"
                    >
                      Clear Selection
                    </button>
                  )}
                  <button
                    onClick={handleDownload}
                    className="py-2.5 px-5 rounded-full bg-[#B08D57] text-[#26211D] hover:bg-white transition-colors text-xs uppercase tracking-wider font-medium flex items-center gap-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download {selectedPhotos.size > 0 ? `Selected (${selectedPhotos.size})` : 'All Masters'}</span>
                  </button>
                </div>
              </div>

              {/* Toast feedback */}
              <AnimatePresence>
                {downloadToast && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#26211D] text-white px-6 py-3 rounded-full shadow-2xl border border-[#B08D57] text-xs flex items-center gap-2.5"
                  >
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Compiling full-resolution ZIP archive for your download...</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Photo Grid with SVG Heart Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {galleryPhotos.map((photo, index) => {
                  const isSelected = selectedPhotos.has(photo.id);
                  return (
                    <div
                      key={photo.id}
                      onClick={() => {
                        setLightboxIndex(index);
                        setLightboxOpen(true);
                      }}
                      className={`group relative rounded-xl overflow-hidden aspect-[3/3.8] bg-[#ECE3D6] cursor-pointer border-2 transition-all duration-300 ${
                        isSelected ? 'border-[#B08D57] shadow-md' : 'border-transparent hover:border-[#7A6F64]/30'
                      }`}
                      data-cursor="VIEW"
                    >
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Heart Selection Button (SVG Heart, no emoji) */}
                      <button
                        onClick={(e) => toggleSelectPhoto(photo.id, e)}
                        className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                          isSelected
                            ? 'bg-[#B08D57] text-[#26211D] scale-110 shadow-md'
                            : 'bg-black/40 text-white hover:bg-black/70 backdrop-blur-xs'
                        }`}
                        aria-label={isSelected ? 'Deselect photo' : 'Select photo for album'}
                      >
                        <Heart
                          className={`w-4 h-4 ${isSelected ? 'fill-[#26211D]' : ''}`}
                          strokeWidth={1.5}
                        />
                      </button>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                        <span className="text-[10px] uppercase tracking-wider text-[#B08D57]">{photo.category}</span>
                        <p className="text-xs font-serif truncate">{photo.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Lightbox */}
        <Lightbox
          isOpen={lightboxOpen}
          images={galleryPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % galleryPhotos.length)}
        />
      </div>
    </PageTransition>
  );
}

