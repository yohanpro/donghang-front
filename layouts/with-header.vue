<template>
  <v-app>
    <nuxt class="with-title-header" />
  </v-app>
</template>
<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'WithTitleHeaderLayout',
})
</script>
<style lang='scss'>
.with-title-header {
  margin-top: 5rem;
}
</style>
