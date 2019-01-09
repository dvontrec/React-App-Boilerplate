// File needed to setup webpack for project

const path = require('path');
// Create a config object
const config = {
  // Requires 2 min properties
  // Entry property (The root of the application/ first file to execute)
  entry: './src/index.js',
  // Output property (Where to save all combined modules to)
  output: {
    //path directory where file is saved (saves to absolute current path)
    path: path.resolve(__dirname, 'build'),
    // name of the file
    filename: 'bundle.js',
    // prepends url to public assets
    publicPath: 'build/'
  },
  // Allows webpack to use babel loaders/rules
  module: {
    // Rules for when to use loaders
    rules: [
      // use the babel loader
      {
        use: 'babel-loader',
        // Looks for js files and applies babel
        test: /\.js$/
      }
    ]
  }
};

// Export config object

module.exports = config;
