import Vue from 'vue'
import Router from 'vue-router'


// import counter from '../components/counter/app.vue';
import TodoList from '../components/todoList/wrap.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todoList',
      component: TodoList
    }
  ]
})
