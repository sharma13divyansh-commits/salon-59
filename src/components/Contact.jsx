import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Calendar, Navigation, Sparkles } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './BrandIcons';

export default function Contact() {
  const openingHours = [
    { day: "Monday", hours: "10:00 AM – 9:00 PM" },
    { day: "Tuesday", hours: "10:00 AM – 9:00 PM" },
    { day: "Wednesday", hours: "10:00 AM – 9:00 PM" },
    { day: "Thursday", hours: "10:00 AM – 9:00 PM" },
    { day: "Friday", hours: "10:00 AM – 9:00 PM" },
    { day: "Saturday", hours: "10:00 AM – 9:00 PM" },
    { day: "Sunday", hours: "10:00 AM – 9:00 PM" },
  ];

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5028045934526!2d77.05041497619213!3d28.62080358488737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d805f4bf0b%3A0xe7819ad549cf0b36!2sArya%20Samaj%20Rd%2C%20Block%20C%2C%20Uttam%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20110059!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-24 bg-warm-ivory relative">
      {/* Ambient background accents */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-nude-pink/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-champagne-gold/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-soft-blush border border-rose-gold/30 text-rose-gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">
              Visit Our Studio
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-deep-charcoal">
            LET'S MAKE YOU LOOK BEAUTIFUL
          </h2>

          <p className="text-base sm:text-lg text-deep-charcoal/75 font-light tracking-wide">
            Conveniently situated on Arya Samaj Road in Uttam Nagar, New Delhi.
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto" />
        </div>

        {/* Content Grid: Contact Details & Opening Hours vs Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Premium Contact Card & Hours (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Business Contact Cards */}
            <div className="bg-white rounded-3xl p-8 border border-rose-gold/30 shadow-md space-y-6">
              
              <div className="flex items-center space-x-4 border-b border-rose-gold/15 pb-6">
                <div className="w-12 h-12 rounded-2xl bg-soft-blush border border-rose-gold/40 flex items-center justify-center p-1.5 shrink-0">
                  <img
                    src="/images/salon59-logo.png"
                    alt="SALON 59"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-deep-charcoal">
                    SALON 59
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-rose-gold font-semibold">
                    Premier Hair & Beauty Salon
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Address Card */}
                <div className="p-4 rounded-2xl bg-warm-ivory border border-rose-gold/20 space-y-2">
                  <div className="flex items-center space-x-2 text-rose-gold">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="text-xs uppercase tracking-wider font-semibold">Studio Location</span>
                  </div>
                  <p className="text-xs sm:text-sm text-deep-charcoal/80 leading-relaxed font-light">
                    E-10, Arya Samaj Rd, Block C, Uttam Nagar, New Delhi, Delhi, 110059, India.
                  </p>
                  <a
                    href="https://maps.google.com/?q=E-10,+Arya+Samaj+Rd,+Block+C,+Uttam+Nagar,+New+Delhi,+Delhi+110059"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-rose-gold hover:text-rose-gold-dark font-medium pt-1"
                  >
                    <span>Get Driving Directions</span>
                    <Navigation className="w-3 h-3 ml-0.5" />
                  </a>
                </div>

                {/* Direct Telephone */}
                <div className="p-4 rounded-2xl bg-warm-ivory border border-rose-gold/20 space-y-2">
                  <div className="flex items-center space-x-2 text-rose-gold">
                    <Phone className="w-4 h-4 shrink-0" />
                    <span className="text-xs uppercase tracking-wider font-semibold">Call Directly</span>
                  </div>
                  <p className="text-lg font-serif font-bold text-deep-charcoal">
                    <a href="tel:8796317438" className="hover:text-rose-gold transition-colors">
                      8796317438
                    </a>
                  </p>
                  <p className="text-[11px] text-deep-charcoal/60">
                    Appointments & Inquiries
                  </p>
                </div>

              </div>

              {/* Action Buttons: WhatsApp & Direct Call */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/918796317438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="tel:8796317438"
                  className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-deep-charcoal bg-soft-blush border border-rose-gold/30 hover:bg-nude-pink/50 transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-rose-gold" />
                  <span>Call 8796317438</span>
                </a>
              </div>

            </div>

            {/* Opening Hours Card */}
            <div className="bg-white rounded-3xl p-8 border border-rose-gold/30 shadow-md space-y-5">
              <div className="flex items-center justify-between border-b border-rose-gold/15 pb-4">
                <div className="flex items-center space-x-3 text-deep-charcoal">
                  <Clock className="w-5 h-5 text-rose-gold" />
                  <h4 className="font-serif text-xl font-bold">Opening Hours</h4>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                  Open Daily
                </span>
              </div>

              <div className="divide-y divide-rose-gold/10">
                {openingHours.map((item) => (
                  <div key={item.day} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-medium text-deep-charcoal">{item.day}</span>
                    <span className="text-rose-gold-dark font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps & Studio Exterior (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive Map Box */}
            <div className="relative bg-white rounded-3xl p-2 border border-rose-gold/30 shadow-luxury overflow-hidden">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-soft-blush">
                <iframe
                  title="Salon 59 Location Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 text-center">
                <p className="text-xs text-deep-charcoal/80 font-medium">
                  E-10, Arya Samaj Rd, Block C, Uttam Nagar, New Delhi
                </p>
                <a
                  href="https://maps.google.com/?q=E-10,+Arya+Samaj+Rd,+Block+C,+Uttam+Nagar,+New+Delhi,+Delhi+110059"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-rose-gold hover:text-rose-gold-dark font-semibold mt-2 uppercase tracking-wider"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps Application</span>
                </a>
              </div>
            </div>

            {/* Quick Connect & Social Links */}
            <div className="bg-soft-blush/60 rounded-3xl p-6 border border-rose-gold/25 flex items-center justify-between">
              <div>
                <p className="font-serif text-sm font-bold text-deep-charcoal">Connect Digitally</p>
                <p className="text-xs text-deep-charcoal/70">Instagram & YouTube</p>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com/_salon59_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-rose-gold/30 flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.youtube.com/@salon59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-rose-gold/30 flex items-center justify-center text-rose-gold hover:bg-[#FF0000] hover:text-white transition-all shadow-sm"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
