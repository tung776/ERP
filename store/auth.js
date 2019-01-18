import {
    setStorageUser
} from '@/utils/auth'

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
    },

    async login({
        commit
    }, data) {
        const respon = await this.$axios.post("users/login", {
            data: data
        });
        const user = respon.data.user;
        await setStorageUser(user)
        commit("SET_USER", user)
        commit("SET_LOGGED", true)
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