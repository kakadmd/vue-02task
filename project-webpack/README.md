# Uncaught SyntaxError: Cannot use import statement outside a module (at index.js:4:1)

at index.js ： index报错

:4:1 ：在index.js中第四行 第一列



# webpack使用流程

yarn 的下载速度快 npm慢

下载yarn ：npm i yarn -g

1.在项目里面使用包：一定要有package.json文件 npm init  -y

2.下载webpack    yarn add webpack webpack-cli



①打包时先把 package.json 里面的scripts改为："build" : "webpack"

![1660961108355](C:\Users\杜梦迪\AppData\Roaming\Typora\typora-user-images\1660961108355.png)

②然后在终端执行的命令为yarn build

③打包完之后 在html页面引入生成的新文件dist里面的main.js

![1660961340964](C:\Users\杜梦迪\AppData\Roaming\Typora\typora-user-images\1660961340964.png)



lock文件

package.json有什么作用？
>记载这个项目下载了那些包

lock文件的作用？
>更详细的记录项目用到了那些包，以及默认的信息

如果说你使用npm作为包管理工具
生成的lock文件叫：package-lock
