/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Tells Tailwind to scan these files for class names
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
