export default {
  build: {
    target: ['es2015'],
    commonjsOptions: {
      transformMixedEsModules: true,
      include: ['**/*.js', '**/*.vue', '**/*.mpx']
    },
    minify: false
  }
}
