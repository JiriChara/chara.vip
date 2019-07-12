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
      path: '/resume',
      name: 'Resume',
      component: () => import(/* webpackChunkName: "resume" */ './views/Resume.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  store.dispatch('navbar/hideMobileMenu');

  next();
});

export default router;
