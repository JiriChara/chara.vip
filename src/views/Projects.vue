<template>
  <section class="section">
    <div class="container content">
      <h3>
        OrganisedMinds.com (2011)
      </h3>

      <div class="columns is-vcentered">
        <div class="column is-4-desktop is-6-tablet is-12-mobile">
          <img src="@/assets/organisedminds.png" />
        </div>

        <div class="column">
          <p>
            I got introduced into web application development in 2011 at a small start-up called
            <strong>OrganisedMinds</strong>. I was working as a full-stack developer with a focus on
            Ruby on Rails, jQuery and Backbone.js. <strong>OrganisedMinds.com</strong> was a business
            collaboration tool similar to Trello.
          </p>
        </div>
      </div>

      <h3>
        Minerals Value Service, Platts - McGraw Hill Financial (2014)
      </h3>

      <div class="columns is-vcentered">
        <div class="column is-4-desktop is-6-tablet is-12-mobile">
          <img src="@/assets/mvs.jpg" />
        </div>

        <div class="column">
          <p>
            <strong>Minerals Value Service</strong> provides data and analytics for the Iron Ore
            Industry. It contains information about steel plants, mines &amp; products, index
            prices and about the value in use. Users of <strong>Minerals Value Service</strong>
            gaining a deeper understanding of the market and identifying trading opportunities.
          </p>

          <p>
            I worked as a front-end developer at <strong>Minerals Value Service</strong> using
            primarily Angular, Highcharts, Google Maps, and SVG visualizations. The most
            challenging part was to provide excellent UX and to make the whole system smooth
            &amp; filterable.
          </p>
        </div>
      </div>

      <h3>
        AppDirect (2016)
      </h3>

      <div class="columns is-vcentered">
        <div class="column is-4-desktop is-6-tablet is-12-mobile">
          <img src="@/assets/appdirect.png" />
        </div>

        <div class="column">
          <p>
            <strong>AppDirect</strong> is a digital platform that helps businesses to
            accelerate sales of applications through their online store. It provides a market
            place as a service for huge enterprise corporations like Vodafone, Swisscom, Deutsche
            Telekom, Telstra, Comcast, ABB, etc. It contains top SaaS and IaaS applications
            including Microsoft Office 365, Box, G-Suite.
          </p>

          <p>
            <strong>AppDirect</strong> enables small companies to succeed by providing an API to
            monetize their applications through <strong>AppDirect</strong>'s ecosystem.
          </p>

          <p>
            As a senior front-end developer at <strong>AppDirect</strong>, I was responsible for
            building and technically designing complex features for mostly for purchase flow
            related topics. I had the opportunity to work on a large monolithic application and
            to help to split it into microservices. Most of the new features were implemented
            using React/Redux.
          </p>
        </div>
      </div>

      <h3>
        xbAV AG (now)
      </h3>

      <div class="columns is-vcentered">
        <div class="column is-4-desktop is-6-tablet is-12-mobile">
          <img src="@/assets/xbav.png" />
        </div>

        <div class="column">
          <p>
            The <strong>xbAV</strong> platform providing a solution for occupational retirement
            pension supporting multiple target groups from regular users, through agents toward
            employers, and insurer companies.
          </p>

          <p>
            I work as a senior front-end developer at <strong>xbAV</strong>. I am responsible for
            overall front-end architecture and building features and making them available for
            the whole platform. We focus on reusability, and therefore we are using patterns like
            micro front-ends and event sourcing. Our front-end is mainly built using Vue.js.
          </p>
        </div>
      </div>

      <h2>My Open Source Projects</h2>

      <h4>
        <a href="https://github.com/JiriChara/vue-kindergarten">vue-kindergarten</a>
      </h4>
      <p>
        <strong>vue-kindergarten</strong> a plugin for Vue.js that helps you to authorize your
        components, routes and the rest of your application in a highly modular way.
      </p>

      <h4>
        <a href="https://github.com/JiriChara/vuex-crud">vuex-crud</a>
      </h4>
      <p>
        <strong>vuex-crud</strong> is a library for Vuex state management, that helps developers
        to build CRUD modules easily.
      </p>

      <h4>
        <a href="https://github.com/JiriChara/vue-gravatar">vue-gravatar</a>
      </h4>
      <p>
        <strong>vue-gravatar</strong> is a dead-simple component to integrate Gravatar into your
        Vue.js application.
      </p>

      <h4>
        <a href="https://github.com/JiriChara/bavaria-ipsum">bavaria-ipsum</a>
      </h4>
      <p>
        <strong>bavaria-ipsum</strong> is a simple library that generates random Bavarian
        sentences.
      </p>
    </div>
  </section>
</template>

<script>
import { createComponent } from 'vue-function-api';

export default createComponent({
  metaInfo: {
    title: 'Works',
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

strong {
  color: $theme-color-1;
}
</style>
