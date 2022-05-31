module.exports = {
  content: ['./*.html'],
  theme: {
  // Set screen sizes
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xlg: "1440px"
  },
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)"
      }
    },
  },
  plugins: [],
}
