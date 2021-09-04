<template>
  <div>
    <base-header
      header-title="동행 찾기"
      is-back-button
    />
    <MainArticles />
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'Main',
  components: {
    MainArticles: () => import('./MainArticles/index.vue'),
    BaseHeader: () => import('~/components/common/header/BaseHeader.vue'),
  },
  methods: {},
})
</script>
<style lang='scss'>
</style>
