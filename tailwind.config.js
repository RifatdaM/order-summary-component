module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          "PaleBlue": "hsl(225, 100%, 94%)",
          "BrightBlue": "hsl(245, 75%, 52%)",
        },
        neutral:{
          "VeryPaleBlue": "hsl(225, 100%, 98%)",
          "DesaturatedBlue": "hsl(224, 23%, 55%)",
          "DarkBlue": "hsl(223, 47%, 23%)",
        },
      },
      fontFamily:{
        red:"'Red Hat Display', sans-serif;"
      }
    },
  },
  plugins: [],
}
