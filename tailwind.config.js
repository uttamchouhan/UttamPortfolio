const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure this path is correct
  theme: {
    extend: {
      fontFamily: {
        headingFont: ["Plaster", "serif"],
        textFont: ["PT Sans", "sans-serif"],
      },
      animation: {
        autoRun: 'autoRun 10s linear infinite',
        reversePlay: 'reversePlay 10s linear infinite',
      },
      keyframes: {
        autoRun: {
          from: { left: '100%' },
          to: { left: 'calc(var(--width) * -1)' },
        },
        reversePlay: {
          from: { left: 'calc(var(--width) * -1)' },
          to: { left: '100%' },
        },
      },
      maskImage: {
        gradient: 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.mask-image-gradient': {
          '-webkit-mask-image': 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
          'mask-image': 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
        },
      });
    }),
  ],
};
