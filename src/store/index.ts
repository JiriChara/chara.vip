import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import navbar from '@/store/navbar';
import { RootState } from '@/store/types';

import { version } from '@/../package.json';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version,
  },

  modules: {
    navbar,
  },
};

export default new Vuex.Store<RootState>(store);
