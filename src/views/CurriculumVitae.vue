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

          <div class="column is-8 first-right-column">
            <strong>xbAV AG</strong>

            <em>
              <small class="job-title">
                Senior Front-End Engineer - Munich, Germany - April 1st 2018 until now
              </small>
            </em>
            <ul>
              <li><small>responsible for implementation of new features using Vue.js</small></li>
              <li><small>responsible for front-end architecture</small></li>
              <li>
                <small>
                  responsible for building of reusable components and for the maintanance of
                  internal design system
                </small>
              </li>
              <li><small>responsible for mentoring and teaching other employees</small></li>
              <li>
                <small>
                  responsible for re-factoring of large monolithic application into
                  micro-services/micro-front-ends
                </small>
              </li>
              <li>
                <small>
                  responsible for integration of front-end services into the platform using Docker
                  &amp; Kubernetes
                </small>
              </li>
            </ul>
          </div>
        </div>

        <div class="columns">
          <div class="column is-4-tablet left-column">
          </div>

          <div class="column is-8">
            <strong>AppDirect, Inc.</strong>

            <em>
              <small class="job-title">
                Senior Front-End Engineer - Munich, Germany - October 1st 2015 until February 28th 2018
              </small>
            </em>
            <ul>
              <li>
                <small>
                  responsible for implementation and technical design of new features using React
                  and Backbone.js
                </small>
              </li>
              <li>
                <small>
                  responsible for code reviewing and contributing to core platform
                </small>
              </li>
              <li>
                <small>
                  responsible for refactoring of purchase flow into React
                </small>
              </li>
            </ul>
          </div>
        </div>

        <div class="columns">
          <div class="column is-4-tablet left-column">
          </div>

          <div class="column is-8">
            <strong>S&P Global Platts</strong>

            <em>
              <small class="job-title">
                Front-End Engineer - Munich, Germany - August 1st 2014 until September 30th 2015
              </small>
            </em>
            <ul>
              <li>
                <small>
                  responsible for implementation of SPA using Angular.js
                </small>
              </li>
              <li>
                <small>
                  responsible for implementation of complex charts using Highcharts
                </small>
              </li>
              <li>
                <small>
                  worked with Google Maps API
                </small>
              </li>
            </ul>
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

.first-right-column {
  @media only screen and (max-width: $tablet) {
    padding-top: 0;
  }
}

.job-title {
  margin-left: $gap;
  color: $grey;
}

ul {
  margin-top: 0;
}
</style>
