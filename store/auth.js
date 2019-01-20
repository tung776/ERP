export const actions = {
    setUser({
        commit
    }, user) {
        commit("SET_USER", user);
        if (user) {
            commit("SET_LOGGED", true);
        } else {
            commit("SET_LOGGED", false);
        }
    },

    setToken({
        commit
    }, token) {
        commit("SET_TOKEN", token);
        if (token) {
            commit("SET_LOGGED", true);
        } else {
            commit("SET_LOGGED", false);
        }
    },
    setLogged({
        commit
    }, _boolean) {
        commit("SET_LOGGED", _boolean);
    }
};

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
    user: null,
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
        if (user) {
            state.user.uName = user.uName ? user.uName : user.login;
            state.user.uId = user.uId ? user.uId : user._id;
        }
    },

    SET_LOGGED(state, _boolean) {
        state.loggedIn = _boolean;
    }
};