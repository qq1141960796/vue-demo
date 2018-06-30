// 引入vue
import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex'

// 引入counter里的store.js文件
import counter from '../counter/store.js'

// 全局组件，使用Vue.use()时，自动调用install，而install导出的必须是组件
Vue.use(Vuex)

// new一个Vuex.Store并把这个模块暴露出去
export default new Vuex.Store({
	modules: {
		counter
	}
})