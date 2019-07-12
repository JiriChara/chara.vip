import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
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
      component: () => import(/* webpackChunkName: "about" */ './views/Projects.vue'),
    },

    {
      path: '/resume',
      name: 'Resume',
      component: () => import(/* webpackChunkName: "about" */ './views/Resume.vue'),
    },
  ],
});
