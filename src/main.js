import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { Button, Input, Pane, Select } from './components/ui';

import './assets/scss/app.scss';

library.add(fas);

createApp(App)
  .component('Button', Button)
  .component('Input', Input)
  .component('Pane', Pane)
  .component('Select', Select)
  .component('Fa', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
