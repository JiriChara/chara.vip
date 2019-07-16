<template>
  <header class="header">
    <div class="columns name-and-me">
      <div class="column is-hidden-mobile is-8-desktop">
        <h3>Curriculum vitae</h3>
      </div>

      <div class="column is-12-mobile is-7-tablet is-4-desktop">
        <img src="@/assets/me-cv.jpg" class="me" alt="Jiří Chára" />
      </div>
    </div>
    <hr />

    <dl>
      <dd><small>Cell: +49 163 8522883</small></dd>
      <dd><small>Email: jiri@chara.vip</small></dd>
    </dl>

    <div class="columns">
      <div class="column is-8-desktop is-6-tablet is-12-mobile">
        <em>
          <small>
            Web Development is my passion! My professional adventure with the web started in early
            2011 and will continue for the foreseeable future. I love to learn new things and to
            improve myself as a person. My lifelong goal is to <strong>#BeatYesterday</strong>!
            These days I specialize in building high performing single-page and progressive
            applications using JavaScript and TypeScript. I love contributing to open-source
            software and extending the ecosystem of JavaScript with helpful libraries and tools. I
            am always up-to-date with current trends and technologies, but I do not blindly follow
            the mainstream!
          </small>
        </em>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

hr {
  background-color: $theme-color-4;
  border: none;
  display: block;
  height: 2px;
  margin: 0 0 .3rem 0;
}

h3 {
  margin-bottom: 0;
}

strong {
  color: $theme-color-1;
}

dd {
  margin-left: 0;
}

em {
  color: $grey;
}

.name-and-me {
  margin-bottom: 0;
}

.me {
  position: absolute;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  background-color: $white;
  transform: rotate(-3deg);
  top: $gap;
  right: $gap;

  @media only screen and (max-width: $tablet) {
    transform: rotate(0deg);
    position: static;
    top: auto;
    right: auto;
    margin-top: 0;
  }
}
</style>
