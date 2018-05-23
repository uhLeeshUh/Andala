const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  devtool: 'source-map'
};
