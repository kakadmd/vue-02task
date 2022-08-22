// 需求：打包后的图片放在bundle/images里
// 配置
// gendertor 生成器：制定打包以后的产物生成到那里
// rule.gendertor


// base64的图片的字符串也叫做DataUrl    
// 图片的src属性, 不仅仅可以识别的相对/路径  还可以识别base64编码  
//  base64 实际上就是图片经过编译生成的字符串
//  base64显示图片的优点: 减少网络请求的次数  
//  base64显示图片的缺点: base64生成字符串会比原始图片大1/3     
//  你是选用base64还是选用路径的方式?   
//  大的图片使用路径, 小的图片使用base64 

// 总结：assetMoudle
// asset/resource 将文件打包成单独的文件
// asset/inline 将文件打包成base64
// asset 以8kb为界限，大于8kb打包成文件，小于8kb打包成base64
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
            }
            // ,{
            //     test: /\.(gif|jpg|png|svg|ico)$/,
            //     type:"asset/resource",//图片打包成单独文件
            //     // generator.filename指定生成文件名字
            //     // [ name ]:文件原名字
            //     // [ hash ]:代表随机生成的字符串  [hash:6]代表六位字符串
            //     // [ ext ]:代表文件的原始后缀
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