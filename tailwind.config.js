/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [

    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    
  ],
  theme: {
    extend: {
        fontFamily: {
        didact: ['Didact Gothic', "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        "light-salmon-pink": "#FF9999",
        white: "#FFF5F5",
        black: "#1A0F0F",
        gray: "#BBBBBB",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), 
    require('flowbite/plugin'),
    ],
   
}
