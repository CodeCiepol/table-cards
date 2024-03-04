/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      spacing:{
        width:{
          'a4':"210mm"
        },
        height:{
          'a4':"297mm"
        }
      }
    },
  },
  plugins: [],
}

