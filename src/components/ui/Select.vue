<template>
  <div class="form-group row">
    <label class="col-md-2 pt-3" v-if="label">{{ label }}</label>
    <div class="input-group col-md-8">
      <div class="dropdown">
        <button type="button" @click="toggle" class="btn btn-outline-secondary">
          <span v-if="currentValue">
            <Fa v-if="selected.icon === 'mars'" icon="mars" />
            <Fa v-if="selected.icon === 'venus'" icon="venus" />
            <span class="ml-3">{{ selected.label }}</span>
          </span>
          <span v-else>Válassz!</span>
          <Fa class="DropdownIcon" v-if="opened" icon="chevron-up" />
          <Fa class="DropdownIcon" v-else icon="chevron-down" />
        </button>
        <div v-show="opened" class="dropdown-menu show">
          <a
            v-for="option in options"
            :id="id"
            :value="option.value"
            :key="option.value"
            class="dropdown-item"
            :class="{ active: option.value === currentValue }"
            @click="select(option.value)"
            href="javascript:void(0)"
          >
            <Fa :icon="option.icon" /><span class="ml-3">{{
              option.label
            }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['change'],
  data() {
    return {
      currentValue: this.value,
      opened: false
    };
  },
  props: ['id', 'value', 'options', 'label'],
  computed: {
    selected() {
      return this.options.find(({ value }) => this.currentValue === value);
    }
  },
  methods: {
    select(value) {
      this.currentValue = value;
      this.opened = false;
      this.$emit('change', {
        id: this.id,
        value: this.currentValue
      });
    },

    toggle() {
      this.opened = !this.opened;
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  padding-top: 20px;
  padding-bottom: 16px;
  line-height: 16px;
  border: 1px solid $gray-300;
  color: $black;
  font-weight: initial;
  text-transform: initial;
  width: 100%;
  text-align: left;

  &:hover,
  &:active {
    background: white !important;
    color: $black !important;
    border-color: $gray-300 !important;
  }

  .DropdownIcon {
    float: right;
    width: 16px;
    height: 16px;
  }
}

.dropdown {
  max-width: 256px;
  width: 100%;

  &-menu {
    width: 100%;
  }

  &-item {
    padding-top: 12px;
    padding-bottom: 12px;
  }
}
</style>
