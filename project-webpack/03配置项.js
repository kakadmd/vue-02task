/* 
为什么要配置脚本？
 "scripts": {
    "build": "webpack", // Webpack-cli提供
    "serve": "webpack server"
  },
*/
// 第二种方案 ：npx可以执行脚本命令

// npx webpack 启动打包 首先去node_modules找webpack命令 执行他
// 看看有没有安装的webpack，使用webpack打包 如果没有安装 去下载webpack并打包 打包完了之后再删除
// npx webpack serve 启动开发服务器




const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
    // mode:'production' : 生产，'development':开发
    mode : 'production',
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
        open : true,
        port:8888
    }
}