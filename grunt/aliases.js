module.exports = {
  default: [
    'build',
    'watch'
  ],

  build: [
    'buildCSS'
  ],

  buildCSS: [
    'buildAppCSS',
    'buildLibCSS'
  ],

  buildAppCSS: [
    'sass_globbing',
    'sass:appCSS'
  ],

  buildLibCSS: [
    'sass:libCSS'
  ]
}
