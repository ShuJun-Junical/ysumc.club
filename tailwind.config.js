/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      white: '#ffffff',
      'base-white': '#f1f1f1',
      black: '#3b3b3b',
      gray: '#777777',
      'gray-dark': '#5e5e5e',
      gray4: '#666666',
      blue: '#66cccc',
      'blue-dark': '#59b3b3',
      'ysu-blue': '#1f296a',
      pink: '#cc6666',
      'pink-dark': '#b35959',
      red: '#9c292d',
      'red-dark': '#822225',
      orange: '#d36839',
      'orange-dark': '#ba5b32',
    },
  },
  plugins: [],
}
