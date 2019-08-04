const webpackRenderer = require('electron-webpack/webpack.renderer.config.js');

module.exports = env => {
  return new Promise((resolve, reject) => {

    /* get provided config */
    webpackRenderer(env).then(rendererConfig => {

      console.log(rendererConfig.module.rules);
      /* add `raw-loader` */
      rendererConfig.module.rules.push({
        test: /\.txt$/,
        use: 'raw-loader'
      })

      /* return modified config to webpack */
      resolve(rendererConfig)
    })
  })
}
