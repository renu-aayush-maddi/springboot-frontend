const path = require('path');

module.exports = {
  entry: './src/index.js',  // Adjust this path if necessary
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,      // Handle .js and .jsx files
        exclude: /node_modules/,  // Exclude node_modules folder
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Add .jsx to the resolve extensions
  },
  // other configurations as needed
};
