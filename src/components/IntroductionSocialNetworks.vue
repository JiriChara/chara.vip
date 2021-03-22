<template>
  <section class="section content">
    <div class="container">
      <p>Welcome visitor!</p>


      <p>
        My name is Jiří Chára and I currently work as a senior front-end developer at
        <a href="https://www.xbav.de">xbAV</a>. I live in Munich, but I can call many
        places home. I love traveling, music, spicy food, running, coconuts, Thailand, sun,
        drones and making long comma-separated lists.
      </p>

      <p>
        I am passionate about building excellent software that improves the lives of those around
        me. I specialize in creating software for clients ranging from small businesses to large
        enterprise corporations. I like to build and contribute to open source to help other
        developers becoming productive and more successful.
      </p>

      <hr />

      <p>
        Let's connect on
        <a
          href="https://www.linkedin.com/in/jirichara"
          class="linkedin"
        >
          <b-icon
            icon="linkedin"
            pack="fab" />
          LinkedIn
        </a>
        or
        <a
          href="https://www.xing.com/profile/Jiri_Chara"
          class="xing"
        >
          <b-icon
            icon="xing"
            pack="fab" />
          Xing</a>.
      </p>

      <p>
        Get a glimpse of my life story on
        <a
          href="https://www.instagram.com/ch4rasss"
          class="instagram"
        >
          <b-icon
            icon="instagram"
            pack="fab" />
          Instagram</a>.
      </p>

      <p>
        Check my code on
        <a
          href="https://github.com/JiriChara"
          class="github"
        >
          <b-icon
            icon="github"
            pack="fab" />
          GitHub</a>.
      </p>

     <p>
        Get inspired by my music taste on
        <a
          href="https://www.last.fm/user/Ch4rAss"
          class="lastfm"
        >
          <b-icon
            icon="lastfm"
            pack="fab" />
          last.fm
        </a>
        or
        <a
          href="https://open.spotify.com/user/11147851210?si=BaujJV8wR3G9JGHWy0ZRfg"
          class="spotify"
        >
          <b-icon
            icon="spotify"
            pack="fab" />
          Spotify</a>.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

$darken: 20%;

.linkedin {
  color: $linkedin;
  &:hover {
    color: darken($linkedin, $darken);
  }
}

.xing {
  color: $xing;
  &:hover {
    color: darken($xing, $darken);
  }
}

.instagram {
  color: $instagram;
  &:hover {
    color: darken($instagram, $darken);
  }
}

.github {
  color: $github;
  &:hover {
    color: darken($github, $darken);
  }
}

.lastfm {
  color: $lastfm;
  &:hover {
    color: darken($lastfm, $darken);
  }
}

.spotify {
  color: $spotify;
  &:hover {
    color: darken($spotify, 10%);
  }
}
</style>
