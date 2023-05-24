/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    colors: {
      "golden": "#E58411",
      "lite-black": "#1E1E1E",
      "product-text-color": "#0D1B39",
      "search-bg": "rgba(255, 255, 255, 0.15)",
    },
    fontFamily: {
      "Gilroy-Bold": ["Gilroy-Bold", "sans-sarif"],
      "Gilroy-Medium": ["Gilroy-Medium", "sans-sarif"],
      "Gilroy-Regular": ["Gilroy-Regular", "sans-sarif"],
      "Inter-Regular": ["Inter-Regular", "sans-sarif"],
    },

    extend: {
      backgroundImage: {
        'hero-section': "url('src/assets/image/hero-bg.svg')",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}