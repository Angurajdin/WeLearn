<template>
  <router-view/>
</template>

<script>
import { ref, defineComponent, provide } from 'vue'
import store from './commonData'

export default defineComponent({

  name: 'LayoutDefault',

  setup () {

    provide('store', store)

    return {
      leftDrawerOpen: ref(false)
    }
  }
});
</script>
<style>
#app{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
</style>