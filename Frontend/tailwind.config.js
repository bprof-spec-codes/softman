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
          fontSize: '1.22rem',
          lineHeight: '1.9rem', //30px
          color: '#FFFFFF',
          cursor: 'pointer'
        },
        '.text-title': {
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '2.8rem',
          lineHeight: '4rem',
          color: '#FFFFFF',
          textAlign: 'center'
        },
        '.text-subtitle': {
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '1.1rem',
          lineHeight: '2.5rem',
          color: '#FFFFFF',
          textAlign: 'center'
        }
      })
    })
  ],
  corePlugins: {
    preflight: true
  }
}
