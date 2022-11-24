/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctotheme: {
          primary: '#F49300',
          secondary: '#FBCC85',
          accent: '#3A4256',
          neutral: "#3D4451",
          "base-100": "#FFFFFF"
        }
      }
    ]
  },

  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
}

