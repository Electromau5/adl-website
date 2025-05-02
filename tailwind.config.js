const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#1976D2',
      },
      fontFamily: {
        satoshi: ['Satoshi', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
