export const actions = {
  setStateChanged({ commit }, val) {
    commit("set_State_Changed", val);
  },
  setAccountBankAndCash({ commit }, bankAndCash) {
    commit("set_Bank_And_Cash", bankAndCash);
  },
  setCurrencies({ commit }, currencies) {
    commit("set_currencies", currencies);
  },
  setBankAccounts({ commit }, bankAccount) {
    commit("set_bank_account", bankAccount);
  },
  setChartOfAccount({ commit }, chartOfAccount) {
    commit("set_chart_of_account", chartOfAccount);
  },
  setPaymentTerms({ commit }, paymentTerm) {
    commit("set_paymentTerm", paymentTerm);
  },
  setPaymentMethods({ commit }, paymentMethods) {
    commit("set_paymentMethods", paymentMethods);
  },
  setPaymentTermList({ commit }, paymentTermList) {
    commit("set_paymentTermList", paymentTermList);
  },
  setAccountCategories({ commit }, accountCategories) {
    commit("set_accountCategories", accountCategories);
  },
  setExpensesCategories({ commit }, expensesCategories) {
    commit("set_expensesCategories", expensesCategories);
  },
  setTaxSettings({ commit }, taxSettings) {
    commit("set_taxSettings", taxSettings);
  },
  setAllAccount({ commit }, allAccount) {
    commit("set_allAccount", allAccount);
  },
  setAllExpenses({ commit }, allExpenses) {
    commit("set_allExpenses", allExpenses);
  },
  setExpresses({ commit }, expresses) {
    commit("set_expresses", expresses);
  },
  setCountries({ commit }, countries) {
    commit("set_countries", countries);
  }
};

export const state = () => ({
  StateChanged: {
    isChanged: false,
    name: ""
  },
  bankAnhCash: null,
  bankAccount: null,
  currencies: null,
  chartOfAccount: null,
  paymentTerms: null,
  paymentMethods: null,
  paymentTermList: null,
  accountCategories: null,
  expensesCategories: null,
  taxSettings: null,
  allAccount: null,
  allExpenses: null,
  expresses: null,
  countries: null
});

export const mutations = {
  set_State_Changed(state, StateChanged) {
    state.StateChanged = StateChanged;
  },
  set_currencies(state, currencies) {
    state.currencies = currencies;
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
  set_paymentTerm(state, paymentTerms) {
    state.paymentTerms = paymentTerms;
  },
  set_paymentMethods(state, paymentMethods) {
    state.paymentMethods = paymentMethods;
  },
  set_paymentTermList(state, paymentTermList) {
    state.paymentTermList = paymentTermList;
  },
  set_accountCategories(state, accountCategories) {
    state.accountCategories = accountCategories;
  },
  set_expensesCategories(state, expensesCategories) {
    state.expensesCategories = expensesCategories;
  },
  set_taxSettings(state, taxSettings) {
    state.taxSettings = taxSettings;
  },
  set_allAccount(state, allAccount) {
    state.allAccount = allAccount;
  },
  set_allExpenses(state, allExpenses) {
    state.allExpenses = allExpenses;
  },
  set_expresses(state, expresses) {
    state.expresses = expresses;
  },
  set_paymentTerms(state, paymentTerms) {
    state.paymentTerms = paymentTerms;
  },
  set_countries(state, countries) {
    state.countries = countries;
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
  currencies(state) {
    return state.currencies;
  },
  chartOfAccount(state) {
    return state.chartOfAccount;
  },
  paymentTerms(state) {
    return state.paymentTerms;
  },
  paymentMethods(state) {
    return state.paymentMethods;
  },
  paymentTermList(state) {
    return state.paymentTermList;
  },
  accountCategories(state) {
    return state.accountCategories;
  },
  expensesCategories(state) {
    return state.expensesCategories;
  },
  taxSettings(state) {
    return state.taxSettings;
  },
  allAccount(state) {
    return state.allAccount;
  },
  allExpenses(state) {
    return state.allExpenses;
  },
  expresses(state) {
    return state.expresses;
  },
  countries(state) {
    return state.countries;
  }
};
