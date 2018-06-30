<!-- warp.vue -->

<!-- html代码 -->
<template>
	<div>
		<!-- 新增 -->
		<div>
			<input ref='value' type="text">
			<!-- 事件 v-on:click="addBut", v-on可以缩写为@符号，下面我用的就是缩写@click -->
			<button @click="addBut">新增</button>
		</div>
		<!-- 列表 -->
		<div>
			<ul ref='ul'>
				<li>张三</li>
				<li>李四</li>
				<li>张飞</li>
			</ul>
		</div>
		<!-- 选择 -->
		<div>
			<p>选择显示： <span class="show">全部</span><span>正常的</span><span>删除的</span><span>3/3</span></p>
		</div>
	</div>
</template>

<!-- js代码 -->
<script>
	// export default 导出模块，这里是导出一个默认模块，这个模块可以匿名。
	// export 导出多个命名模块
	export default {
		name: 'wrap', // 模块命名
		methods: {
			// 新增按钮事件
			addBut() {
				// 获取输入框里的value
				let val = this.$refs.value.value;
				// 获取后清空输入框
				this.$refs.value.value = '';
				// 把获取的val添加到列表
				console.log(this.$refs.ul);

			}
		}
	}

</script>

<!-- css代码 -->
<style>
	span {
		margin-right: 10px;
		cursor: pointer;
	}
	.show {
		color:  blue;
	}
</style>