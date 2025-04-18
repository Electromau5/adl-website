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
      },
      backdropBlur: {
        'xs': '1px',
      },
    },
  },
  plugins: [],
}
