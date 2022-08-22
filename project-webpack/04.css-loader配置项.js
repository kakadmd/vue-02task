// 打包配置 css文件
// 安装loader
// 1.yarn add css-loader (识别css文件)
// 2.配置loader moudle.rules
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
    // 配置模块解析规则
    // modules.rules:[]配置我们的loader
    module : {
        rules : [
            // test:正则 匹配的文件
            // use:[] 指定匹配上的文件使用什么loader

            {
                test: /\.css$/,
                // style-loader必须在css-loader前面
                // 因为use数组的解析是从后往前的
                use:['style-loader','css-loader']
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