const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'fuchsia': colors.fuchsia
      }
    },
  },
  variants: {
    extend: {
      overflow: ['hover'],
      translate: ['group-hover'],
      ringOpacity: ['hover', 'active']
    },
  },
  plugins: [require("windstrap")],
}