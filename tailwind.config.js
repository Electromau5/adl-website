const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans], // <- THIS MUST BE EXACT
      },
    },
  },
  plugins: [],
}
