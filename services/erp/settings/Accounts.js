export default {
  async deleteCurency(axios, currency) {
    try {
      await axios.delete(`/currency/${currency._id}`);
    } catch (err) {
      console.log(err);
    }
  },
  async getInitData(axios, store) {
    const data = {};
    try {
      const currencies = await axios.get("/currency/getForList");
      data.currencies = currencies.data;
      const paymentMethods = await axios.get("/paymentMethod/getForList");
      data.paymentMethods = paymentMethods.data;
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
      console.log("data.allExpense = ", data.allExpense);
      const paymentMethod = await axios.get("/paymentMethod");
      data.paymentMethod = paymentMethod.data.data;
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
