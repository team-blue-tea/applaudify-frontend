import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        cream: '#f1ebe2',
        sunlight: '#fbe880',
        lime: '#e4f285',
        sakura: '#ffaec8',
        sky: '#a7d0fb',
      },
      backgroundImage: {
        ombre:
          'linear-gradient(91deg, #FBE880 7.04%, #E4F285 35.37%, #FFAEC8 65.05%, #A7D0FB 93.38%)',
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
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
};
export default config;
