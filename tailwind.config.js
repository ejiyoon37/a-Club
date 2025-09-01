/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#EDEDED',
          300: '#DFDFDF',
          400: '#AAAAAA',
          500: '#888888',
          600: '#666666',
          700: '#545454',
          800: '#333333',
          900: '#292929',
        },
        blue: {
          50:  '#F4F7FF',
          100: '#E6EDFF',
          200: '#D4E0FF',
          300: '#ACC2FF',
          400: '#7296FC',
          500: '#527BFF',
          600: '#2F58DF',
          700: '#2B46A8',
          800: '#1F3285',
          900: '#182459',
        },
        red: {
          50: '#FFF2F2',
          100: '#FFDFDF',
          200: '#FFB9B9',
          300: '#FF8080',
          400: '#FF5C5C',
        },
        black: '#1B1B1B',
        white: '#FFFFFF',
      },
      fontFamily: {
      sans: ['"Wanted Sans Variable"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
