/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'spaceship': "url('components/LandingPage/spaceship.svg')",
      },
    },
  },
  plugins: [],
}