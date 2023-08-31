module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utilities/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      tourney: ["Tourney", "Roboto", "sans-serif"],
      roboto: ["Roboto", "Montserrat", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      lovelo: ['Lovelo', 'sans-serif']
    },
    extend: {
      minWidth: {
        28: "6rem",
      },
      maxWidth: {
        48: "12rem"
      },
      blur: {
        xs: "2px",
      },
      spacing: {
        28: "6rem",
        128: "32rem",
        160: "40rem",
      },
      colors: {
        "theme-purp": "#f16087",
        "theme-grey": "#474747",
        "theme-orange": "#fade99",//
        "theme-orange-dark": "#edae49",//
        "theme-red": "#356790",
        "theme-red-dark": "#003054", // 
        "theme-white": "#ffffff",
        "theme-teal": "#f16087",
        "theme-yellow": "#fade99",//
        // b0413e red
        primary: {
          brown: "#473335"
        }
      },
      screens: {
        "3xl": "1720px",
      },
      backgroundImage: {
        'red-line': "url('/assets/background/redline.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
