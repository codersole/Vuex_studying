<template>
  <div>
    <my-add></my-add>
    <hr>
    <my-sub></my-sub>
  </div>
</template>

<script>
import Addciton from './components/Addition.vue'
import Subtrction from './components/Subtraction.vue'
export default {
  data() {
    return {
      
    }
  },
  components: {
    'my-add': Addciton,
    'my-sub': Subtrction
  }
}
</script>