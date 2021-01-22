<template>
  <Header :loading="loading">BMI kalkulátor</Header>
  <div class="container py-5 position-relative">
    <router-view></router-view>
  </div>
</template>

<script>
import { Header } from './components';
export default {
  components: { Header },
  data: () => ({
    mounted: false,
    loading: true
  }),
  created() {
    const loading = setInterval(() => {
      if (this.mounted) {
        clearInterval(loading);
        this.loading = false;
      }
    }, 1000);
  },
  mounted() {
    this.mounted = true;
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: Roboto;
  src: url('./assets/fonts/Roboto-Regular.ttf');
}

body {
  background-image: url('./assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
