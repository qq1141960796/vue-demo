// main.js
import Vue from 'vue';
import App from './App'
import router from './router/index.js'
import wrap from './components/todoList/wrap.vue';
import addTodo from './components/todoList/addTodo.vue';
import todoList from './components/todoList/todoList.vue';
import filters from './components/todoList/filters.vue';

Vue.config.productionTip = false

// Vue.component 组件在初始化实例之前注册为全局注册

Vue.component("App", App);
Vue.component('wrap', wrap);
Vue.component('addTodo', addTodo);
Vue.component('todoList', todoList);
Vue.component('filters', filters);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App }, // Vue.component组件在实例中注册为局部注册
  template: '<App />' // 加载入口模板
})
