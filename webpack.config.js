/**
 * Created by huangwei on 2017/2/27.
 */
var webpack = require('webpack');

var htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')

module.exports = {
    entry: './src/main.js', //打包的总入口文件
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        //加载器配置
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
            	test: /\.less$/,
            	loader: "style-loader!css-loader!less-loader",

            },
            {
                test: /\.(png|ttf|gif|svg|jpg)$/,
                loader: 'url-loader?limit=4000'
            },
            {
                test:/\.js$/,
                loader:'babel-loader',  //表示使用babel-loader去转换所有的.js文件中的es6语法为es5语法
                exclude:/node_modules/  //表示node_modules文件夹中的所有.js不转换
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:'index',
            filename:'index.html', //在内存中生成的网页的名称
            template:'./index666.html' //生成网页名称的依据
        })/*,
        // 压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false //去掉版权信息等注释
        }),
        // 代码顺序优化
        new webpack.optimize.OccurrenceOrderPlugin()*/
    ]
}
