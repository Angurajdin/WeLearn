<template>
  <router-view/>
</template>

<script>
import { ref } from 'vue'
 

export default {
  name: 'LayoutDefault',

  components: {
     
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
<style>
#app{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
</style>