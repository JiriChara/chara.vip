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
  position: relative;
  background-color: $theme-color-2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 100%;
    background: url('../assets/rip.svg') bottom center;
  }
}
</style>
