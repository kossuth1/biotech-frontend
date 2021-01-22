<template>
  <Pane>
    <template #header>Számítás eredménye</template>
    <div v-if="loading">Számítás... <Fa icon="cog" spin /></div>
    <div v-else>
      <Pane class="text-center">
        <p class="h2">A Te BMI értéked</p>
        <p class="h1 my-5">
          <strong :class="bmiColorClass">{{ bmi }}</strong>
        </p>
        <p class="h4">
          ami alapján a(z) <strong>{{ classification }}</strong> csoportba
          tartozol
        </p>
      </Pane>
    </div>
    <template #footer>
      <div class="d-flex justify-content-between">
        <Button :disabled="loading" icon="chevron-left" @click="edit"
          >Módosítom az előzőt</Button
        >
        <Button :disabled="loading" icon="redo" @click="restart"
          >Kitöltöm újra</Button
        >
      </div>
    </template>
  </Pane>
</template>

<script>
export default {
  inject: ['restart', 'edit'],
  data: () => ({
    loading: true,
    classifications: {
      16: 'súlyos soványság',
      16.99: 'mérsékelt soványság',
      18.49: 'enyhe soványság',
      24.99: 'normális testsúly',
      29.99: 'túlysúlyos',
      34.99: 'I. fokú elhízás',
      39.99: 'II. fokú elhízás'
    }
  }),
  computed: {
    bmi() {
      const bmi = this.weight / this.height ** 2;
      return Math.round((bmi + Number.EPSILON) * 100) / 100;
    },
    weight() {
      console.log(this.$store.getters.weight);
      return this.$store.getters.weight;
    },
    height() {
      return this.$store.getters.height / 100;
    },
    classification() {
      for (const bmi in this.classifications) {
        if (this.bmi < bmi) {
          return this.classifications[bmi];
        }
      }

      return 'III. fokú (súlyos) elhízás';
    },
    bmiColorClass() {
      return this.$store.getters.gender === 'male' ? 'blue' : 'pink';
    }
  },
  created() {
    setTimeout(() => (this.loading = false), 3000);
  }
};
</script>

<style lang="scss" scoped>
.blue {
  color: $primary;
}

.pink {
  color: pink;
}
</style>
