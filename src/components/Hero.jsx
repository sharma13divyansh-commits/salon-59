import React from 'react';
import { Sparkles, ArrowRight, Calendar, Star, ShieldCheck, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-warm-ivory">
      {/* Subtle Luxury Ambient Background Gradients */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-nude-pink/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-32 w-80 h-80 rounded-full bg-champagne-gold/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Elegant Label */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-soft-blush border border-rose-gold/30 text-rose-gold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">
                YOUR BEAUTY DESTINATION IN UTTAM NAGAR
              </span>
            </div>

            {/* Main Editorial Heading */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-deep-charcoal leading-[1.1]">
                YOUR BEAUTY, <br />
                <span className="italic font-normal text-rose-gold relative inline-block">
                  OUR PASSION.
                  {/* Decorative underline */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-champagne-gold/60" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                    <path d="M1 5.5C50 1.5 150 1.5 199 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-deep-charcoal/80 max-w-xl font-light leading-relaxed">
              Discover the art of beauty and self-expression at Salon 59. Experience expert styling, luxurious treatments, and personalized care designed to bring out your best.
            </p>

            {/* Two CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-5">
              <a
                href="#services"
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-deep-charcoal bg-soft-blush border border-rose-gold/40 hover:bg-nude-pink/50 hover:border-rose-gold transition-all duration-300 shadow-sm hover:shadow"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-rose-gold" />
              </a>

              <a
                href="#booking"
                className="inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-white bg-gradient-to-r from-rose-gold via-rose-gold-light to-rose-gold hover:from-rose-gold-dark hover:to-rose-gold transition-all duration-300 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-warm-ivory" />
                <span>Book Your Appointment</span>
              </a>
            </div>

            {/* Trust & Luxury Highlights */}
            <div className="pt-8 border-t border-rose-gold/20 grid grid-cols-3 gap-4 max-w-lg">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-deep-charcoal">5.0 ★</span>
                <span className="text-[11px] text-deep-charcoal/70 uppercase tracking-wider font-medium">
                  Verified Client Love
                </span>
              </div>
              <div className="flex flex-col border-l border-rose-gold/20 pl-4">
                <span className="font-serif text-2xl font-bold text-rose-gold">100%</span>
                <span className="text-[11px] text-deep-charcoal/70 uppercase tracking-wider font-medium">
                  Personalized Care
                </span>
              </div>
              <div className="flex flex-col border-l border-rose-gold/20 pl-4">
                <span className="font-serif text-2xl font-bold text-deep-charcoal">7 Days</span>
                <span className="text-[11px] text-deep-charcoal/70 uppercase tracking-wider font-medium">
                  10 AM – 9 PM Open
                </span>
              </div>
            </div>

          </div>

          {/* Right Image Composition (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Rose Gold Frame */}
              <div className="absolute -inset-4 rounded-3xl border border-rose-gold/30 -rotate-2 pointer-events-none" />
              <div className="absolute -inset-2 rounded-3xl border border-champagne-gold/40 rotate-1 pointer-events-none" />

              {/* Main Salon Image Card with Authentic Salon Interior */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-rose-gold/20 aspect-[4/5] group">
                <img
                  src="/images/salon-interior.jpg"
                  alt="SALON 59 Interior - Luxury Styling Studio in Uttam Nagar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Nude Pink & Rose Gold Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-transparent to-nude-pink/10 pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-warm-ivory/95 backdrop-blur-md p-4 rounded-xl border border-rose-gold/30 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-soft-blush flex items-center justify-center p-1 border border-rose-gold/40 shrink-0">
                      <img
                        src="/images/salon59-logo.png"
                        alt="SALON 59 Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-bold text-deep-charcoal truncate">
                        SALON 59 Sanctuary
                      </h4>
                      <p className="text-[11px] text-rose-gold font-medium truncate">
                        Arya Samaj Rd, Uttam Nagar, New Delhi
                      </p>
                    </div>
                    <span className="inline-flex items-center text-[10px] font-semibold text-rose-gold-dark bg-nude-pink/40 px-2 py-1 rounded-full uppercase tracking-wider">
                      Premium
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Badge: Signature Balayage Transformation */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center space-x-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-rose-gold/30 shadow-xl max-w-xs animate-bounce-slow">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-rose-gold/20">
                  <img
                    src="/images/hair-balayage-colour.jpg"
                    alt="Signature Balayage Hair Colour at Salon 59"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-serif font-bold text-deep-charcoal">Signature Hair Artistry</p>
                  <p className="text-[10px] text-rose-gold font-medium">Bespoke Colour & Treatments</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
