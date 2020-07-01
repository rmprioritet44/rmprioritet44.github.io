const ImageminPlugin = require("imagemin-webpack");

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(svg|gif|png|eot|woff|ttf)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    }
}