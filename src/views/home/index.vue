<template>
  <div>
    <h2>首页</h2>
    <h2>{{$store.state.token}}</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="modify">修改名字</button>
    <button @click="updateToken">添加Token</button>

    <button @click="optPromise">Promise</button>
    <button @click="optAsync">Async</button>

  </div>
</template>

<script>
import axios from 'axios'

//创建 局域 axios
const request = axios({
  baseUrl: 'http://123.207.32.32:8000',
  timeout: 5000
})

export default {
  name: "home",
  methods: {
    modify(){
      this.$store.commit('increment')

      //推荐网站 https://httpbin.org
      //测试 http://123.207.32.32:8000/home/multidata
      //http://123.207.32.32:8000/home/data?type=pop&page=1   type(pop,sell)

      axios({
        url: 'http://123.207.32.32:8000/home/multidata',
        methods: 'get',
        params: {
        }
      }).then(res => {
        console.log(res);
      })

      axios({
        url: 'http://123.207.32.32:8000/home/data',
        methods: 'get',
        params: {
          type: 'pop',
          page: 1
        }
      }).then(res => {
        console.log(res);
      })

      axios.all([axios(), axios()]).then(results => {
        results[0]
      })
      axios.all([axios(), axios()]).then(axios.spread((res1, res2) => {
        results[0]
      }))


    },
    md(count) {
      this.$store.commit('incrementS', count)
      this.$store.commit({
        type: 'incrementS',
        payload: count,
      })
    },
    updateToken(){
      this.$store.commit({
        type: 'updateToken',
        payload: {id: 101, name: 'user'},
      })
    },
    optActions(state) {
      this.$store.dispatch({
        type: asyncCommit,
        message: {},
        success: ()=>{
          console.log('已经完成才做');
        }
      })
    },
    optPromise() {
      this.$store.dispatch('optPromise', 'Promise提交').then( res => {
        console.log(res);
      })
    }
    ,
    async optAsync() {
      //异步写法
      const result = await this.$store.dispatch('optAsync', 'Async + Await')
      console.log(result);
    }
  }

}
</script>

<style scoped>

</style>