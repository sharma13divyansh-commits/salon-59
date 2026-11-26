import React from 'react';
import { Heart, Sparkles, Shield, CheckCircle2 } from 'lucide-react';

export default function Inclusivity() {
  return (
    <section className="py-16 bg-gradient-to-b from-warm-ivory via-soft-blush/50 to-warm-ivory relative border-y border-rose-gold/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle Rainbow / Rose-Gold Inclusion Badge */}
        <div className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full bg-white border border-rose-gold/30 shadow-sm mb-6">
          <div className="flex -space-x-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E40303]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8C00]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFED00]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#008026]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#24408E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#732982]" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-deep-charcoal">
            LGBTQ+ Welcoming Space
          </span>
        </div>

        {/* Heading */}
        <h3 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-deep-charcoal mb-4">
          BEAUTY HAS NO BOUNDARIES.
        </h3>

        {/* Statement as requested */}
        <p className="text-base sm:text-lg text-deep-charcoal/85 max-w-2xl mx-auto font-light leading-relaxed">
          At Salon 59, everyone is welcome. We proudly celebrate individuality and provide a respectful, comfortable, and inclusive environment for everyone.
        </p>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider text-deep-charcoal/70 font-medium">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-rose-gold" />
            <span>Inclusive Stylists</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-rose-gold" />
            <span>Respect & Dignity First</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-rose-gold" />
            <span>Safe & Welcoming Atmosphere</span>
          </div>
        </div>

      </div>
    </section>
  );
}
