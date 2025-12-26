/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.3rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
    extend: {
      colors: {
        primaryColor: '#4640DE',
        secondryColor: '#26A4FF',
        textGrayColor: '#515B6F',
        textLightDarkColor: '#202430',
        textDarkColor: '#25324B',
        cardTextGrayColor: '#7C8493',
      },
      fontFamily: {
        redHatDisplay: ['Red Hat Display', 'sans-serif'],
        clashDisplay: ['Clash Display', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
};
