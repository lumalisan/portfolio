import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#363062',
        navy: '#435585',
        blue: '#818FB4',
        beige: '#F5E8C7',
        black: '#292929'
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
        'hero-mobile': 'linear-gradient(137deg, #F5E8C7 60%, #435585 60%)',

        experience: "linear-gradient(135deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.2) 100%),url('/src/assets/backgrounds/white-abstract.png')",
        experienceLight: 'linear-gradient(137deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.9) 60%)',
        tech: "linear-gradient(165deg, rgba(20,20,20,0.8) 100%, rgba(109,109,116,0.8) 100%), url('/src/assets/backgrounds/nairobi.png')",
      }
    },
  },
  plugins: [],
}
export default config
