export const actions = {
  setAllPaymenMethods({ commit }, allPaymenMethods) {
    commit("SET_ALL_PaymenMethods", allPaymenMethods);
  },
  setListPaymenMethods({ commit }, listPaymenMethods) {
    commit("SET_LIST_PaymenMethods", listPaymenMethods);
  }
};

export const getters = {
  allPaymenMethods(state) {
    return state.allPaymenMethods;
  },
  listPaymenMethods(state) {
    return state.listPaymenMethods;
  }
};

export const state = () => ({
  allPaymenMethods: null,
  listPaymenMethods: null
});

export const mutations = {
  SET_ALL_PaymenMethods(state, allPaymenMethods) {
    state.allPaymenMethods = allPaymenMethods;
  },
  SET_LIST_PaymenMethods(state, listPaymenMethods) {
    state.listPaymenMethods = listPaymenMethods;
  }
};
