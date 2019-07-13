<template>
  <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          :to="{ name: 'Home' }"
          class="navbar-item logo"
        >
          <h1><span>J</span>iří <span>Ch</span>ára</h1>
        </router-link>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': isMobileMenuActive }"
          @click="onToggleMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        class="navbar-menu"
        :class="{ 'is-active': isMobileMenuActive }"
      >
        <div class="navbar-end">
          <router-link :to="{ name: 'Home' }" class="navbar-item">
            <span>Home</span>
          </router-link>

          <router-link :to="{ name: 'Projects' }" class="navbar-item">
            <span>Works</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, createComponent } from 'vue-function-api';
import { Context } from 'vue-function-api/dist/types/vue';

export default createComponent({
  setup(props, context: Context) {
    const { $store } = context.root;

    const isMobileMenuActive = computed(() => $store.state.navbar.isMobileMenuActive);

    const onToggleMobileMenu = () => {
      $store.dispatch('navbar/toggleMobileMenu');
    };

    return {
      isMobileMenuActive,
      onToggleMobileMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.navbar-end .navbar-item {
  &.router-link-exact-active {
    background-color: transparent !important;
    ::first-letter {
      color: $theme-color-4;
    }
  }

  &:hover, &:focus, &:active {
    background-color: transparent !important;
  }
}

.logo {
  font-size: 35px;

  &:hover, &:focus, &:active {
    background-color: transparent !important;
  }
  span {
    color: $theme-color-4;
  }
}
</style>
