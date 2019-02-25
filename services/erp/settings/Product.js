export default (axios, store) => {
    return {
        async getWareHouse(option) {
            try {
                if (!option) {
                    option.count = 50;
                    option.page = 1
                }
                const result = await axios.get(`/warehouse/?page=${option.page}&count=${option.count}`)
                await store.dispatch('settings/products/setWarehouse', result.data.data)
            } catch (error) {

            }
        },
        async saveWareHouse(warehouse) {
            if (!warehouse) return;
            try {

            } catch (error) {

            }
        },
        async newWareHouse(warehouse) {
            if (!warehouse) return;
            try {

            } catch (error) {

            }
        },
        async getSalePrice(option) {
            try {
                if (!option) {
                    option.count = 50;
                    option.page = 1
                }
                const result = await axios.get(`/priceList/?page=${option.page}&count=${option.count}`)
                await store.dispatch('settings/products/setPriceList', result.data.data)
            } catch (error) {

            }
        },
        async getProductTypes(option) {
            try {
                if (!option) {
                    option.count = 50;
                    option.page = 1
                }
                const result = await axios.get(`/products/productTypes/?page=${option.page}&count=${option.count}`)
                await store.dispatch('settings/products/setProductTypes', result.data.data)
            } catch (error) {

            }
        },
        async getProductOptions(option) {
            try {
                if (!option) {
                    option.count = 50;
                    option.page = 1
                }
                const result = await axios.get(`/products/options/?page=${option.page}&count=${option.count}`)
                await store.dispatch('settings/products/setProductOptions', result.data.data)
            } catch (error) {

            }
        },
        async getShippingMethods(option) {
            try {
                if (!option) {
                    option.count = 50;
                    option.page = 1
                }
                const result = await axios.get(`/shippingMethod/?page=${option.page}&count=${option.count}`)
                await store.dispatch('settings/products/setShippingMethods', result.data.data)
            } catch (error) {

            }
        },
        async getCategory() {
            try {

                const result = await axios.get(`/category/?forParent=false`)
                await store.dispatch('settings/products/setCategory', result.data.data)
            } catch (error) {

            }
        },
        async getInitData() {
            try {
                await this.getWareHouse();
                await this.getPriceList();
                await this.getProductTypes();
                await this.getProductOptions();
                await this.getShippingMethods();
                await this.getCategory();

            } catch (error) {
                return error;
            }
        },
    }
}