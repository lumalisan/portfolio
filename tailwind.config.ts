import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        purple: '#363062',
        navy: '#435585',
        blue: '#818FB4',
        beige: '#F5E8C7',
        black: '#292929',
      },
      screens: {
        xs: '450px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      backgroundImage: {
        hero: 'linear-gradient(135deg, #F5E8C7 60%, #435585 60%)',
        'hero-mobile': 'linear-gradient(150deg, #F5E8C7 65%, #435585 60%)',
      },
    },
  },
  safelist: ['text-purple', 'text-purple/50', 'text-beige/50'],
  plugins: [],
};
export default config;
