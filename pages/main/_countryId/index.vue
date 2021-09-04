<template>
  <div>
    <Main />
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'MainArticlePage',
  components: {
    Main: () => import('~/components/main/index.vue'),
  },
  layout: 'with-header',
})
</script>
<style lang='scss'>

</style>
