/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Google Sans Display', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        blue: {
          100: '#EBF0FE',
          200: '#D2E3FC',
          300: '#498AF4',
          400: '#1A73E8',
          500: '#1967D2',
          600: '#2160BF',
          700: '#174EA6',
        },
        red: {
          100: '#FCE8E6',
          200: '#FAD2CF',
          300: '#EB4A3D',
          400: '#D93025',
          500: '#C5221F',
          600: '#B61D1B',
          700: '#A50E0E',
        },
        yellow: {
          100: '#FEF7E0',
          200: '#FEEFC3',
          300: '#FBBF0E',
          400: '#F9AB00',
          500: '#F29900',
          600: '#EB8B0A',
          700: '#E37400',
        },
        green: {
          100: '#E6F4EA',
          200: '#CEEAD6',
          300: '#4FB36A',
          400: '#1E8E3E',
          500: '#188038',
          600: '#1C783B',
          700: '#0D652D',
        },
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
        },
      },
    },
  },
  plugins: [],
};
