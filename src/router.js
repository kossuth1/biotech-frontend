import { createRouter, createWebHistory } from 'vue-router';

import { Calculator } from './pages/calculator/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/calculator' },
    { path: '/calculator', component: Calculator },
    { path: '/:notFound(.*)', redirect: '/calculator' }
  ]
});

export default router;
