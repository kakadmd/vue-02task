// 安装loader
// yarn add less-loader less
// less-loader是为了识别less文件，less的作用是将.less转成.css文件
// 配置less-loader
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const loader = require('css-loader')
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
            // 对应的一种文件的类型
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },{
                // less-loader识别less文件 调用less->css
                // css-loader识别css文件
                // style-loader css文件以style便签形式
                // use解析是从后往前解析的
                test: /\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },    
    plugins : [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
    devServer : {
        open : true,
        port:8888
    }
}