# vue-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## vue-demo实战todoList

> 框架搭建好过后输入npm run dev的时候不会直接打开浏览器，在config文件夹找到index.js文件夹 把autoOpenBrowser: false改为autoOpenBrowser: true，从新在命令行输入npm run dev，这是就会自动打开浏览器。 如图修改 ![](jtimg/2.png)


### 现在做个简单的demo示例： todo list(代办事项)

#### 一、文件夹与文件的创建
* 1、首先要在components文件夹下面创建todoList的一个文件夹
* 2、在todoList文件夹里创建addTodo.vue（新增组件）、filters.vue（过滤组件）、todoList.vue（列表组件）、wrap.vue（入口组件）这四个vue文件（四个组件）  
结构如图： ![](jtimg/3.png)  
* 3、在main.js中注册模板  如图： ![](jtimg/6.png)
* 4、现在可以看组件有没有注册成功
	* 4.1、在warp.vue文件里输入代码如图： ![](jtimg/7.png)，如果浏览器显示hello vue证明组件注册成功，如图： ![](jtimg/8.png)


#### 二、现在我们来做todoList项目

项目页面显示如图： ![](jtimg/9.png)  

#####功能
* 1、点击新增按钮，会把输入框里的字符添显示在页面上，todoList组件就会多渲染一条新增数据
* 2、点击名字的时候为删除名字，这里展示效果就改变状态来表示（改变字体颜色）
* 3、点击下面的全部/正常的/删除的，todoList会渲染不同的数据

现在开始正式做demo

* 1、先看静态还原上面图片显示的样式，代码如图： ![](jtimg/10.png)
* 2、添加事件