<!-- warp.vue -->

<!-- html代码 -->
<template>
	<div>
		<!-- addTodo已经注册了，这里使用addTodo（新增）组件，这里的写法不同看下文档 -->
		<add-todo @addBtn="addBtn" />
		<!-- 列表组件 -->
		<!-- 这里的:todoList是绑定了filterData方法的，在todoList组件用porps接收filterData方法return出来的todoList -->
		<todo-list 
			@completedRodo="completedRodo"
			:todoList="filterData" />
		<!-- 选择组件 -->
		<filters
			@setShowType="setShowType"
			:showType="showType"
			:tatal="tatal"
			:completedTodotatal="completedTodotatal" />
	</div>
</template>

<!-- js代码 -->
<script>
	// export default 导出模块，这里是导出一个默认模块，这个模块可以匿名。
	// export 导出多个命名模块
	export default {
		name: 'wrap', // 模块命名
		// 数据vuevue
		data() {
			return {
				// 默认显示选择全部
				showType: '全部',
				// todoList数组也是可以为空的
				todoList: [{
					name: '张三',
					// 是否加载css样式
					completed: false
				},{
					name: '关羽',
					completed: true
				},{
					name: '李四',
					completed: false
				}]
			}
		},
		// 方法
		methods: {
			// 新增按钮事件方法
			addBtn(name) {
				// 给todoList数组添加一个对象
				this.todoList.push({
					name,
					completed: false
				});
			},
			// 点击li是的方法
			completedRodo(item) {
				// 点击后completed的值取反
				item.completed = ! item.completed
			},
			setShowType(showType) {
				// console.log(showType);
				this.showType = showType
			}
		},
		computed: {
			// todoList绑定的方法
			filterData() {
				switch(this.showType) {
					case '全部':
						// 这里todoList返回出去，子组件绑定这个方法后会传递到子组件，子组件用porps接受
						return this.todoList
					case '正常':
						// filter()是一个过滤器,过滤completed的值
						return this.todoList.filter(item => !item.completed)
					case '完成':
						return this.todoList.filter(item => item.completed)
				}
			},
			tatal() {
				// 获取todoList对象的总长度（数量）
				return this.todoList.length
			},
			completedTodotatal() {
				// 获取todoList对象已完成的长度（数量）
				return this.todoList.filter(item => item.completed).length
			}
		}
	}
</script>

<!-- css代码 -->
<style>
	span,a {
		margin-right: 10px;
		cursor: pointer;
	}	
	.filters-wrap > * {
		margin-right: 10px;
	}
</style>