<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Copyright © {{ currentYear }} Jiří Chára. All Rights Reserved.
      </p>
      <p>
        The source code of this website is available on
        <a href="https://github.com/JiriChara/chara.vip">GitHub</a>
        and is licensed under
        <a href="https://opensource.org/licenses/MIT">MIT</a>
        .
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { createComponent } from 'vue-function-api';

export default createComponent({
  setup() {
    const currentYear = new Date().getFullYear();

    return {
      currentYear,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.footer {
  background-color: $theme-color-2;
}
</style>