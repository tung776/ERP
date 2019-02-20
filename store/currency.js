export const actions = {
  setAllCurrencies({ commit }, allCurrencies) {
    commit("SET_ALL_CURRENCIES", allCurrencies);
  },
  setListCurrencies({ commit }, listCurrencies) {
    commit("SET_LIST_CURRENCIES", listCurrencies);
  }
};

export const getters = {
  allCurrencies(state) {
    return state.allCurrencies;
  },
  listCurrencies(state) {
    return state.listCurrencies;
  }
};

export const state = () => ({
  allCurrencies: null,
  listCurrencies: null
});

export const mutations = {
  SET_ALL_CURRENCIES(state, allCurrencies) {
    state.allCurrencies = allCurrencies;
  },
  SET_LIST_CURRENCIES(state, listCurrencies) {
    state.listCurrencies = listCurrencies;
  }
};
