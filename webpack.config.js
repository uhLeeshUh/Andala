const path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/js/app.js',
  output: {
    path: path.resolve(__dirname, 'lib/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  devtool: 'source-map'
};
