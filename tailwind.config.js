const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      // primary: '#212429',
      // secondary: '#133727',
      //Orange-Yellow
      ternary: '#ffb86c',
      quaternary: '#f1fa8c',
      // Blue-Salmon
      quinary: '#8be9fd',
      senary: '#bd93f9',
      // Green-Pink
      septenary: '#50fa7b',
      octonary: '#ff79c6',
    },
    fontFamily: {
      body: ['JetBrains Mono', 'monospace'],
      sub: ['Montserrat', 'sans-serif'],
      content: ['Nunito', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      textColor: ['even', 'odd'],
    },
  },
  plugins: [require('daisyui')],
}
