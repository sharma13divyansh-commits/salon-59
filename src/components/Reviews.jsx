import React, { useState } from 'react';
import { reviews } from '../data/reviews';
import { Quote, Star, ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-24 bg-warm-ivory relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-nude-pink/20 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-champagne-gold/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-soft-blush border border-rose-gold/30 text-rose-gold">
            <Heart className="w-3.5 h-3.5 fill-rose-gold/20" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">
              Testimonials & Word of Mouth
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-deep-charcoal">
            LOVE FROM OUR CLIENTS
          </h2>

          <p className="text-base sm:text-lg text-deep-charcoal/75 font-light tracking-wide">
            Real experiences. Beautiful transformations. Happy customers.
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto" />
        </div>

        {/* Desktop View: Elegant Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Second Row for Desktop (2 centered cards) */}
        <div className="hidden lg:grid grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {reviews.slice(3, 5).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Mobile & Tablet View: Carousel with Controls */}
        <div className="lg:hidden relative max-w-md mx-auto">
          <ReviewCard review={reviews[currentIndex]} isCarousel={true} />
          
          <div className="flex items-center justify-between mt-6 px-4">
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-soft-blush text-deep-charcoal border border-rose-gold/30 hover:bg-rose-gold hover:text-white transition-all shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-6 bg-rose-gold' : 'w-2 bg-rose-gold/30'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-soft-blush text-deep-charcoal border border-rose-gold/30 hover:bg-rose-gold hover:text-white transition-all shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Small Notice regarding Authentic Feedback */}
        <div className="text-center mt-12">
          <p className="text-[11px] uppercase tracking-wider text-deep-charcoal/60">
            ★ Authentic Client Testimonials from Uttam Nagar Community
          </p>
        </div>

      </div>
    </section>
  );
}

function ReviewCard({ review, isCarousel }) {
  return (
    <div className="relative bg-white rounded-2xl p-8 border border-rose-gold/25 shadow-md hover:shadow-luxury transition-all duration-500 flex flex-col justify-between group">
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-6 text-nude-pink/50 group-hover:text-rose-gold/30 transition-colors">
        <Quote className="w-10 h-10 rotate-180" />
      </div>

      <div className="space-y-4 relative z-10">
        {/* Decorative 5-star visual styling */}
        <div className="flex items-center space-x-1 text-champagne-gold">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-champagne-gold stroke-rose-gold/40" />
          ))}
          <span className="text-[10px] text-rose-gold uppercase tracking-widest font-semibold ml-2">
            Verified
          </span>
        </div>

        {/* Service Highlight Tag */}
        {review.highlight && (
          <div className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-soft-blush text-rose-gold border border-rose-gold/20">
            {review.highlight}
          </div>
        )}

        {/* Exact review text */}
        <p className="text-sm sm:text-base text-deep-charcoal/80 font-light leading-relaxed italic whitespace-pre-line">
          "{review.text}"
        </p>
      </div>

      {/* Customer Name & Attribution */}
      <div className="pt-6 mt-6 border-t border-rose-gold/15 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-gold to-nude-pink flex items-center justify-center text-white font-serif font-bold text-sm shadow-sm">
            {review.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-deep-charcoal">
              {review.name}
            </h4>
            <p className="text-[11px] text-rose-gold uppercase tracking-wider font-medium">
              {review.date}
            </p>
          </div>
        </div>

        <Sparkles className="w-4 h-4 text-rose-gold/40 group-hover:text-rose-gold transition-colors" />
      </div>
    </div>
  );
}
