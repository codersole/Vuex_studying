import Vue from 'vue'
import Vuex, { mapActions, mapMutations} from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 提供唯一的公共资源。所有的共享资源都统一放到Store中的state存放
  // 外部访问state的数据--两种方法
  // 1. this.$store.count
  // 2. impotr {mapState} from 'vuex
    // 通过导入的mapState函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性
      // computed: {
      //   ...mapState(['count'])
      // }
  state: {
    count: 0
  },
  // 用于对Store中的数据进行加工处理形成新的数据（包装作用）
  // 类似于Vue中的computed
  // Store中的数据发生变化之后，Getter中的数据也会跟着变化
  // 使用getters的方法
    // 1. this.$store.getters.showNum
    // 2. import {mapGetters} from 'vuex'
      // computed: {
        // ...mapGetters(['showNum'])
      // }
  getters: {
    showNum: state => {
      return '当前最新的数量是【' + state.count + '】'
    }
  },
  // 用于更改Store中的数据，不可以在组件中直接$store.state操作数据
  // 通过mutation方法更改数据可以集中监控若有数据的变化
  // 触发mutation的方法(不要在这里面写异步操作)
    // this.$state.commit()
    // import {mapMutations} from 'vuex',将导入的mapMutation函数映射为当前组件的methods方法
      // methods: {
      //   ...mapMutations(['add', 'addN'])
      // },
  mutations: {
    // 增加add方法
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  // 通过异步的方法更改数据，必须通过Action，但是在Action中还是要通过触发Mutation的方法间接变更数据
  // 触发Actions方法
    // this.$store.dispatch()
    // import {mapActions} from 'vuex',将导入的mapActions函数映射为当前组件的methods方法
      // methods: {
      //   ...mapActions(['addAsync', 'addNAsync'])
      // },
  actions: {
    // 延迟1s让count加一
    addAsync(context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    // 携带参数
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },

    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },

    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000);
    }
  },
  modules: {
  }
})
