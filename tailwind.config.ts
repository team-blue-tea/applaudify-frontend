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
        paper: '#f8f6f2',
        stone: '#a0a0a0',
        metal: '#303030',
        charcoal: '#0d0d0d',
      },
    },
  },
  plugins: [],
};
export default config;
