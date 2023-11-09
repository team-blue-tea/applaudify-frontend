import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    colors: {
      black: '#000000',
      metal: '#0d0d0d',
      charcoal: '#303030',
      stone: '#626262',
      silver: '#bab8b5',
      paper: '#f8f6f2',
      white: '#ffffff',
    },
    backgroundImage: {
      logo: 'linear-gradient(125deg, #3db3e2 16.46%, #9ED7F3 36.98%, #D7BDF5 51.69%, #CC81F1 60.85%, #E96069 71.67%, #F09674 91.21%)',
    },
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'],
      avenir: ['Avenir Next', 'sans-serif'],
    },
    fontSize: {
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '30': '30px',
      '36': '36px',
      '60': '60px',
    },
    fontWeight: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
    },
  },
  },
  plugins: [],
};

export default config;
