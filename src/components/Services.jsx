import React, { useState } from 'react';
import { services } from '../data/services';
import { MessageCircle, Sparkles, ArrowUpRight, Phone } from 'lucide-react';

export default function Services({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices = activeFilter === 'all' 
    ? services 
    : activeFilter === 'hair'
      ? services.filter(s => s.name.toLowerCase().includes('hair'))
      : services.filter(s => s.name.toLowerCase().includes('beard'));

  const handleEnquireWhatsApp = (serviceName) => {
    const message = encodeURIComponent(
      `Hello Salon 59! I would like to enquire about your ${serviceName} service and discuss pricing & consultation.`
    );
    window.open(`https://wa.me/918796317438?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-warm-ivory relative">
      {/* Decorative Rose Gold Glows */}
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-nude-pink/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-champagne-gold/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-soft-blush border border-rose-gold/30 text-rose-gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">
              Bespoke Hair & Grooming
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-deep-charcoal">
            INDULGE IN THE ART OF HAIR CARE
          </h2>

          <p className="text-base sm:text-lg text-deep-charcoal/75 font-light tracking-wide">
            Professional care. Beautiful results. An experience worth remembering.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex justify-center space-x-3">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-rose-gold text-white shadow-md'
                  : 'bg-soft-blush/80 text-deep-charcoal hover:bg-nude-pink/40 border border-rose-gold/20'
              }`}
            >
              All Services (8)
            </button>
            <button
              onClick={() => setActiveFilter('hair')}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                activeFilter === 'hair'
                  ? 'bg-rose-gold text-white shadow-md'
                  : 'bg-soft-blush/80 text-deep-charcoal hover:bg-nude-pink/40 border border-rose-gold/20'
              }`}
            >
              Hair Rituals (6)
            </button>
            <button
              onClick={() => setActiveFilter('beard')}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                activeFilter === 'beard'
                  ? 'bg-rose-gold text-white shadow-md'
                  : 'bg-soft-blush/80 text-deep-charcoal hover:bg-nude-pink/40 border border-rose-gold/20'
              }`}
            >
              Beard & Grooming (2)
            </button>
          </div>
        </div>

        {/* 8 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-rose-gold/25 shadow-md hover:shadow-luxury transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Service Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-soft-blush">
                  <img
                    src={service.image}
                    alt={`${service.name} at Salon 59`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/70 via-deep-charcoal/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Service Badge / Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-warm-ivory/90 text-deep-charcoal backdrop-blur-sm border border-rose-gold/30">
                      {service.tag}
                    </span>
                  </div>

                  {/* Pricing Label - Strictly Contact Us For Pricing */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white">
                    <span className="text-xs font-medium tracking-wide bg-deep-charcoal/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
                      {service.pricing}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-rose-gold">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-deep-charcoal group-hover:text-rose-gold transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-deep-charcoal/75 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom Actions: Enquire Now via WhatsApp & Quick Book */}
              <div className="px-6 pb-6 pt-2 border-t border-rose-gold/10 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleEnquireWhatsApp(service.name)}
                  className="w-full inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-[11px] uppercase tracking-wider font-semibold text-deep-charcoal bg-soft-blush hover:bg-nude-pink/60 border border-rose-gold/30 transition-all duration-300"
                  title="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-rose-gold" />
                  <span>Enquire</span>
                </button>

                <a
                  href="#booking"
                  onClick={() => onSelectService && onSelectService(service.name)}
                  className="w-full inline-flex items-center justify-center space-x-1 py-2.5 px-3 rounded-xl text-[11px] uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:brightness-105 transition-all shadow-sm"
                  title="Book Service Appointment"
                >
                  <span>Book</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Policy Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-soft-blush/60 border border-rose-gold/25 max-w-3xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-deep-charcoal/80 font-light leading-relaxed">
            <strong className="font-semibold text-deep-charcoal">Personalized Consultations:</strong> Every service is customized to your hair texture, desired tone, and personal aesthetic. Please contact us or visit Salon 59 in Uttam Nagar for tailored recommendations and transparent pricing quotes.
          </p>
        </div>

      </div>
    </section>
  );
}
