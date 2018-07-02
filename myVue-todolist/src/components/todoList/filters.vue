<!-- filters.vue -->
<!-- html代码 -->
<!-- <template> -->
	<!-- 选择 -->
	<!-- <div>
		<p>选择显示： 
			<span>全部</span>
			<span>正常</span>
			<span>删除</span>
			<span>3/3</span>
		</p>
	</div> -->
<!-- </template> -->

<!-- js代码 -->
<script>
	// export default 导出模块，这里是导出一个默认模块，这个模块可以匿名。
	// export 导出多个命名模块
	export default {
		name: 'filters', // 模块命名
		render(h) {
			return (
					<div>
						选择显示: {
							this.filters.map(item => {
								if (item === this.showType) {
									return <span>{item}</span>
								}
								return <a href="#" onClick={(e) => {
									e.preventDefault()
									// 这里获取当前选项并传入setShowType（）方法
									this.setShowType(item) 
								}}>{item}</a>
							})
						}
						<span>{this.completedTodotatal}/{this.tatal}</span>
					</div>
				)
		},
		data() {
			return {
				filters: ['全部', '正常', '完成',]
			}
		},
		props: {
			showType: {
				// 这里是默认显示的是全部
				default: '全部'
			},
			tatal: {
				// tatal是从父级传过来的，所以这里可以为空
			},
			completedTodotatal: {
				// 这个和tatal一样都是从父级传过来的，所以可以为空
			}
		},
		methods: {
			setShowType(showType) {
				// console.log(showType);
				// 点击的的时候触发父级的自定义事件，并把获取到的选项传入父级
				this.$emit('setShowType', showType)
			}
		}
	}
</script>

<!-- css代码 -->
<style>
	.show {
		color:  blue;
	}
</style>