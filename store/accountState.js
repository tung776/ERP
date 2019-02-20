export const actions = {
  setStateChanged({ commit }, isChanged) {
    commit("set_State_Changed", isChanged);
  },
  setAccountBankAndCash({ commit }, bankAndCash) {
    commit("set_Bank_And_Cash", bankAndCash);
  },
  setCurrency({ commit }, currency) {
    commit("set_currency", currency);
  },
  setBankAccounts({ commit }, bankAccount) {
    commit("set_bank_account", bankAccount);
  }
};

export const state = () => ({
  StateChanged: false,
  bankAnhCash: null,
  bankAccount: null,
  currency: null
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
  }
};
