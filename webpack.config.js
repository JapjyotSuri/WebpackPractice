const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//whenever we write npm start it will first run this file
module.exports = {
    entry: './app/index.js',//where all the js code is written.The entry point for the webpack
    module: {
        rules: [
            {
                test: /\.svg$/,//all svg files are handled here
                use: 'svg-inline-loader'//if there are more than one things here they are loaded right to left
            },
            {
                test: /\.css$/i,//all css files are handled here
                use: ["style-loader", "css-loader"],//use an dloader both can be used but better to use loader
              },
              {
                test: /\.(js)$/,//regex so that it uses this for all js files
                use: "babel-loader"
              }
        ]
    },
    output: {//the output bundle.js file is saved in a folder named dist containing bundle.js and index.html
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development' //production is more strict as compared to development.Over here we can also write production or development fromour side as well
  };