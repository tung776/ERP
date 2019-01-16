export const getters = {
  authenticated(state) {
    return state.loggedIn;
  },

  user(state) {
    return state.user;
  }
};

export const state = () => ({
  token: null,
  user: Object,
  loggedIn: false
});

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
    if (token) {
      state.loggedIn = true;
    } else {
      state.loggedIn = false;
    }
  },

  SET_USER(state, user) {
    state.user = user;
  },

  SET_LOGGED(state, _boolean) {
    state.loggedIn = _boolean;
  }
};

export const actions = {
  setUser({ commit }, user) {
    commit("SET_USER", user);
  },

  setToken({ commit }, token) {
    commit("SET_TOKEN", token);
  },
  setLogged({ commit }, _boolean) {
    commit("SET_LOGGED", _boolean);
  }
};
