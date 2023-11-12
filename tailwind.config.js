/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fontFamily:{
          gothicAi:["Gothic+A1","sans-serif"]
        }
      }
    },
  },
  plugins: [],
}