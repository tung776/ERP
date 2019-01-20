export const actions = {

    setModules({
        commit
    }, Modules) {
        commit("SET_MODULE", Modules);

    },
}

export const state = () => ({
    Modules: null
});

export const mutations = {

    SET_MODULE(state, Modules) {
        state.Modules = Modules;
    }
}

export const getters = {
    Modules(state) {
        return state.Modules;
    }
};