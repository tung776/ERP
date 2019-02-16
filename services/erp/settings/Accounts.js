export default {
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
      data.chartOfAccount = chartOfAccount.data;
      const paymentMethod = await axios.get("/paymentMethod");
      data.paymentMethod = paymentMethod.data.data;
      const paymentTerm = await axios.get("/paymentTerm");
      data.paymentTerm = paymentTerm.data.data;
      if (store.state.settings || !store.state.settings.organizationSetting) {
        try {
          const organizationSetting = await this.$axios.get(
            "organizationSettings"
          );
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
  }
};
