<template>
  <div class="card">
    <div v-if="headerProvided" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div v-if="footerProvided" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    headerProvided() {
      return this.$slots.header;
    },

    footerProvided() {
      return this.$slots.footer;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  &-header {
    font-size: 24px;
  }
}
</style>
