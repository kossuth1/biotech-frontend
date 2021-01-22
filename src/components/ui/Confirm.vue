<template>
  <transition name="modal">
    <div class="modal d-block" v-if="show">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" @click="dismiss">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p><slot></slot></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="yes">
              Igen
            </button>
            <button type="button" class="btn btn-outline-primary" @click="no">
              Nem
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <div class="modal-backdrop fade show" v-if="show"></div>
</template>
<script>
export default {
  emits: ['dismiss', 'no', 'yes'],
  props: ['title', 'show'],
  methods: {
    yes() {
      this.$emit('yes');
    },
    no() {
      this.$emit('no');
    },
    dismiss() {
      this.$emit('dismiss');
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  opacity: 1;
  top: 50%;
  transform: translateY(-45%);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
}

.modal-enter-active,
.modal-enter-to {
  transition: 0.3s;
}

.btn-outline-primary {
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
}
</style>
