<template>
  <form @submit.prevent="submit">
    <Pane>
      <template #header>Add meg az alapadataidat a kalkulációhoz</template>
      <Input
        id="firstName"
        label="Keresztneved"
        @input="input"
        :isValid="firstName.isValid"
        :value="firstName.value"
      />
      <Input
        id="age"
        label="Korod"
        type="range"
        min="0"
        max="99"
        suffix="év"
        @input="input"
        :isValid="age.isValid"
        :value="age.value"
      />
      <Select
        id="gender"
        label="Nemed"
        :options="[
          { value: 'male', label: genders.male, icon: 'mars' },
          { value: 'female', label: genders.female, icon: 'venus' }
        ]"
        @change="change"
        :isValid="gender.isValid"
        :value="gender.value"
      />
      <template #footer>
        <Button
          :disabled="!formIsValid"
          class="float-right"
          icon="chevron-right"
          iconPlacement="right"
        >
          Tovább
        </Button>
      </template>
    </Pane>
  </form>
</template>

<script>
export default {
  inject: ['next', 'genders'],
  data() {
    return {
      firstName: {
        value: this.$store.getters.firstName,
        isValid: true
      },
      age: {
        value: this.$store.getters.age,
        isValid: true
      },
      gender: {
        value: this.$store.getters.gender,
        isValid: true
      }
    };
  },
  computed: {
    formIsValid() {
      return this.firstName.value && this.age.value && this.gender.value;
    }
  },
  methods: {
    input(input) {
      this[input.id].value = input.value;
      this.validate(input);
    },
    change(input) {
      this.input(input);
    },
    validate(input) {
      this[input.id].isValid = !!input.value;
    },
    submit() {
      if (this.formIsValid) {
        this.$store.dispatch('preserve', {
          firstName: this.firstName.value,
          age: this.age.value,
          gender: this.gender.value
        });
        this.next();
      }
    }
  }
};
</script>
