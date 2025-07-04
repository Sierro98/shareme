/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#9CEFCD',
        secondary: '#CCFA92',
        tertiary: '#F9F871',
        bgPrimary: '#B5D8DB',
        tBase: '#324B4D',
        dark: {
          bgPrimary: '#324B4D',
          tBase: '#EBFDFE',
        }
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}