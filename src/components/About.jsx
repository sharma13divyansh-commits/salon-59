import React from 'react';
import { Sparkles, HeartHandshake, Scissors, ArrowDown } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-soft-blush/40 relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-nude-pink/30 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-champagne-gold/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle Brand Statement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-3 px-5 py-1.5 rounded-full bg-warm-ivory border border-rose-gold/30 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold"></span>
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-rose-gold">
              STYLE. CONFIDENCE. ELEGANCE.
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Composition with Real Salon 59 Bride Wall Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              
              {/* Luxury Frame Border */}
              <div className="absolute -inset-3 border border-rose-gold/40 rounded-3xl translate-x-3 translate-y-3 pointer-events-none"></div>

              {/* Main Photo: Real client in front of SALON 59 Gold Wall */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-rose-gold/20 aspect-[3/4] group">
                <img
                  src="/images/bride-salon59-wall.jpg"
                  alt="SALON 59 Golden Signature Wall & Bridal Styling"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/70 via-transparent to-transparent pointer-events-none" />

                {/* Photo Caption Badge */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif text-lg font-semibold tracking-wide">
                    The Authentic SALON 59 Experience
                  </p>
                  <p className="text-xs text-nude-pink/90 tracking-wider uppercase font-light">
                    Uttam Nagar, New Delhi
                  </p>
                </div>
              </div>

              {/* Floating Overlap Thumbnail: Delicate Hair Artistry */}
              <div className="absolute -bottom-8 -right-6 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-warm-ivory hidden sm:block group">
                <img
                  src="/images/bridal-hair-styling.jpg"
                  alt="Intricate Hair Styling by Salon 59"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-deep-charcoal/30" />
                <div className="absolute bottom-2 left-2 right-2 p-1.5 bg-warm-ivory/95 rounded-lg text-center">
                  <p className="text-[10px] font-serif font-bold text-deep-charcoal">Artisan Styling</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            <div className="space-y-4">
              {/* Subtle Decorative Rose-Gold Line */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-0.5 bg-gradient-to-r from-rose-gold to-transparent" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-rose-gold">
                  About Our Studio
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-deep-charcoal leading-tight">
                BEAUTY IS AN ART. <br />
                <span className="italic font-normal text-rose-gold">LET US CREATE YOURS.</span>
              </h2>
            </div>

            {/* Description Text exactly as provided */}
            <div className="space-y-5 text-deep-charcoal/85 text-base sm:text-lg font-light leading-relaxed">
              <p>
                Welcome to <strong className="font-medium text-deep-charcoal">Salon 59</strong>, your destination for professional hair styling and beauty services in Uttam Nagar, New Delhi.
              </p>
              <p>
                We believe that every individual deserves to look and feel their best. Our team focuses on personalized attention, professional techniques, and a welcoming atmosphere to make every visit special.
              </p>
              <p>
                Whether you're looking for a fresh new look, beautiful hair colour, or a relaxing hair spa, Salon 59 is here to make your experience memorable.
              </p>
            </div>

            {/* Values Pill Matrix */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-warm-ivory border border-rose-gold/20 shadow-sm flex items-start space-x-3">
                <Scissors className="w-5 h-5 text-rose-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-deep-charcoal">Master Stylists</h4>
                  <p className="text-xs text-deep-charcoal/70 mt-0.5">Precision cuts & colour mastery</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-warm-ivory border border-rose-gold/20 shadow-sm flex items-start space-x-3">
                <HeartHandshake className="w-5 h-5 text-rose-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-deep-charcoal">Personal Care</h4>
                  <p className="text-xs text-deep-charcoal/70 mt-0.5">Customized to your facial features</p>
                </div>
              </div>
            </div>

            {/* Discover More CTA Button */}
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-deep-charcoal bg-warm-ivory border border-rose-gold/40 hover:bg-rose-gold hover:text-white transition-all duration-300 shadow-sm hover:shadow-luxury"
              >
                <span>Discover More</span>
                <ArrowDown className="w-3.5 h-3.5 text-rose-gold group-hover:text-white" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
