/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"var(--primary)",
      },
      gridTemplateColumns:{
        header: "1fr 2fr",
      },
    
    },
  },
  darkMode: 'class',
  plugins: [],
}

