<template>
    <div>
        <h3>{{showNum}}</h3>
        <h3>当前count最新值：{{count}}</h3>
        <button @click="btnHandle()">-1</button>
        <button @click="btnN()">-3</button>
        <button @click="btnAs()">异步-1</button>
        <button @click="btnNAs()">异步-3</button>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['count']),
        ...mapGetters(['showNum'])
    },
    methods: {
        ...mapMutations(['sub', 'subN']),
        ...mapActions(['subAsync', 'subNAsync']),
        btnHandle() {
            this.sub()
        },
        btnN() {
            this.subN(3)
        },
        btnAs() {
            this.subAsync()
        },
        btnNAs() {
            this.subNAsync(3)
        }
    },
}
</script>