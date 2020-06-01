const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

// Only for GHPages
const outputDir = 'docs';
const developPath = '/';
const productionPath = '/';
const publicPath = process.env.NODE_ENV === 'production' ? productionPath : developPath;

module.exports = {
  outputDir,
  publicPath,
  configureWebpack: {
    plugins: [
      new WebpackNotifierPlugin({
        title: 'Vue Project',
        contentImage: path.join(__dirname, './public/icons/ProjectLogo.png'),
      }),
      new UnusedFilesWebpackPlugin({
        patterns: ['./src/**/*.*'],
      }),
    ],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
        '+': path.resolve(__dirname, 'public/icons'),
        './icons': path.resolve(__dirname, 'public/icons'),
      },
      extensions: ['.js', '.vue'],
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
