export const actions = {
  setStateChanged({ commit }, val) {
    commit("set_State_Changed", val);
  },
  setWarehouse({ commit }, val) {
    commit("set_warehouse", val);
  },
  setPriceList({ commit }, val) {
    commit("set_priceList", val);
  },
  setProductTypes({ commit }, val) {
    commit("set_productTypes", val);
  },
  setProductOptions({ commit }, val) {
    commit("set_productOptions", val);
  },
  setShippingMethod({ commit }, val) {
    commit("set_shippingMethod", val);
  },
  setCategory({ commit }, val) {
    commit("set_category", val);
  },
  setAccountInventory({ commit }, val) {
    commit("set_accountInventory", val);
  }
};

export const state = () => ({
  StateChanged: {
    isChanged: false,
    name: ""
  },
  warehouse: null,
  priceList: null,
  productTypes: null,
  productOptions: null,
  shippingMethod: null,
  category: null,
  accountInventory: null
});

export const mutations = {
  set_State_Changed(state, StateChanged) {
    state.StateChanged = StateChanged;
  },
  set_warehouse(state, val) {
    state.warehouse = val;
  },
  set_priceList(state, val) {
    state.priceList = val;
  },
  set_productTypes(state, val) {
    state.productTypes = val;
  },
  set_productOptions(state, val) {
    state.productOptions = val;
  },
  set_shippingMethod(state, val) {
    state.shippingMethod = val;
  },
  set_category(state, val) {
    state.category = val;
  },
  set_accountInventory(state, val) {
    state.accountInventory = val;
  }
};

export const getters = {
  StateChanged(state) {
    return state.StateChanged;
  },
  warehouse(state) {
    return state.warehouse;
  },
  priceList(state) {
    return state.priceList;
  },
  productTypes(state) {
    return state.productTypes;
  },
  productOptions(state) {
    return state.productOptions;
  },
  shippingMethod(state) {
    return state.shippingMethod;
  },
  category(state) {
    return state.category;
  },
  accountInventory(state) {
    return state.accountInventory;
  }
};
