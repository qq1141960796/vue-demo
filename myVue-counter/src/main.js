// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import router from './router';
import counter from './components/counter/app.vue'

Vue.config.productionTip = false;

// Vue.component("App", App); // Vue.component组件在初始化实例之前注册为全局注册

Vue.component("counter", counter);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  // components: { App }, // Vue.component组件在实例中注册为局部注册
  template: '<counter />'
})
