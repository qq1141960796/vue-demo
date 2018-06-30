<!-- app.vue -->
<!-- html代码 -->
<template>
	<div>
		<h1>你一共点击了{{counter.count}}次</h1>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
	</div>
</template>

<!-- js代码 -->
<script>

	// 引入vuex里面的辅助函数
	import { mapState, mapMutations } from 'vuex'
	// export default 导出模块，这里是导出一个默认模块，这个模块可以匿名。
	// export 导出多个命名模块
	export default {
		name: 'counter', // 模块命名
		// 计算方法
		computed: {
			// mapState 辅助函数帮助我们生成计算属
			// 这里是通过mapState函数的数组参数赋值
			// 这里是把前面我用的this.count映射为store.state.count
			...mapState(["counter"])
		},
		// 方法 （事件）
		methods: {
			/*
				如果组件中事件的名称和mutations中方法的名称相同，可以传一个字符串数组
				映射this.increment()为this.$store.commit('increment')
				映射this.decrement()为this.$store.commit('decrement')
			*/
			...mapMutations(["increment", "decrement"])

			// 组件中的事件名和mutations中的方法名不一样，传入对象
			// ...mapMutations({
	            // reduces: 'reduce' //映射 $this.reduces 为 this.store.commit('reduce')
	        // })
		}
	}
</script>

<!-- css代码 -->
<style></style>