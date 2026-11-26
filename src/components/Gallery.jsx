import React, { useState } from 'react';
import LightboxModal from './LightboxModal';
import { Eye, Sparkles, Camera } from 'lucide-react';

export default function Gallery() {
  // Curated list prioritizing actual Salon 59 photographs provided by user
  const galleryItems = [
    {
      id: 1,
      src: "/images/salon-interior.jpg",
      title: "Luxury Styling Floor & Wash Stations",
      category: "Salon 59 Interior Sanctuary",
      span: "lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto"
    },
    {
      id: 2,
      src: "/images/bride-salon59-wall.jpg",
      title: "Bridal Splendor in front of Signature Wall",
      category: "Signature Wall & Bridal Artistry",
      span: "lg:col-span-1 lg:row-span-2 aspect-[3/4]"
    },
    {
      id: 3,
      src: "/images/bridal-hair-styling.jpg",
      title: "Couture Hair Accessory & Romantic Curls",
      category: "Artisan Hair Styling",
      span: "lg:col-span-1 lg:row-span-1 aspect-square"
    },
    {
      id: 4,
      src: "/images/hair-balayage-colour.jpg",
      title: "Multi-tonal Honey Balayage Waves",
      category: "Master Colour Transformation",
      span: "lg:col-span-1 lg:row-span-1 aspect-square"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      title: "Relaxing Hair Spa Therapy",
      category: "Deep Nourishing Rituals",
      span: "lg:col-span-1 lg:row-span-1 aspect-square"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      title: "Bespoke Beard Sculpting",
      category: "Men's Precision Grooming",
      span: "lg:col-span-1 lg:row-span-1 aspect-square"
    }
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openLightbox = (index) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-soft-blush/40 relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-nude-pink/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-warm-ivory border border-rose-gold/30 text-rose-gold shadow-sm">
            <Camera className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">
              Editorial Showcase
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-deep-charcoal">
            THE ART OF BEAUTY
          </h2>

          <p className="text-base sm:text-lg text-deep-charcoal/75 font-light tracking-wide">
            A visual journey celebrating radiance, authentic artistry, and timeless elegance.
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto" />
        </div>

        {/* Editorial Masonry / Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-rose-gold/25 shadow-md hover:shadow-luxury transition-all duration-500 bg-white ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />

              {/* Luxury Nude Pink & Rose Gold Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-deep-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Hover Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-warm-ivory/90 text-rose-gold flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Hover Bottom Text */}
              <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-champagne-gold">
                  {item.category}
                </p>
                <h4 className="font-serif text-lg font-bold tracking-wide mt-1">
                  {item.title}
                </h4>
              </div>

              {/* Subtle Permanent Badge on Provided Photos */}
              {item.id <= 4 && (
                <div className="absolute top-3 right-3 group-hover:opacity-0 transition-opacity">
                  <span className="px-2.5 py-1 rounded-full text-[9px] uppercase tracking-wider font-semibold bg-deep-charcoal/60 backdrop-blur-sm text-warm-ivory border border-white/20">
                    Salon 59 Official
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-deep-charcoal/60 font-medium">
            Click on any image to view in high-resolution editorial lightbox
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={activeImageIndex !== null}
        image={activeImageIndex !== null ? galleryItems[activeImageIndex] : null}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
}
