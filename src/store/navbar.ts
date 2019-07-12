import { Module, ActionTree, MutationTree } from 'vuex';

import { RootState, NavbarState } from '@/store//types';

const namespaced: boolean = true;

const initialState: NavbarState = {
  isMobileMenuActive: false,
};

const actions: ActionTree<NavbarState, RootState> = {
  toggleMobileMenu({ commit }): any {
    commit('toggleMobileMenu');
  },

  hideMobileMenu({ commit }) {
    commit('hideMobileMenu');
  },
};

const mutations: MutationTree<NavbarState> = {
  toggleMobileMenu(state) {
    state.isMobileMenuActive = !state.isMobileMenuActive;
  },

  hideMobileMenu(state) {
    state.isMobileMenuActive = false;
  },
};

const navbarModule: Module<NavbarState, RootState> = {
  namespaced,
  state: initialState,
  actions,
  mutations,
};

export default navbarModule;
