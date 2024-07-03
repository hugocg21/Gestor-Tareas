/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#63b3ed',
          DEFAULT: '#4299e1',
          dark: '#3182ce',
        },
        secondary: {
          light: '#faf089',
          DEFAULT: '#f6e05e',
          dark: '#ecc94b',
        },
        accent: {
          light: '#9f7aea',
          DEFAULT: '#805ad5',
          dark: '#6b46c1',
        },
        neutral: {
          light: '#edf2f7',
          DEFAULT: '#e2e8f0',
          dark: '#cbd5e0',
        },
        danger: {
          light: '#feb2b2',
          DEFAULT: '#fc8181',
          dark: '#f56565',
        }
      },
    },
  },
  plugins: [],
}
