// babel
// babel: js的语法降级的

// 1. 下载babel: yarn add @babel/core @babel/preset-env babel-loader
// 2. module.rules.{ test:/\.js$/,use:['babel-loader] }
// 3. 在项目根目录下, 新建 babel.config.js


//假如我写了一个包: wzk 上传到npm以后
// yarn add wzk

//假如我写了一个包: wzk ,上传到npm的时候, 在npm注册了一个自己作用域 sucan, 我把wzk包上传到sucan
// yarn add @sucan/wzk

// @babel/core
// 包名: core  只不过是 babel账户的core
// @vue/cli
// 包名: cli --> command-line-interface

// @babel/core 核心包

// @babel/preset-env
// 比如 箭头函数 --> function  class --> function

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const loader = require('css-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports ={
    // mode:'production' : 生产，'development':开发
    mode : 'production',
    entry : './src/main.js',
    output : {
        path : path.join(__dirname,'bundle'),
        filename : 'bundle.js',
        clean: true 
    },
    module : {
        rules : [
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },{
                test: /\.less$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },{
                test: /\.(gif|jpg|png|svg|ico)$/,
                type:'asset',
                generator:{
                    filename : 'images/[name]-[hash:6][ext]'
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:25 * 1024 //25kb
                    }
                }
            },{
                test:/\.(eot|svg|ttf|woff|woff2)/,
                type:'asset/resource',
                generator: {
                    filename:'fonts/[name].[hash:10][ext]'
                }
            },{
                test:/\.js$/,
                use:['babel-loader']
            }
        ]
    },    
    plugins : [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin()
    ],
    devServer : {
        open : true,
        port:8888
    }
}