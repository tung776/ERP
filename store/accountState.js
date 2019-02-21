export const actions = {
    setStateChanged({
        commit
    }, val) {
        commit("set_State_Changed", val);
    },
    setAccountBankAndCash({
        commit
    }, bankAndCash) {
        commit("set_Bank_And_Cash", bankAndCash);
    },
    setCurrency({
        commit
    }, currency) {
        commit("set_currency", currency);
    },
    setBankAccounts({
        commit
    }, bankAccount) {
        commit("set_bank_account", bankAccount);
    },
    setChartOfAccount({
        commit
    }, chartOfAccount) {
        commit("set_chart_of_account", chartOfAccount);
    },
    setPaymentTerm({
        commit
    }, paymentTerm) {
        commit("set_paymentTerm", paymentTerm);
    },
    setPaymentTermList({
        commit
    }, paymentTermList) {
        commit("set_paymentTermList", paymentTermList);
    }
};

export const state = () => ({
    StateChanged: {
        isChanged: false,
        name: ""
    },
    bankAnhCash: null,
    bankAccount: null,
    currency: null,
    chartOfAccount: null,
    paymentTerm: null,
    paymentTermList: null
});

export const mutations = {
    set_State_Changed(state, StateChanged) {
        state.StateChanged = StateChanged;
    },
    set_currency(state, currency) {
        state.currency = currency;
    },
    set_bank_account(state, bankAccount) {
        state.bankAccount = bankAccount;
    },
    set_Bank_And_Cash(state, bankAnhCash) {
        state.bankAnhCash = bankAnhCash;
    },
    set_chart_of_account(state, chartOfAccount) {
        state.chartOfAccount = chartOfAccount;
    },
    set_paymentTerm(state, paymentTerm) {
        state.paymentTerm = paymentTerm;
    },
    set_paymentTermList(state, paymentTermList) {
        state.paymentTermList = paymentTermList;
    }
};

export const getters = {
    StateChanged(state) {
        return state.StateChanged;
    },
    bankAnhCash(state) {
        return state.bankAnhCash;
    },
    bankAccount(state) {
        return state.bankAccount;
    },
    currency(state) {
        return state.currency;
    },
    chartOfAccount(state) {
        return state.chartOfAccount;
    },
    paymentTerm(state) {
        return state.paymentTerm;
    },
    paymentTermList(state) {
        return state.paymentTermList;
    }
};