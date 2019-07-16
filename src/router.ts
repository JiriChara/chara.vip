import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store';
import Home from '@/views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/projects',
      name: 'Projects',
      component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue'),
    },

    {
      path: '/cv',
      name: 'CurriculumVitae',
      component: () => import(/* webpackChunkName: "cv" */ './views/CurriculumVitae.vue'),
    },

    {
      path: '*',
      name: 'not-found',
      component: () => import(/* webpackChunkName: "notfound" */ './views/NotFound.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  store.dispatch('navbar/hideMobileMenu');

  next();
});

export default router;
