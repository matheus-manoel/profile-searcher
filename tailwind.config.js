module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#EEEEEE',
        white: '#FFFFFF',
        alabaster: '#FAFAFA',
        'persian-green': '#009688',
      },
      boxShadow: {
        under:
          '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  plugins: [],
}
