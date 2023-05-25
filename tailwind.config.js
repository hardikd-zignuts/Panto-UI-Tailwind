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
      'bag-bg': '#e58411',
      'title-text': '#1E1E1E',
      'selling-bg': '#F7F7F7',
      'category-bg': '#EEEEEE',
      'product-bg': '#FAFAFA',
      'cat-color': '#8D8D8D',
      'product-title': '#0D1B39',
      'footer-link': '#F6973F',
      'footer-sub-link': '#1E2833',
    },
    fontFamily: {
      "Gilroy-Bold": ["Gilroy-Bold", "sans-sarif"],
      "Gilroy-Medium": ["Gilroy-Medium", "sans-sarif"],
      "Gilroy-Regular": ["Gilroy-Regular", "sans-sarif"],
      "Inter-Regular": ["Inter-Regular", "sans-sarif"],
      "Inter": ["Inter", "sans-sarif"],
    },

    extend: {
      backgroundImage: {
        'hero-section': "url('/src/assets/image/hero-bg.svg')",
        'prev-arr': "url('/src/assets/image/icon/prev-arrow.svg')",
        'next-arr': "url('/src/assets/image/icon/next-arrow.svg')",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}