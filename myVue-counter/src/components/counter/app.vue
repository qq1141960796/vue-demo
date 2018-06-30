<!-- app.vue -->

<!-- html代码 -->
<template>
	<div>
		<h1>你一共点击了{{count}}次</h1>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
	</div>
</template>

<!-- js代码 -->
<script>
	// export default 导出模块，这里是导出一个默认模块，这个模块可以匿名。
	// export 导出多个命名模块
	export default {
		name: 'app', // 模块命名
		data() {
			return {
				// 在data里声明一个count变量，通过方法来更改
				count: 0
			}
		},
		methods: {
			// 点击增加的方法
			increment() {
				// 点击的时候修改data里count的值
				this.count++;
			},
			// 点击减小的方法
			decrement() {
				// 点击的时候修改data里count的值
				// 判断点击减少的时候count的值不能为0，必须是大于0
				if (this.count > 0) {
					this.count--;
				} else {
					return
				}				
			}
		}

	}

</script>

<!-- css代码 -->
<style></style>