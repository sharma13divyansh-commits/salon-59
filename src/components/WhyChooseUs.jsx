import React from 'react';
import { Award, Users, Wand2, Smile, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Professional Expertise",
      description: "Personalized services delivered with care and attention to detail.",
      badge: "Mastery"
    },
    {
      icon: Users,
      title: "Friendly Staff",
      description: "A welcoming team committed to making every customer feel comfortable.",
      badge: "Hospitality"
    },
    {
      icon: Wand2,
      title: "Personalized Styling",
      description: "Hair and beauty recommendations based on your preferences and desired look.",
      badge: "Bespoke"
    },
    {
      icon: Smile,
      title: "Customer Satisfaction",
      description: "Dedicated to providing a positive and satisfying salon experience.",
      badge: "Care"
    }
  ];

  return (
    <section className="py-24 bg-soft-blush/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-nude-pink/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-champagne-gold/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-warm-ivory border border-rose-gold/30 text-rose-gold shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">
              The Standard of Excellence
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-deep-charcoal">
            THE SALON 59 EXPERIENCE
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto" />
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-warm-ivory rounded-2xl p-8 border border-rose-gold/25 shadow-sm hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Subtle top indicator */}
                <div className="absolute top-4 right-5 text-[10px] uppercase tracking-[0.2em] font-medium text-rose-gold/70 group-hover:text-rose-gold transition-colors">
                  0{idx + 1}
                </div>

                <div className="space-y-5">
                  {/* Minimal Line Icon in Rose Gold Circle */}
                  <div className="w-14 h-14 rounded-2xl bg-soft-blush border border-rose-gold/30 flex items-center justify-center text-rose-gold group-hover:bg-gradient-to-tr group-hover:from-rose-gold group-hover:to-rose-gold-light group-hover:text-white transition-all duration-500 shadow-sm">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-deep-charcoal group-hover:text-rose-gold transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-deep-charcoal/75 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Bottom luxury accent line */}
                <div className="pt-6">
                  <div className="w-8 h-0.5 bg-rose-gold/30 group-hover:w-full group-hover:bg-rose-gold transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
