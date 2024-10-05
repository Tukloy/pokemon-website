/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        'radial-custom': 'radial-gradient(circle, rgb(229, 255, 20) 0%, rgba(203, 208, 61, 1) 23%, rgba(7, 124, 255, 1) 73%)',
      },
      colors: {
        'custom-yellow': 'rgb(229, 255, 20)',
        'custom-green': 'rgba(203, 208, 61, 1)',
        'custom-blue': 'rgba(7, 124, 255, 1)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

