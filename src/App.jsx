import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import SocialMedia from './components/SocialMedia';
import Inclusivity from './components/Inclusivity';
import BookingSection from './components/BookingSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('Hair Colour');

  const handleSelectService = (serviceName) => {
    setSelectedServiceForBooking(serviceName);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-warm-ivory text-deep-charcoal font-sans selection:bg-nude-pink selection:text-deep-charcoal">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={() => handleSelectService('Hair Colour')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Salon 59 Section */}
        <About />

        {/* Our Services Section (8 Categories) */}
        <Services onSelectService={handleSelectService} />

        {/* Why Choose Salon 59 (The Salon 59 Experience) */}
        <WhyChooseUs />

        {/* Customer Reviews Section */}
        <Reviews />

        {/* Photo Gallery (Masonry + Lightbox) */}
        <Gallery />

        {/* LGBTQ+ Friendly Statement */}
        <Inclusivity />

        {/* Appointment Booking Section */}
        <BookingSection
          selectedService={selectedServiceForBooking}
          onServiceChange={setSelectedServiceForBooking}
        />

        {/* Instagram & YouTube Section */}
        <SocialMedia />

        {/* Contact & Location Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/918796317438?text=Hello%20Salon%2059!%20I%20would%20like%20to%20enquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-3 bg-[#25D366] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:bg-[#20ba59] hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 focus:outline-none"
          title="Chat directly on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="hidden sm:inline-block text-xs uppercase tracking-wider font-semibold">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
