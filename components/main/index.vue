<template>
  <div>
    <MainArticles />
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'Main',
  components: {
    MainArticles: () => import('./MainArticles/index.vue'),
  },
  methods: {},
})
</script>
<style lang='scss'>
</style>
