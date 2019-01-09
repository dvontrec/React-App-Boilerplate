// File needed to setup webpack for project
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    filename: 'bundle.js'
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
      },
      // Use css / style loader to add css files
      {
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            // adds options to make css modular (local scoped classes and only to component in question)
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true
            }
          }
        ],
        // looks for files ending in css
        test: /\.css$/
      }
    ]
  },
  plugins: [
    // Allows html-webpack-plugin to create a new html file from the given template
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

// Export config object

module.exports = config;
