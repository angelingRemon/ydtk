const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: 'dist',
  publicPath: './',
  assetsDir: 'static',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue:37.5,
            propList: ['*'],
            "selectorBlackList": [
              "van-"
            ]
          })
        ]
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: '微信公众号',
    resolve: {
      alias: {
        '@': resolve('src'),
      }
    },
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },

  },
  lintOnSave: false
};

