<template>
  <transition name="splash">
    <div v-if="loading" class="splash">
      BMI kalkulátor <Fa class="ml-5" icon="dumbbell" spin />
    </div>
  </transition>
  <header class="container-fluid">
    <slot></slot>
  </header>
</template>

<script>
export default {
  props: ['loading']
};
</script>

<style lang="scss" scoped>
header {
  color: $black;
  padding-bottom: 20px;
  padding-top: 20px;
}

.splash {
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background-image: linear-gradient($primary 70%, white);
  color: white;

  &-leave {
    &-from {
      opacity: 1;
    }

    &-active {
      transition: 0.5s;
    }

    &-to {
      opacity: 0;
    }
  }
}

header,
.splash {
  @font-face {
    font-family: Monserrat;
    src: url('../assets/fonts/Montserrat-Regular.ttf');
  }

  font-family: Monserrat;
  text-align: center;
  font-size: 72px;
  font-weight: bold;
  z-index: 10;
  display: flex;
  place-content: center;
  align-items: center;
}
</style>
