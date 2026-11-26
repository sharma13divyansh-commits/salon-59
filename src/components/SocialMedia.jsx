import React from 'react';
import { ExternalLink, Sparkles, Heart } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './BrandIcons';

export default function SocialMedia() {
  return (
    <section className="py-20 bg-warm-ivory relative overflow-hidden border-t border-rose-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-soft-blush border border-rose-gold/30 text-rose-gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">
              Digital Community
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-deep-charcoal">
            FOLLOW OUR BEAUTY JOURNEY
          </h2>

          <p className="text-sm sm:text-base text-deep-charcoal/70 font-light tracking-wide">
            Behind the chair, client reveals, hair care wisdom, and styling inspiration.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Instagram Card */}
          <div className="group relative bg-white rounded-3xl p-8 border border-rose-gold/30 shadow-md hover:shadow-luxury transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md">
                  <InstagramIcon className="w-7 h-7" />
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-rose-gold bg-soft-blush px-3 py-1 rounded-full border border-rose-gold/20">
                  @_salon59_
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-deep-charcoal group-hover:text-rose-gold transition-colors">
                  Instagram Stories & Reels
                </h3>
                <p className="text-sm text-deep-charcoal/75 mt-2 font-light leading-relaxed">
                  Catch our latest hair colour transformations, trending balayage work, styling tips, and everyday salon vibe directly from Uttam Nagar.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-rose-gold/15">
              <a
                href="https://www.instagram.com/_salon59_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-white bg-gradient-to-r from-[#bc1888] via-[#dc2743] to-[#f09433] hover:brightness-110 transition-all shadow-md group-hover:shadow-lg"
              >
                <span>Follow Us on Instagram</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* YouTube Card */}
          <div className="group relative bg-white rounded-3xl p-8 border border-rose-gold/30 shadow-md hover:shadow-luxury transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#FF0000] flex items-center justify-center text-white shadow-md">
                  <YoutubeIcon className="w-7 h-7" />
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-rose-gold bg-soft-blush px-3 py-1 rounded-full border border-rose-gold/20">
                  @salon59
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-deep-charcoal group-hover:text-rose-gold transition-colors">
                  YouTube Channel
                </h3>
                <p className="text-sm text-deep-charcoal/75 mt-2 font-light leading-relaxed">
                  Watch full styling sessions, hair smoothening demonstrations, beard sculpting guides, and client before-and-after spotlights.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-rose-gold/15">
              <a
                href="https://www.youtube.com/@salon59"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-white bg-[#FF0000] hover:bg-[#CC0000] transition-all shadow-md group-hover:shadow-lg"
              >
                <span>Subscribe on YouTube</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
