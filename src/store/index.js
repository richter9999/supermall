import { createStore } from 'vuex'
import {reactive} from 'vue'

const modulesA = {
  state: {},
  mutations: {},
  actions: {
    asycnActions(context, payLoad) { //context 只能提交本 模块下的 mutations的方法
      console.log(context);
    },
    aActions({state, commit , rootState}, payLoad) {  //context的 对象解构
      console.log(context);
    }
  },
  getters: {
    getNames(state, getters, rootState) {

    }
  }
}


export default createStore({
  state: {  //保存状态
    token: {
      name: 'admin',
      role: ['admin','user'],
    },
    info: [
      {
        id: 100, name: 'mty'
      }
    ]
  },
  mutations: {  //同步修改状态
    increment(state) {
      state.token.name = 'administrator'
    },
    incrementS(state, payload) {
      // PayLoad 负载
    },
    updateToken(state, payload) {
      //state.info.push(payload.payload)

      //设置响应式方法
      //1. reactive
      //const token = reactive(state.token)
      //token['menu'] = 'url'

      //2. ES6 展开运算符
      state.token = {...state.token, pads : '123'}

    }
  },
  actions: {  //异步修改状态
    optPromise(context, payLoad) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('Promise 提交: ', payLoad)
            context.commit('updateToken')
          }, 1000)
          resolve('11111111')
      })
    },
    async optAsync(context, payLoad) {
      setTimeout(() => {
        console.log('Async 提交: ', payLoad)
        context.commit('updateToken')
      }, 1000)
      return '222222222'
    }
  },
  modules: {
  },
  getters: {  //计算属性
    roleFilter(state) {
      return (param) => {
        return state.token.role.filter(r => r.includes(param))
      }
    },
    ['tokenFilter'](state, getters) {  //tokenFilter 可以统一 定义为 常亮
      getters.roleFilter(state)
      return param => {
        return state.token.role.filter(r => r.includes(param))
      }
    },
  }
})
