import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import counter from '../components/counter/app.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'counter',
      component: counter
    }
  ]
})
