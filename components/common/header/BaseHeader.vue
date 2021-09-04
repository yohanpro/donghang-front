<template>
  <div class="base-header">
    <slot name="header-left">
      <img
        v-show="isBackButton"
        src="~/assets/images/icons/back.svg"
        alt="Back Button"
        class="back-button"
        @click="handleGoBack()"
      >
    </slot>
    <div class="header-title">
      <h2>
        {{ headerTitle }}
      </h2>
    </div>
    <slot name="header-right" />
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'BaseHeader',
  props: {
    headerTitle: {
      type: String,
      default: null,
    },
    isFixed: {
      type: Boolean,
      default: true,
    },
    isBackButton: {
      type: Boolean,
      default: false,
    },
    headerColor: {
      type: String,
      default: '#fff',
    },
  },
  methods: {
    handleGoBack () {
      consoel.log('a', a)
      window.history.go(-1)
    },
  },
})
</script>
<style lang="scss" scoped>
.base-header {
  width: 100vw;
  position: fixed;
  top: 0;
  height: 50px;
  display: flex;
  align-items:center;
}
.back-button {
  position: absolute;
}
.header-title {
  flex-grow: 1;
  text-align: center;
  > h2 {
    color: #333;
    font-size: 1.6rem;
    font-weight: bold;
  }
}
</style>
