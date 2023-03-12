/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "lightRed": "hsl(0, 100%, 67%)",
        "lightRedO": "hsla(0, 100%, 67%, 0.1)",
        "orangeYellow": "hsl(39, 100%, 56%)",
        "orangeYellowO": "hsla(39, 100%, 56%, 0.1)",
        "greenTeal": "hsl(166, 100%, 37%)",
        "greenTealO": "hsla(166, 100%, 37%, 0.1)",
        "cobaltBlue": "hsl(234, 85%, 45%)",
        "cobaltBlueO": "hsla(234, 85%, 45%, 0.1)",
        "lightSlateB": "hsl(252, 100%, 67%)",
        "lightSlateBO": "hsla(252, 100%, 67%, 0.1)",
        "lightRoyalB": "hsl(241, 81%, 54%)",
        "violetBlueC": "hsla(256, 72%, 46%, 1)",
        "persianBlueC": "hsla(241, 72%, 46%, 0)",
        "paleBlue": "hsl(221, 100%, 96%)",
        "lightLavender": "hsl(241, 100%, 89%)",
        "darkGreyB": "hsl(224, 30%, 27%)"
      }
    },
  },
  plugins: [],
}
