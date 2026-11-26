import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-warm-ivory/95 backdrop-blur-md shadow-sm border-b border-rose-gold/20 py-3'
          : 'bg-gradient-to-b from-warm-ivory/90 via-warm-ivory/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="SALON 59 Home"
          >
            <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-rose-gold via-champagne-gold to-nude-pink shadow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-1">
                <img
                  src="/images/salon59-logo.png"
                  alt="SALON 59 Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-deep-charcoal uppercase group-hover:text-rose-gold transition-colors">
                SALON 59
              </span>
              <span className="text-[9px] uppercase tracking-[0.28em] text-rose-gold font-medium -mt-1">
                Luxury Hair & Beauty
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-deep-charcoal/80 hover:text-rose-gold relative py-1 transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-rose-gold to-champagne-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action: Book Appointment CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:8796317438"
              className="flex items-center space-x-2 text-xs uppercase tracking-wider text-deep-charcoal/70 hover:text-rose-gold transition-colors font-medium"
              title="Call Salon 59"
            >
              <Phone className="w-3.5 h-3.5 text-rose-gold" />
              <span>8796317438</span>
            </a>

            <a
              href="#booking"
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold text-white bg-gradient-to-r from-rose-gold via-rose-gold-light to-rose-gold hover:from-rose-gold-dark hover:to-rose-gold transition-all duration-300 shadow-md hover:shadow-luxury hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5 text-warm-ivory" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <a
              href="#booking"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-white bg-rose-gold"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-deep-charcoal hover:text-rose-gold hover:bg-soft-blush/60 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-warm-ivory/98 backdrop-blur-xl border-b border-rose-gold/20 shadow-xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-[0.2em] font-medium text-deep-charcoal/90 hover:text-rose-gold py-1 border-b border-rose-gold/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col space-y-3">
            <a
              href="tel:8796317438"
              className="flex items-center space-x-2 text-xs uppercase tracking-wider text-deep-charcoal/80 font-medium"
            >
              <Phone className="w-4 h-4 text-rose-gold" />
              <span>Direct: 8796317438</span>
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-white bg-gradient-to-r from-rose-gold to-rose-gold-dark shadow-md"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
