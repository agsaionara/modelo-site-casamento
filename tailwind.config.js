/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Inria Serif, sans-serif',
        serif: 'Gwendolyn' ,

      },
      backgroundImage:{
        'image-central': "url('/assets/bg-casal.jpg')",
      }
    },
  },
  plugins: [],
}
