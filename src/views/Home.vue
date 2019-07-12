<template>
  <main>
    <introduction-hero />
    <introduction-social-networks />
  </main>
</template>

<script>
import { createComponent } from 'vue-function-api';

import IntroductionHero from '@/components/IntroductionHero.vue';
import IntroductionSocialNetworks from '@/components/IntroductionSocialNetworks.vue';

export default createComponent({
  components: {
    IntroductionHero,
    IntroductionSocialNetworks,
  }
});
</script>