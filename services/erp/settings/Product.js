export default (axios, store) => {
  return {
    async getWareHouse(option) {
      try {
        if (!option) {
          option.count = 50;
          option.page = 1;
        }
        console.log("option= ", option);
        const result = await axios.get(
          `/warehouse/?page=${option.page}&count=${option.count}`
        );
        console.log("result = ", result.data.data);
        await store.dispatch(
          "settings/products/setWarehouse",
          result.data.data
        );
      } catch (error) {}
    },
    async saveWareHouse(warehouse) {
      if (!warehouse) return;
      try {
      } catch (error) {}
    },
    async newWareHouse(warehouse) {
      if (!warehouse) return;
      try {
      } catch (error) {}
    },
    async getSalePrice(option) {
      try {
        if (!option) {
          option.count = 50;
          option.page = 1;
        }
        const result = await axios.get(
          `/priceList/?page=${option.page}&count=${option.count}`
        );
        await store.dispatch(
          "settings/products/setPriceList",
          result.data.data
        );
      } catch (error) {}
    },
    async getProductTypes(option) {
      try {
        if (!option) {
          option.count = 50;
          option.page = 1;
        }
        const result = await axios.get(
          `/products/productTypes/?page=${option.page}&count=${option.count}`
        );
        await store.dispatch(
          "settings/products/setProductTypes",
          result.data.data
        );
      } catch (error) {}
    },
    async getProductOptions(option) {
      try {
        if (!option) {
          option.count = 50;
          option.page = 1;
        }
        const result = await axios.get(
          `/products/options/?page=${option.page}&count=${option.count}`
        );
        await store.dispatch(
          "settings/products/setProductOptions",
          result.data.data
        );
      } catch (error) {}
    },
    async getShippingMethods(option) {
      try {
        if (!option) {
          option.count = 50;
          option.page = 1;
        }
        const result = await axios.get(
          `/shippingMethod/?page=${option.page}&count=${option.count}`
        );
        await store.dispatch(
          "settings/products/setShippingMethods",
          result.data.data
        );
      } catch (error) {}
    },
    async getCategory() {
      try {
        const result = await axios.get(`/category/?forParent=false`);
        await store.dispatch("settings/products/setCategory", result.data.data);
      } catch (error) {}
    },
    async getAccountInventory() {
      const result = await axios.get(
        "/chartOfAccount/getForDd?category=ACCOUNTS_INVENTORY"
      );
      store.dispatch("settings/products/setAccountInventory", result.data.data);
    },
    async getInitData() {
      const option = {
        count: 50,
        page: 1
      };
      try {
        await this.getWareHouse(option);
        await this.getPriceList(option);
        await this.getProductTypes(option);
        await this.getProductOptions(option);
        await this.getShippingMethods(option);
        await this.getCategory(option);
      } catch (error) {
        return error;
      }
    }
  };
};
