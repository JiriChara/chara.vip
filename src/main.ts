import Vue from 'vue';
import Buefy from 'buefy';
import { plugin } from 'vue-function-api';
import VueProgressBar from 'vue-progressbar';

import '@fortawesome/fontawesome-free/css/all.css';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import '@/registerServiceWorker';

import '@/styles/main.scss';

Vue.config.productionTip = false;

const progressbarOptions = {
  color: '#0396A6',
  failedColor: '#874b4b',
  thickness: '5px',
};

Vue.use(plugin);
Vue.use(Buefy);
Vue.use(VueProgressBar, progressbarOptions);

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

app.$mount('#app');
