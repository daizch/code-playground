//custom webpack config
const path = require("path")

module.exports = (baseConfig, env, defaultConfig) => {

  defaultConfig.module.rules.push(
    {
      test: /\.less$/,
      loaders: ['style-loader', 'css-loader', 'less-loader'],
      include: path.resolve(__dirname, '../css/')
    }
  )

  return defaultConfig
}