var HtmlWebpackPlugin = require('html-webpack-plugin');
var {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    entry:{
        index:"./src/app.js"
    },
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                } 
            },{
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000,
                    }
                  }
                ]
            },{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: false
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 5500,
        proxy: {
            "/api": "http://localhost:3000"
        }
    }
}