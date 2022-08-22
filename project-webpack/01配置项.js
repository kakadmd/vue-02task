// 修改 webpack的默认配置
// 比如修改入口和出口

// 默认的入口和出口
// 默认入口: ./src/index.js
// 默认出口: ./dist/main.js

// 通过commonjs规范去导出一个配置项
const path = require('path')
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
    // mode:'production' : 生产，'development':开发
    // - development 开发阶段，简易打包，打包速度快
    // - production 发布阶段，打包精细，打包速度慢（但是没关系不会经常production）
    mode : 'development',
    // webpack自定义的配置
    // entry ：相对路径
    entry : './src/main.js',

    // output.path :输出的目录 绝对路径
    // __dirname : 代表的是当前文件夹所在的绝对路径
    // output.filename :输出的文件名字
    output : {
        path : path.join(__dirname,'bundle'),
        filename : 'bundle.js',
        clean: true //先清除path目录，再重新打包
    },
    plugins : [
        // HtmlWebpackPlugin是一个构造函数需要new一下
        new HtmlWebpackPlugin({
            // 指定html的模板
            template: './public/index.html',
        })
    ]
}