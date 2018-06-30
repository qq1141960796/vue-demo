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


### 现在做个简单的demo示例： todo list

#### 一、文件夹与文件的创建
* 1、首先要在components文件夹下面创建todoList的一个文件夹
* 2、在todoList文件夹里创建addTodo.vue（新增组件）、filters.vue（过滤组件）、todoList.vue（列表组件）、wrap.vue（入口组件）这四个vue文件（四个组件）  
结构如图： ![](jtimg/3.png)  
* 3、在main.js中注册模板：  
	// main.js
	import Vue from 'vue';
	// import App from './App'
	// import router from './router'
	import wrap from './components/todoList/wrap.vue';
	import addTodo from './components/todoList/addTodo.vue';
	import todoList from './components/todoList/todoList.vue';
	import filters from './components/todoList/filters.vue';
	
	Vue.config.productionTip = false
	
	// Vue.component 组件在初始化实例之前注册为全局注册
	
	// Vue.component("App", App);
	Vue.component('wrap', wrap);
	Vue.component('addTodo', addTodo);
	Vue.component('todoList', todoList);
	Vue.component('filters', filters);
	
	
	
	/* eslint-disable no-new */
	new Vue({
	  el: '#app',
	  // router,
	  // components: { App }, // Vue.component组件在实例中注册为局部注册
	  template: '<wrap />' // 加载入口模板
	})




