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

    },

  },
}
plugins: []