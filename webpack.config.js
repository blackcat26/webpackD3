var webpack = require('webpack');

module.exports = {
    entry:"./src/js/app/entry.jsx",
    output:{
        filename: "bundle.js",
        path:__dirname + "/src/js/public"
    },
    module:{
        loaders:[
            {
                test:/\.js[x]?$/,
                exclude:/node_modules/,
                loader:"babel-loader?presets[]=es2015&presets[]=react"
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader?modules"
            },
            {
                test:/\.(jpg|png)$/,
                loader:"url-loader?limit=8192&name=src/img/[name].[ext]"
            }
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        })
    ]
};