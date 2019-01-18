export const state = () => ({
    lastDb: null
});

export const actions = {
    setLastDataBase({
        commit
    }, value) {
        commit("SET_LAST_DATABASE", value)
    }
}

export const mutations = {
    SET_LAST_DATABASE(state, value) {
        state.lastDb = value;

    }
}

export const getters = {
    lastDb(state) {
        return state.lastDb;
    },
};