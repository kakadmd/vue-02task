// 手写轮播图和选项卡逻辑

// 按需引入
import { marquee } from "./marquee.js";

// 默认引入(可以改名字)
import tabs from "./tabs.js";
marquee();
tabs();

// 在main.js里引入css文件
// 在引入css文件时 直接引入整个文件
// 注意 .css不能省略，.js可以省略

/* 在终端的报错信息：
You may need an appropriate loader to handle this file type, 
currently no loaders are configured to process this file. 
See https://webpack.js.org/concepts#loaders
> .marquee {
|     width: 100px;
|     height: 100px;
 @ ./src/main.js 20:0-28
*/
// 引入css
import "./styles/index.css";
// 引入less
import "./styles/index.less"

// 添加图片
// 1.引入图片（实际上引入的是src属性）
// 2.创建img节点
// 3.给img节点添加src属性
// 4.将img添加到body最后面
import gifSrc from "./assets/1.gif"
const img = document.createElement("img")
img.src = gifSrc
document.body.appendChild(img)

import pngSrc from "./assets/logo_small.png"
const img2 = document.createElement('img')
img2.src = pngSrc
document.body.appendChild(img2)

// 引入字体图标样式
// 字体和入口文件产生的间接的关系
// webpack 只能打包.js和.json 为什么可以打包woff/woff2？
// 因为css-loader新属性可以处理字体图标
import './assets/fonts/iconfont.css'


// 有兼容性问题的语法：
class Person {
    name = '张三'
    age = 20
  }
  console.log(Person);