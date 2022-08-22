// production模式打包特点？  开启压缩速度很慢
// 慢 内存中打包-->输出到bundle/bundle.js
// webpack-devserver
// express编写的node服务器
// 功能 ： 在内容中打包，在内存中部署到服务器上
// 1.yarn add webpack-dev-server -D
// 2."serve": "webpack server"
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
    // mode:'production' : 生产，'development':开发
    mode : 'development',
    entry : './src/main.js',
    output : {
        path : path.join(__dirname,'bundle'),
        filename : 'bundle.js',
        clean: true 
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
    devServer : {
        // 当你serve之后，自动打开浏览器运行项目
        open : true,
        // 端口号 不设置就是默认端口号为8080,端口号设置范围 [0,65535]
        port:8888
    }
}