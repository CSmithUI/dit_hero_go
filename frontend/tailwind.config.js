/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#ffdd00',
        textNormal: '#eaeef1',
        heroBlack: {
          100: '#',
          200: '#d0d0f6',
          300: '#aaaacd',
          400: '#8888a3',
          500: '#6f6f84',
          600: '#454552',
          700: '#222228',
          800: '#1a1a20',
          900: '#0d0d10',
        },
      },
    },
  },
  plugins: [],
};
