<template>
  <div id="app">
    <jch-navbar />

    <router-view/>

    <jch-footer />
  </div>
</template>

<script>
import JchNavbar from '@/components/Navbar.vue';
import JchFooter from '@/components/Footer.vue';

export default {
  components: {
    JchNavbar,
    JchFooter,
  },
};
</script>
