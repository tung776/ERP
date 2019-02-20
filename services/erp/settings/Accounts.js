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
    async getInitData() {
      const data = {};
      try {
        data.currencies = await this.getCurrencies();
        data.paymentMethods = await this.getPaymentMethods();
        data.bankAndCash = await this.getBankAndCash();

        const paymentTermList = await axios.get("/paymentTerm/getForList");
        data.paymentTermList = paymentTermList.data;
        const accountsCategories = await axios.get("/accountsCategories");
        data.accountsCategories = accountsCategories.data;
        const expensesCategories = await axios.get("/expensesCategories");
        data.expensesCategories = expensesCategories.data;
        const taxSettings = await axios.get("/taxSettings");
        data.taxSettings = taxSettings.data.data;
        const chartOfAccount = await axios.get("/chartOfAccount/getForDd");
        data.chartOfAccount = chartOfAccount.data.data;
        const allAccount = await axios.get("/accountsCategories/getAll");
        const allExpense = await axios.get("/expensesCategories/getAll");
        const expenses = await axios.get("/expensesCategories");
        data.allAccount = this.getTreeAccount(allAccount.data.data);
        data.allExpense = this.getTreeAccount(allExpense.data.data);

        data.paymentMethod = await this.getPaymentMethod();

        const paymentTerms = await axios.get("/paymentTerm");
        data.paymentTerms = paymentTerms.data.data;
        if (store.state.settings || store.state.settings.organizationSetting) {
          try {
            const organizationSetting = await axios.get("organizationSettings");
            await store.dispatch(
              "settings/setOrganizationSetting",
              organizationSetting.data.data
            );
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
