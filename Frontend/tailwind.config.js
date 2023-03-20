const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents, _ }) {
      addComponents({
        '.text-link': {
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '25px',
          lineHeight: '30px',
          color: '#FFFFFF',
          cursor: 'pointer'
      }
      })
    })
  ],
  corePlugins: {
    preflight: true
  }
}
