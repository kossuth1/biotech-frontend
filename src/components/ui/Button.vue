<template>
  <button class="btn" :class="[modeClass, iconPlacementClass]">
    <Fa v-if="icon && iconPlacement === 'left'" :icon="icon" />
    <slot></slot>
    <Fa v-if="icon && iconPlacement === 'right'" :icon="icon" />
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: 'primary'
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    iconPlacement: {
      type: String,
      required: false,
      default: 'left'
    }
  },

  computed: {
    modeClass() {
      let mode = this.mode;
      if (mode === 'secondary') {
        mode = 'outline-primary';
      }
      return `btn-${mode}`;
    },
    iconPlacementClass() {
      return `icon-${this.iconPlacement}`;
    }
  }
};
</script>

<style lang="scss" scoped>
$btn-disabled-bg: #eff1f1;
$btn-disabled-color: #b6bec3;

.btn {
  padding-top: 20px;
  padding-bottom: 16px;
  max-width: 256px;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 16px;

  &:disabled {
    color: $btn-disabled-color;
    background-color: $btn-disabled-bg;
    border-color: $btn-disabled-bg;
  }

  &-outline-primary {
    border-width: 2px;

    &:hover,
    &:active {
      background-color: white !important;
    }

    &:hover {
      border-color: darken($primary, 15%);
      color: darken($primary, 15%);
    }

    &:active {
      border-color: darken($primary, 25%) !important;
      color: darken($primary, 25%) !important;
    }

    &:disabled {
      border: 2px solid $btn-disabled-color;
      background-color: white;

      &:hover {
        color: $btn-disabled-color;
      }
    }
  }

  svg {
    width: 16px;
    height: 16px;
  }

  &.icon-left svg {
    margin-right: 16px;
  }

  &.icon-right svg {
    margin-left: 16px;
  }
}
</style>
