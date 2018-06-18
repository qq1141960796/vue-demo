<!-- Hello World 例子-->

<template>
  <div class="hello" id="hello1">
    <!-- 声明式渲染 -->
    <h1>{{ msg }}</h1>
  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script>
// export default {
//     name: 'Hello',
//     data() {
//         return {
//             msg: 'Hello world',
//             ssd: '你好中国'
//         }
//     },
//     methods: {
//         clickMsg: () => {
//             console.log(this.$refs());
//         }
//     }
// }


// ====================
    // 创建一个vue对象，同时将这个对象挂载到#hello1的元素上
    let app1 = new Vue({
        // 挂载点
        el: '#hello1',
        // Vue对象中管理的数据 VM（ViewModel），可以直接在模板上通过声明来进行数据访问
        data: {
            msg : 'Hello World'
        }
    })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
