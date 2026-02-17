/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F07C32',
        primaryHover: '#F59450',
        secondary: '#E8A681',
        pageBg: '#F4E8D8',
        maroon: '#5C1A1A',
        creamCard: '#EFE6DC',
      },
    },
  },
  plugins: [],
};
