/* For jetbrains webstorm/phpstorm paths resolving */
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '+': path.resolve(__dirname, 'public/icons'),
      './icons': path.resolve(__dirname, 'public/icons'),
    },
    extensions: ['.js', '.vue'],
  },
};
