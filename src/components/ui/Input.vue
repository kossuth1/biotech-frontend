<template>
  <div class="form-group row">
    <label class="col-md-2 pt-3" v-if="label">{{ label }}</label>
    <div class="input-group col-md-8">
      <div v-if="prepend" class="input-group-prepend">
        <span class="input-group-text">{{ prepend }}</span>
      </div>
      <input
        :type="type"
        class="input-danger"
        :class="inputClass"
        :placeholder="placeholder"
        :id="id"
        @input="input"
        :value="currentValue"
      />
      <div v-if="append" class="input-group-append">
        <span class="input-group-text">{{ append }}</span>
      </div>
      <small v-if="!isValid" class="invalid-feedback">
        Mező kitöltése kötelező
      </small>
      <small class="form-text text-muted" v-if="type === 'range'">
        {{ currentValue }} {{ suffix }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['input'],
  data() {
    return {
      currentValue: this.value
    };
  },
  props: [
    'id',
    'type',
    'placeholder',
    'prepend',
    'append',
    'label',
    'min',
    'max',
    'suffix',
    'value',
    'isValid'
  ],
  computed: {
    inputClass() {
      return this.type === 'range' ? 'form-control-range' : 'form-control';
    }
  },
  methods: {
    input(e) {
      const value = e.target.value;
      this.currentValue = value;
      this.$emit('input', { id: this.id, value: value });
    }
  }
};
</script>

<style lang="scss" scoped>
.invalid-feedback {
  display: block;
  width: 100%;
  height: 24px;
  padding: 3px 8px 3px 16px;
}
.input-group {
  margin-bottom: 32px;
}

input.form-control {
  width: 100%;
  max-width: 256px;
  height: 56px;
}

.input-group-append,
.input-group-prepend {
  height: 56px;
}
</style>
