module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "linear-gradient(to right, rgba(0,0,0, 0.4),rgba(0,0,0,0.4)), url('/src/assets/images/background.jpg')",
      }
    },
  },
  plugins: [],
}
