export default (axios, store) => {
    return {
        async deleteCurency(currency) {
            try {
                console.log(`item ${currency.name} deleted`);
                await axios.delete(`/currency/${currency._id}`);
                await this.getAllCurencies();
            } catch (err) {
                console.log(err);
            }
        },
        async getAllCurencies() {
            try {
                const result = await axios.get("/currency/getAll");
                await store.dispatch("currency/setAllCurrencies", result.data.data);
            } catch (err) {
                console.log(err);
            }
        },
        async saveNewCurrency(newCurrency) {
            console.log("newCurrency = ", newCurrency);
            try {
                await axios.post("/currency", newCurrency);
                await this.getAllCurencies();
            } catch (err) {
                console.log(err);
            }
        },
        async saveCurrency(currency) {
            if (!currency) return;
            console.log("currency = ", currency);
            try {
                await axios.put(`/currency/${currency._id}`, currency);
                await this.getAllCurencies();
            } catch (err) {
                console.log(err);
            }
        },
        async getCurrencies() {
            const currencies = await axios.get("/currency/getForList");
            store.dispatch("accountState/setCurrency", currencies.data);
            return currencies.data;
        },
        async getPaymentMethods() {
            const paymentMethods = await axios.get("/paymentMethod/getForList");
            store.dispatch(
                "paymentMethod/setListPaymenMethods",
                paymentMethods.data.data
            );
            return paymentMethods.data;
        },
        async getPaymentMethod() {
            const paymentMethod = await axios.get("/paymentMethod");
            store.dispatch("accountState/setBankAccounts", paymentMethod.data.data);
            return paymentMethod.data.data;
        },
        async getBankAndCash() {
            const bankAndCash = await axios.get(
                "/ChartOfAccount/getForDd?category=ACCOUNTS_BANK_AND_CASH"
            );
            store.dispatch(
                "accountState/setAccountBankAndCash",
                bankAndCash.data.data
            );
            return bankAndCash.data.data;
        },
        async getChartOfAccount() {
            const chartOfAccount = await axios.get("/chartOfAccount/getForDd");
            store.dispatch("accountState/setChartOfAccount", chartOfAccount.data.data);
            return chartOfAccount.data.data
        },
        async getPaymentTermList() {
            const paymentTermList = await axios.get("/paymentTerm/getForList");
            store.dispatch("accountState/paymentTermList", paymentTermList.data);
            return paymentTermList.datat
        },
        async getAccountsCategories() {
            const accountsCategories = await axios.get("/accountsCategories");
            store.dispatch("accountState/setAccountCategories", accountsCategories.data);
            return accountsCategories.data
        },
        async getExpensesCategories() {
            const expensesCategories = await axios.get("/expensesCategories");
            store.dispatch("accountState/setExpensesCategories", expensesCategories.data);
            return expensesCategories.data
        },
        async getTaxSettings() {
            const taxSettings = await axios.get("/taxSettings");
            store.dispatch("accountState/setTaxSettings", taxSettings.data.data);
            return taxSettings.data.data
        },
        async getAllAccount() {
            const result = await axios.get("/accountsCategories/getAll");
            const allAccount = this.getTreeAccount(result.data.data);
            store.dispatch("accountState/setAllAccount", allAccount);
            return allAccount;
        },
        async getAllExpenses() {
            const result = await axios.get("/expensesCategories/getAll");
            const allExpenses = this.getTreeAccount(result.data.data);
            store.dispatch("accountState/setAllExpenses", allExpenses)
            return allExpenses;
        },
        async getPaymentTerms() {
            const paymentTerms = await axios.get("/paymentTerm");
            store.dispatch('accountState/setPaymentTerms', paymentTerms.data.data);
            return paymentTerms.data.data;
        },
        async getOranizationSettings() {
            const organizationSetting = await axios.get("organizationSettings");
            await store.dispatch(
                "settings/setOrganizationSetting",
                organizationSetting.data.data
            );
        },
        async getInitData() {
            const data = {};
            try {
                data.currencies = await this.getCurrencies();
                data.paymentMethods = await this.getPaymentMethods();
                data.bankAndCash = await this.getBankAndCash();
                data.chartOfAccount = await this.getChartOfAccount();
                data.paymentTermList = await this.getPaymentTermList();
                data.accountsCategories = await this.getAccountsCategories()
                data.expensesCategories = await this.getExpensesCategories()
                data.taxSettings = await this.getTaxSettings();
                data.allAccount = await this.getAllAccount();
                data.allExpense = await this.getAllExpenses();
                // const expenses = await axios.get("/expensesCategories");
                data.paymentMethod = await this.getPaymentMethod();
                data.paymentTerms = await this.getPaymentTerms();
                if (store.state.settings || store.state.settings.organizationSetting) {
                    try {
                        await this.getOranizationSettings()
                    } catch (err) {
                        console.log(err);
                    }
                }
                return data;
            } catch (error) {
                return (data.error = error);
            }
        },

        getTreeAccount(allAccount) {
            const accountTree = [];
            allAccount.forEach(item => {
                if (!item.parent) {
                    if (item.child && item.child.length > 0) {
                        const childs = this.getAllChilds(item.child, allAccount);
                        item.child = childs;
                    }
                    accountTree.push(item);
                }
            });
            return accountTree;
        },

        getAllChilds(accounts, allAccount) {
            const childs = [];
            let tempArr = [...accounts];
            const removes = [];
            tempArr.forEach(el => {
                allAccount.forEach(item => {
                    const temp = {
                        ...item
                    };
                    if (el == item._id) {
                        childs.push(temp);
                        if (item.child && item.child.length > 0) {
                            temp.child = this.getAllChilds(item.child, allAccount);
                            temp.child.forEach(i => {
                                removes.push(i);
                            });
                        }
                    }
                });
            });
            //
            tempArr = [...childs];
            removes.forEach(rm => {
                tempArr.forEach((item, index) => {
                    if (item._id == rm._id) {
                        childs.splice(index, 1);
                    }
                });
            });
            return childs;
        }
    };
};