export const actions = {

    setCurrentUser({
        commit
    }, currentUser) {
        commit("SET_CURRENT_USER", currentUser);

    },
}

export const state = () => ({
    currentUser: null
});

export const mutations = {

    SET_CURRENT_USER(state, currentUser) {
        state.currentUser = currentUser;
    }
}

export const getters = {
    currentUser(state) {
        return state.currentUser;
    }
};