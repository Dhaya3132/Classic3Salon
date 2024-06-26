/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Green': '#5A4FCF',
        'Grey': '#f5f5f5',
        'DullLight':'#003973',
        'Dull':'#e5e5be',
      },
      fontFamily: {
        'DancingScript': ['Dancing Script'],
        'Poppins': ['Poppins'],
        'PlayFair': ['PlayFair']
      },
      keyframes: {
        'move': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'Move': 'move 20s linear infinite',
      },
      screens: {
        'Laptop-M': { 'max': '1025px' },
        'Tabelt': { 'max': '769px' },
        'Mobile-L': { 'max': '426px' },
        'Mobile-M': { 'max': '376px' },
        'Mobile-S': { 'max': '321px' },
      }
    },
  },
}
plugins: []