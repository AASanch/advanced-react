var htmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var path = require('path');

module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss", ".json"],
        alias: {
            "@client": path.resolve(__dirname, "src/client/"),
            "@server": path.resolve(__dirname, "src/server/"),
            "@components": path.resolve(__dirname, "src/client/components/")
        }
    },
    entry: [
        "babel-polyfill",
        "./src/client/index"
    ],    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                use: [
                    { loader: "babel-loader" },
                    { loader: "awesome-typescript-loader" }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "./src/client/index.html"
        })
    ],
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
}