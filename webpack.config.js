var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: './src/index',

    output: {
        path: './dist',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {test: /\.jsx?$/i, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },

    resolve: {
        fallback: path.join(__dirname, 'node_modules')
    }
}