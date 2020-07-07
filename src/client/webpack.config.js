const path = require('path')
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './public'),
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
        port: 3000
    }
};
