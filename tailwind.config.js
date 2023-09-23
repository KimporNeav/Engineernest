module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // You can add custom sizes to the width and height as needed.
      width: {
        logo: "50px",
      },
      height: {
        logo: "50px",
      },
      fontFamily: {
        'Montserrat': ["Montserrat", "sans-serif"],
        "Montserrat-italic": ["Montserrat Italic", "serif"],
        "Montserrat-bold": ["Montserrat Bold", "serif"],

        Mont : ['Montserrat', 'sans-serif'],
        Mont1: ['Poppins', 'sans-serif'],
        Rob: ['Roboto', 'sans-serif'],

      },
      colors: {
        fontcol: "#0055B0",
        bgcolor: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
