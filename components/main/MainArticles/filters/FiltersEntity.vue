<template>
  <div class="filter-entity-wrapper">
    <div class="filter-entity">
      <img
        :src="require(`~/assets/images/icons/${iconName}.svg`)"
        :alt="`${iconName} Icon`"
      >
      <v-select
        :items="itemTextArr"
        :value="itemTextArr[0]"
        :width="selectWidth"
        @change="$emit('filter-select', $event)"
      />
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'FiltersEntity',
})
</script>
<style lang="scss" scoped>
::v-deep .v-select__slot {
  font-size: 1.3rem;
  font-family: 'Khn-heading';
  height: 3rem;
}

::v-deep .v-select__selections {
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  .v-select__selection {
    display: flex;
    justify-content: center;
  }
}
.filter-entity {
  display: flex;
  align-items: center;
  width: 10rem;
  margin-right: 1rem;
  > img {
    width: 18px;
    pointer-events: none;
  }
  p {
    font-size: 1.4rem;
    font-weight: 500;
    margin-left: 0.3rem;
  }
}
</style>
