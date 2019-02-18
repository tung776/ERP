<template>
  <div>
    <currency-tab :currencies="currencies"/>
    <!-- Bank Account -->
    <bank-account-tab :bankAccounts="bankAccounts"/>
    <!-- Payment Term -->
    <payment-term-tab :paymentTerms="paymentTerms"/>
    <!-- Tax -->
    <tax-tab :tax="tax"/>
    <!-- Default Settings -->
    <default-settings-tab
      :defaultSettings="defaultSettings"
      :bankAccounts="bankAccounts"
      :chartOfAccount="chartOfAccount"
      :paymentTerms="paymentTerms"
    />

    <!-- Chart of Account -->
    <chart-of-account :allAccount="allAccount"/>
    <!-- Expenses Account -->
    <chart-of-expenses :allExpense="allExpense"/>
  </div>
</template>

<script>
import service from "@/services/erp/settings/Accounts";
import currencyTab from "@/components/erp/settings/accounting/currencyTab.vue";
import bankAccountTab from "@/components/erp/settings/accounting/bankAccountTab.vue";
import paymentTermTab from "@/components/erp/settings/accounting/paymentTermTab.vue";
import taxTab from "@/components/erp/settings/accounting/taxTab.vue";
import defaultSettingsTab from "@/components/erp/settings/accounting/defaultSettingsTab.vue";
import chartOfAccount from "@/components/erp/settings/accounting/chartOfAccount.vue";
import chartOfExpenses from "@/components/erp/settings/accounting/chartOfExpenses.vue";
import modal from "@/components/modal.vue";
import expander from "@/components/expander.vue";
export default {
  data() {
    return {
      form: {},
      currencies: [],
      bankAccounts: [],
      tax: [],
      paymentTerms: [],
      defaultSettings: [],
      chartOfAccount: [],
      allAccount: [],
      allExpense: []
    };
  },
  components: {
    currencyTab,
    bankAccountTab,
    taxTab,
    paymentTermTab,
    defaultSettingsTab,
    chartOfAccount,
    chartOfExpenses,
    modal,
    expander
  },
  async mounted() {
    const result = await service.getInitData(this.$axios, this.$store);
    console.log("result = ", result);
    this.currencies = result.currencies;
    this.bankAccounts = result.paymentMethod;
    this.tax = result.taxSettings;
    this.paymentTerms = result.paymentTerms;
    this.chartOfAccount = result.chartOfAccount;
    this.allAccount = result.allAccount;
    this.allExpense = result.allExpense;
    console.log("this.allExpense= ", this.allExpense);
    this.defaultSettings = this.$store.state.settings.organizationSetting;
    if (result.error) return console.log(error);
  },
  layout(contex) {
    return "erp";
  }
};
</script>