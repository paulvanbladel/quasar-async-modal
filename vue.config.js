module.exports = {
  outputDir: 'docs',
  baseUrl: process.env.NODE_ENV === 'production'
  ? '/quasar-async-modal/'
  : '/'

  ,pluginOptions: {
    quasar: {
      theme: 'mat',
      rtlSupport: true,
      importAll: true
    }
  },
  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar-framework[\\\/]/
  ]
}
