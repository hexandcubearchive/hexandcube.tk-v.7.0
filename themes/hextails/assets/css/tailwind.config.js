const colors = require('tailwindcss/colors');

module.exports = {
    purge: {
      mode: "all",
      enabled: true,
      content: [
          './**/*.html',
          './**/*.md'
      ]
  },
  darkMode: 'class',
  purge: [],
  theme: {
    extend: {
      colors: {
        warmGray: colors.warmGray,
        gray: colors.coolGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchia: colors.fuchia,
        pink: colors.pink,
        rose: colors.rose
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite'
      },
      spacing: {
        '1px': '1px',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    },
    fontFamily: {
      sans: "Inter",
      mono: "Courier Prime"
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-debug-screens')
  ],
}