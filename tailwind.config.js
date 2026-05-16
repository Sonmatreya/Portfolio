/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      blur: {
        '2xl': '40px',
        'xl': '20px',
      },
      colors: {
        red: {
          800: '#991b1b',
        },
        yellow: {
          500: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
}
