/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'BackgroundColor': '#000000',
        'Purpple': '#392d69',
        'LightPurpple': '#b57bee',
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
    },

  },
}
plugins: []