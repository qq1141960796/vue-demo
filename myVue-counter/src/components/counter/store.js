export default {
	state: {
		count: 0,
	},
	// getters这个现在可以不用管
	// getters: {
	// 	total1() {
	// 		return 0
	// 	}
	// },
	mutations: {
		increment(state) {
			// 点击的时候修改state里count的值
			state.count++;
		},
		decrement(state) {
			// 点击的时候修改state里count的值
			// 判断点击减少的时候count的值为0的话直接返回出去，必须是大于0
			if (state.count > 0) {
				state.count--;
			} else {
				return
			}
		}
	}
}