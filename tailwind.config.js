/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"var(--primary)",
        secondary:"var(--secondary)",
        third:"var(--third)",
        last:"var(--last)",
      },
      gridTemplateColumns:{
        header: "1fr 2fr",
        sixtyForty:"2fr 1fr"
      },
      backgroundImage:{
        heroBg: "url(/src/images/hero-bg.webp)"
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

