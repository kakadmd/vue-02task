
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
                // use:['style-loader','css-loader']
                use:[
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        // 配置loader的选项
                        options:{url:false}
                    }
                ]
            },{
                test: /\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
            // ,{
            //     test: /\.(gif|jpg|png|svg|ico)$/,
            //     type:"asset/resource",//图片打包成单独文件
            //     generator:{
            //         filename : 'images/[name]-[hash:6][ext]'
            //     }
            // }
            // ,{
            //     test: /\.(gif|jpg|png|svg|ico)$/,
            //     type:"asset/inline",//会把图片以base64形式打包进js
            // }
            ,{
                test: /\.(gif|jpg|png|svg|ico)$/,
                // 以8kb为界限，大于8kb会打包成文件，小于8kb会打包成base64
                // 要是不想以8kb为界限
                // 以Rule.parser改变
                type:'asset',
                generator:{
                    filename : 'images/[name]-[hash:6][ext]'
                },
                parser:{
                    // base64打包时的选项调数
                    dataUrlCondition:{
                        // maxSize单位是字节，1kb=1024字节
                        maxSize:25 * 1024 //25kb
                    }
                }
            },{
                test:/\.(eot|svg|ttf|woff|woff2)/,

                // assetModule 打包文件（图片/字体图标/.txt/.mps/.mp4/.avi）
                //asset/resource asset/inline asset
                type:'asset/resource',
                generator: {
                    filename:'fonts/[name].[hash:10][ext]'
                }
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