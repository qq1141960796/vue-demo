<!-- todoList.vue -->

<!-- html代码 -->
<template>
	<!-- 列表 -->
	<div>
		<ul>
			<!-- v-for渲染li列表 -->
			<li v-for="(item, index) in todoList"
				:class="{completed: item.completed}"
				@click="completedRodo(item)">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>

<!-- js代码 -->
<script>
	// export default 导出模块，这里是导出一个默认模块，这个模块可以匿名。
	// export 导出多个命名模块
	export default {
		name: 'todoList', // 模块命名
		methods: {
			completedRodo(item) {
				// $emit 触发父组件的自定义事件，item传入父级
				this.$emit('completedRodo', item)
			}
		},
		// props 可以是数组或对象，用于接收来自父组件的数据
		props: {
			// 接受父组件todoList的数据
			todoList: {
				// 类型
				type: Array,
				default: () => {
					console.log(1231654);
					// return [{
					// 	name: '张三',
					// 	// 是否加载css样式
					// 	completed: false
					// },{
					// 	name: '关羽',
					// 	completed: true
					// },{
					// 	name: '李四',
					// 	completed: false
					// }]
				}
			}
		}
	}
</script>

<!-- css代码 -->
<style>
	.completed {
		color: blue;
		text-decoration: line-through;
	}
</style>