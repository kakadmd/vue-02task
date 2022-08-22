// 让webpack能够识别图片
// webpack4：url-loader 和file-loader 处理图片资源
// webpack觉得处理文件资源（字体图标，图片，txt文本。。。）非常繁琐

// webpack5 处理我们的文件资源使用内置assetsMoudle处理
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
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },{
                test: /\.less$/,
                use:['style-loader','css-loader','less-loader']
            },{
                // 处理图片
                // 在正则中（）代表的是表达式结果
                // type：指定资源模块的方式（怎么处理图片）
                // "asset/resource" 他会把图片打包成单独的文件
                test: /\.(gif|jpg|png|svg|ico)$/,
                type:"asset/resource"
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