/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        customRed : '#D01C28',

      },
      fontSize: {
        'custom-108': '108px',
      },
      lineHeight:{
        'custom-102':'102px',
      },
    },
  },
  plugins: [],
}

