import React from 'react';
import { MapPin, Phone, MessageCircle, Heart, ArrowUp, Sparkles } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './BrandIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    "Hair Colour",
    "Hair Wash",
    "Hair Spa",
    "Hair Straightening",
    "Hair Smoothening",
    "Hair Extension",
    "Beard Colouring",
    "Beard Styling"
  ];

  return (
    <footer className="bg-deep-charcoal text-warm-ivory relative pt-20 pb-12 overflow-hidden border-t border-rose-gold/30">
      {/* Decorative ambient subtle glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-rose-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">

          {/* Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-rose-gold via-champagne-gold to-nude-pink">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-1">
                  <img
                    src="/images/salon59-logo.png"
                    alt="SALON 59 Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-warm-ivory uppercase">
                  SALON 59
                </span>
                <span className="text-[9px] uppercase tracking-[0.28em] text-rose-gold font-medium -mt-1">
                  Luxury Hair & Beauty
                </span>
              </div>
            </div>

            <p className="text-sm text-nude-pink/80 font-light leading-relaxed max-w-sm">
              Discover the art of beauty and self-expression at Salon 59. Expert hair styling, colour artistry, and bespoke treatments in Uttam Nagar, New Delhi.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/_salon59_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light border border-rose-gold/30 flex items-center justify-center text-nude-pink hover:bg-rose-gold hover:text-white transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@salon59"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light border border-rose-gold/30 flex items-center justify-center text-nude-pink hover:bg-[#FF0000] hover:text-white transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918796317438"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light border border-rose-gold/30 flex items-center justify-center text-nude-pink hover:bg-[#25D366] hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold tracking-wider text-champagne-gold uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-[0.18em] text-nude-pink/70 hover:text-rose-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold tracking-wider text-champagne-gold uppercase">
              Signature Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="text-xs text-nude-pink/70 hover:text-rose-gold transition-colors flex items-center space-x-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-rose-gold"></span>
                    <span>{svc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Salon Details & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold tracking-wider text-champagne-gold uppercase">
              Salon Details
            </h4>

            <div className="space-y-3 text-xs text-nude-pink/80 font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-rose-gold shrink-0 mt-0.5" />
                <span>E-10, Arya Samaj Rd, Block C, Uttam Nagar, New Delhi, 110059</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-rose-gold shrink-0" />
                <a href="tel:8796317438" className="hover:text-champagne-gold font-medium">
                  +91 8796317438
                </a>
              </div>

              <div className="pt-2 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-wider text-champagne-gold font-semibold">
                  Working Hours:
                </p>
                <p className="text-xs text-nude-pink/70 mt-1">
                  Mon – Sun: 10:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-nude-pink/60 space-y-4 sm:space-y-0">
          <p className="tracking-wider">
            © 2026 SALON 59. All Rights Reserved.
          </p>

          <p className="text-[11px] tracking-wide text-nude-pink/70">
            Luxury Feminine Hair & Beauty Destination • Uttam Nagar, New Delhi
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-charcoal-light hover:bg-rose-gold text-nude-pink hover:text-white transition-all border border-rose-gold/20"
            aria-label="Scroll to top"
          >
            <span className="text-[10px] uppercase tracking-widest font-medium">Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
