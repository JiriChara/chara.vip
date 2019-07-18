<template>
  <main>
    <section class="section">
      <div class="container content">
        <cv-header />
      </div>
    </section>

    <section class="section">
      <div class="container content">
        <div class="columns">
          <div class="column is-4-tablet left-column">
            <h4>Employement History</h4>
          </div>

          <div class="column is-8">
            <h5>xbAV AG</h5>

            <em>
              <small class="job-title">
                Senior Front-End Engineer - Munich, Germany - April 1st 2018 until now
              </small>
            </em>
            <p>
              The <strong>xbAV</strong> platform digitalizes occupational retirement pensions in
              Germany. It provides a solution for all target groups involved. As a senior front-end
              engineer at <strong>xbAV</strong>, I am responsible for overall architecture on
              front-end and for building features, that are available to reuse for the whole
              platform. I also maintain &amp; build a design system of reusable components and
              patterns. Each service in the platform is integrated using Docker and Kubernetes.
            </p>

            <hr />
          </div>
        </div>

        <div class="columns">
          <div class="column is-4-tablet left-column">
          </div>

          <div class="column is-8">
            <h5>AppDirect, Inc.</h5>

            <em>
              <small class="job-title">
                Senior Front-End Engineer - Munich, Germany - October 1st 2015 until February 28th
                2018
              </small>
            </em>
            <p>
              <strong>AppDirect</strong> is a digital platform that helps other businesses to
              succeed by offering them multiple SaaS solutions. As I senior front-end engineer, I
              was responsible for building important features for monetization suite using React.js.
              I helped <strong>AppDirect</strong> to provide a theme and additional functionality
              for a couple of major customers including Vodafone, Swisscom, Deutsche Telekom, etc.
            </p>

            <hr />
          </div>
        </div>

        <div class="columns">
          <div class="column is-4-tablet left-column">
          </div>

          <div class="column is-8">
            <h5>S&P Global Platts</h5>

            <em>
              <small class="job-title">
                Front-End Engineer - Munich, Germany - August 1st 2014 until September 30th 2015
              </small>
            </em>
            <p>
              <strong>S&amp;P Global Platts</strong> originally Minerals Value Service is an
              analytical tool for the iron&amp;ore industry. I worked there as a front-end
              developer using mostly Angular.js, Highcharts, Google Maps API &amp; SVG animations.
              Minerals Value Service was a full single-page-application communicating with
              back-end through JSON APIs.
            </p>

            <hr />
          </div>
        </div>

        <div class="columns">
          <div class="column is-4-tablet left-column">
          </div>

          <div class="column is-8">
            <h5>OrganisedMinds GmbH</h5>

            <em>
              <small class="job-title">
                Full-Stack Engineer - Karlsruhe, Germany - March 14th 2011 until July 31st 2014
              </small>
            </em>
            <p>
              As a full-stack engineer at <strong>OrganisedMinds</strong>, I was responsible for
              building new features using Ruby on Rails, jQuery &amp; Backbone.js.
              <strong>OrganisedMinds</strong> was a real-time application with a lot of advanced
              drag&amp;drop features at that time. It was my first job as a web developer.
            </p>

            <hr />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { createComponent } from 'vue-function-api';

import CvHeader from '@/components/cv/Header.vue';

export default createComponent({
  components: {
    CvHeader,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

strong {
  color: $theme-color-1;
}

.left-column {
  padding-bottom: 0;

  @media only screen and (min-width: $tablet) {
    border-right: 2px solid $theme-color-4;
  }
}

.job-title {
  color: $grey;
}

ul {
  margin-top: 0;
}

h5 {
  color: $theme-color-1;
}

hr {
  margin-bottom: 0;
}
</style>
