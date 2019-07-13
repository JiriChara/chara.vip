<template>
  <div id="app">
    <jch-navbar />

    <router-view />

    <vue-progress-bar />

    <jch-footer />
  </div>
</template>

<script>
import { onMounted, onCreated, createComponent } from 'vue-function-api';

import JchNavbar from '@/components/Navbar.vue';
import JchFooter from '@/components/Footer.vue';

export default createComponent({
  components: {
    JchNavbar,
    JchFooter,
  },

  setup(props, { root }) {
    const { $Progress, $router } = root;

    onMounted(() => $Progress.finish());

    onCreated(()=> {
      $Progress.start();

      $router.beforeEach((to, from, next) => {
        $Progress.start()
        next()
      });

      $router.afterEach((to, from) => {
        $Progress.finish();
      });
    });
  },
});
</script>
