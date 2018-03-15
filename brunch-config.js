module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app/
      }
    },
    stylesheets: { joinTo: 'app.css' }
  },

  plugins: {
    babel: {
      // Do not use ES6 compiler in vendor code
      ignore: [/node_modules/]
    }
  }
}
