/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#ffdd00',
        accentDark: '#948000',
        textNormal: '#eaeef1',
        heroBlack: {
          50: '#f2f2f8',
          100: '#d9d9f0',
          200: '#cdcdee',
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
  plugins: [require('tailwind-scrollbar')],
};
