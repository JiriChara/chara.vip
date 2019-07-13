<template>
  <section class="hero is-small">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered is-multiline">
          <div class="column is-6-tablet is-12-mobile me">
            <img src="@/assets/me.jpg" />
          </div>

          <div class="column is-6-tablet is-12-mobile title">
            <h1>
              Senior Front-End Developer <span>&amp;</span><br />
              JavaScript Enthusiast<br />
              Building Scalable,<br />
              Performant, Responsive <span>&amp;</span><br />
              Well Tested Web Applications<br />
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.title {
  h1 {
    span {
      color: $theme-color-1;
    }
  }

  @media only screen and (max-width: $tablet) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}

.me {
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (min-width: $tablet) {
    order: 1;
    justify-content: flex-end;
  }
}
</style>
