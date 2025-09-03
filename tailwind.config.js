module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4',
        accent: '#7c3aed'
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(120deg, rgba(124,58,237,0.06), rgba(14,165,164,0.04))"
      }
    },
  },
  plugins: [],
}