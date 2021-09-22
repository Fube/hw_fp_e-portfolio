module.exports = {
  theme: {
    colors: {
      // primary: '#212429',
      // secondary: '#133727',
      ternary: '#ab328f',
      quaternary: '#3da175',
      // Blue-Salmon
      quinary: '#4FB0AC',
      senary: '#B04F53',
      // Green-Pink
      septenary: '#22DD67',
      octonary: '#DD2298',
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
