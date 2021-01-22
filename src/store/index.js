import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    firstName: '',
    age: 0,
    gender: null,
    height: null,
    weight: null
  }),
  mutations: {
    preserve(state, payload) {
      for (const key in payload) {
        state[key] = payload[key];
      }
    },
    clear(state) {
      state.firstName = '';
      state.age = 0;
      state.gender = null;
      state.height = null;
      state.weight = null;
    }
  },
  actions: {
    preserve(context, data) {
      context.commit('preserve', data);
    },
    clear(context) {
      context.commit('clear');
    }
  },
  getters: {
    firstName(state) {
      return state.firstName;
    },
    age(state) {
      return state.age;
    },
    gender(state) {
      return state.gender;
    },
    height(state) {
      return state.height;
    },
    weight(state) {
      return state.weight;
    }
  }
});
