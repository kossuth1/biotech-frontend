<template>
  <transition name="pane" class="shadow">
    <component :is="panes[activePane]"></component>
  </transition>
</template>

<script>
import { BasicData, TechnicalData, Result } from './panes';
export default {
  components: { BasicData, TechnicalData, Result },
  data: () => ({
    activePane: 0,
    panes: ['basicData', 'technicalData', 'result'],
    personalData: {}
  }),
  computed: {
    first() {
      return 0;
    }
  },
  provide() {
    return {
      next: this.next,
      back: this.back,
      restart: this.restart,
      edit: this.edit,
      calculate: this.calculate,
      clear: this.clear,
      genders: { male: 'Férfi', female: 'Nő' }
    };
  },
  methods: {
    next() {
      this.activePane++;
    },

    back() {
      this.activePane--;
    },

    restart() {
      this.$store.dispatch('clear');
      this.activePane = this.first;
    },

    edit() {
      this.activePane--;
    },

    clear() {
      this.$store.dispatch('clear');
      this.activePane = this.first;
    },

    calculate() {
      this.next();
    }
  }
};
</script>

<style lang="scss" scoped>
.pane {
  &-enter {
    &-from {
      opacity: 0;
      transform: translateX(50px);
    }

    &-active {
      transition: 0.3s;
      position: absolute;
      width: calc(100% - 27px);
    }

    &-to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &-leave {
    &-from {
      opacity: 1;
      transform: translateX(0);
    }

    &-active {
      transition: 0.3s;
      position: absolute;
      width: calc(100% - 27px);
    }

    &-to {
      opacity: 0;
      transform: translateX(50px);
    }
  }
}
</style>
