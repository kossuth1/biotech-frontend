<template>
  <form @submit.prevent="submit">
    <Pane>
      <template #header>Add meg a méreted és a súlyodat a számításhoz</template>
      <Input
        id="height"
        type="number"
        label="Magasságod"
        append="cm"
        @input="input"
        :isValid="height.isValid"
        :value="height.value"
      />
      <Input
        type="number"
        id="weight"
        label="Súlyod"
        append="kg"
        v-model:number="weight"
        @input="input"
        :isValid="weight.isValid"
        :value="weight.value"
      />
      <Pane
        >A Te neved <span class="blue">{{ firstName }}</span
        >, <span class="blue">{{ age }}</span> éves vagy és
        <span class="blue">{{ genders[gender] }}</span
        >. A testsúlyod <span class="blue">{{ weight.value || '?' }}</span> kg
        és <span class="blue">{{ height.value / 100 || '?' }}</span> méter magas
        vagy. Amennyiben szeretnéd megtudni a BMI értékedet, kattints a
        Befejezés gombra.</Pane
      >
      <template #footer>
        <div class="d-flex justify-content-between">
          <Button type="button" icon="chevron-left" @click="backClick"
            >Vissza</Button
          >
          <Button type="button" icon="times" @click="modal('open')"
            >Törlés</Button
          >
          <Button
            :disabled="!formIsValid"
            icon="chevron-right"
            iconPlacement="right"
            class="float-right"
          >
            Befejezés
          </Button>
        </div>
      </template>
    </Pane>
    <teleport to="body">
      <Confirm
        :show="showConfirm"
        title="Megerősítés"
        @dismiss="modal('dismiss')"
        @no="modal('cancel')"
        @yes="modal('confirm')"
        >Biztosan törlöd az adatokat?</Confirm
      >
    </teleport>
  </form>
</template>

<script>
import { Confirm } from '../../../components/ui';
export default {
  components: { Confirm },
  inject: ['back', 'calculate', 'genders', 'clear'],
  data() {
    return {
      height: {
        value: this.$store.getters.height,
        isValid: true
      },
      weight: {
        value: this.$store.getters.weight,
        isValid: true
      },
      showConfirm: false
    };
  },
  computed: {
    formIsValid() {
      return this.height.value && this.weight.value;
    },

    firstName() {
      return this.$store.getters.firstName;
    },

    age() {
      return this.$store.getters.age;
    },

    gender() {
      return this.$store.getters.gender;
    }
  },
  methods: {
    input(input) {
      this[input.id].value = input.value;
      this.validate(input);
    },
    validate(input) {
      this[input.id].isValid = !!input.value;
    },
    submit() {
      this.$store.dispatch('preserve', {
        height: this.height.value,
        weight: this.weight.value
      });

      this.formIsValid && this.calculate();
    },
    backClick() {
      this.$store.dispatch('preserve', {
        height: this.height.value,
        weight: this.weight.value
      });

      this.back();
    },
    modal(action) {
      switch (action) {
        case 'open':
          this.showConfirm = true;
          break;
        case 'confirm':
          this.showConfirm = false;
          setTimeout(() => this.clear(), 400);
          break;
        case 'cancel':
        case 'dismiss':
          this.showConfirm = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.blue {
  font-weight: bold;
  color: $primary;
}
</style>
