export const actions = {
    setAllCurrencies({
        commit
    }, allCurrencies) {
        commit("SET_ALL_CURRENCIES", allCurrencies);

    }
};

export const getters = {

    allCurrencies(state) {
        return state.allCurrencies;
    }
};

export const state = () => ({
    allCurrencies: null
});

export const mutations = {

    SET_ALL_CURRENCIES(state, allCurrencies) {
        state.allCurrencies = allCurrencies;

    }
};