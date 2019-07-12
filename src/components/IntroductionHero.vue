<template>
  <section class="hero is-small">
    <div class="hero-body">
      <div class="container">
        <div class="me">
          <img src="@/assets/me.jpg" />
        </div>
 
        <div class="title">
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
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  h1 {
    span {
      color: $theme-color-1;
    }
  }
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1235px) {
    justify-content: center;
  }
}

.me {
  @media only screen and (min-width: 1235px) {
    order: 1;
    margin-bottom: $gap;
  }
}
</style>