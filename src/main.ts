import Vue from 'vue';
import Buefy from 'buefy';
import { plugin } from 'vue-function-api';

import '@fortawesome/fontawesome-free/css/all.css';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import '@/registerServiceWorker';

import '@/styles/main.scss';

Vue.config.productionTip = false;

Vue.use(plugin);
Vue.use(Buefy);

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

app.$mount('#app');
