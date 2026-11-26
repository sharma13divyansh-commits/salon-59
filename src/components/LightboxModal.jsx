import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function LightboxModal({ image, isOpen, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-deep-charcoal/90 backdrop-blur-md p-4 transition-all duration-300">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none z-50"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none z-50"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation Button */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none z-50"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Container with Rose-Gold Border Glow */}
      <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center p-2">
        <div className="relative rounded-2xl overflow-hidden border border-rose-gold/40 shadow-2xl bg-black">
          <img
            src={image.src}
            alt={image.title}
            className="max-h-[75vh] w-auto object-contain mx-auto transition-transform duration-300"
          />
          {/* Bottom Caption */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-charcoal/95 via-deep-charcoal/60 to-transparent p-6 text-center text-white">
            <h4 className="font-serif text-xl font-bold tracking-wide text-champagne-gold">
              {image.title}
            </h4>
            <p className="text-xs text-nude-pink/90 uppercase tracking-widest mt-1">
              {image.category} • SALON 59
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
