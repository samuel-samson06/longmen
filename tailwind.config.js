/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      maxWidth:{
        '430':'430px',
        '400':'400px'
      },
      fontFamily:{
        fontFamily:{
          gothicAi:["Gothic+A1","sans-serif"]
        }
      }
    },
  },
  plugins: [],
}