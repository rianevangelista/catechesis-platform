/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //tailwind será aplicado em todos os arquivos que tiverem a extensão .tsx 
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/images/blur-background.png)',
        'img_bg_hero': 'url(/src/assets/images/bg-hero.png)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        white: {
          200: '#F9F9F9',
        },
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        }
      }
    },
  },
  plugins: [],
}

