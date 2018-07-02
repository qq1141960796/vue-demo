<!-- addTodo.vue -->

<!-- html代码 -->
<template>
	<!-- 新增 -->
		<div>
			<input ref='value' type="text">
			<!-- 事件 v-on:click="addBut", v-on可以缩写为@符号，下面我用的就是缩写@click -->
			<button @click="addBtn">新增</button>
		</div>
</template>

<!-- js代码 -->
<script>
	// export default 导出模块，这里是导出一个默认模块，这个模块可以匿名。
	// export 导出多个命名模块
	export default {
		name: 'addTodo', // 模块命名
		methods: {
			addBtn(name) {
				// this.$refs.value.value获取输入框的值
				// $emit 触发父组件的自定义事件，this.$refs.value.value值传入父级
				if (this.$refs.value.value != '') {
					this.$emit('addBtn', this.$refs.value.value);
					this.$refs.value.value = '';
				} else {
					return
				}
				
			}
		}
	}

</script>

<!-- css代码 -->
<style></style>