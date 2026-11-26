/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nude-pink': '#E8C8C5',
        'soft-blush': '#F7EAE8',
        'rose-gold': '#B76E79',
        'rose-gold-light': '#D49A9F',
        'rose-gold-dark': '#964F5A',
        'champagne-gold': '#E8D5B7',
        'warm-ivory': '#FFF9F5',
        'deep-charcoal': '#292323',
        'charcoal-light': '#3A3333',
        'charcoal-subtle': '#574D4D',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', '"Poppins"', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(183, 110, 121, 0.15)',
        'luxury-hover': '0 25px 50px -12px rgba(183, 110, 121, 0.25)',
        'glow': '0 0 25px rgba(232, 213, 183, 0.35)',
      },
      backgroundImage: {
        'gradient-rose': 'linear-gradient(135deg, #B76E79 0%, #D49A9F 50%, #B76E79 100%)',
        'gradient-gold': 'linear-gradient(135deg, #E8D5B7 0%, #F5E8D2 50%, #E8D5B7 100%)',
        'gradient-luxury': 'linear-gradient(180deg, rgba(255, 249, 245, 0.95) 0%, rgba(247, 234, 232, 0.95) 100%)',
      }
    },
  },
  plugins: [],
}
