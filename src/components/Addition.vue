<template>
    <div>
        <h3>{{$store.getters.showNum}}</h3>
        <h3>当前count最新值：{{$store.state.count}}</h3>
        <button @click="addHandle()">+1</button>
        <button @click="addbtnN()">+3</button>
        <button @click="addAsy()">异步+1</button>
        <button @click="addNAsy()">异步+3</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        addHandle() {
            this.$store.commit('add')
        },
        addbtnN() {
            this.$store.commit('addN', 3)
        },
        addAsy() {
            this.$store.dispatch('addAsync')
        },
        addNAsy() {
            this.$store.dispatch('addNAsync', 3)
        }
    },
}
</script>