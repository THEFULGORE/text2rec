/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFECD1',
        'light-red': '#FF3E3E'
      },
      boxShadow: {
        'custom': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}
