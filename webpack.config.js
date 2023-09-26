const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //javascript
    entry: './src/js/index.js',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            //to convert from ES6 to ES5
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        //css
        {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }
    ]
    },
    //html
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        open: true,
        port: 9000
    }
}