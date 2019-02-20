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
import sv from "@/services/erp/settings/Accounts";
let service = null;
import currencyTab from "@/components/erp/settings/accounting/currencyTab.vue";
import bankAccountTab from "@/components/erp/settings/accounting/bankAccountTab.vue";
import paymentTermTab from "@/components/erp/settings/accounting/paymentTermTab.vue";
import taxTab from "@/components/erp/settings/accounting/taxTab.vue";
import defaultSettingsTab from "@/components/erp/settings/accounting/defaultSettingsTab.vue";
import chartOfAccount from "@/components/erp/settings/accounting/chartOfAccount.vue";
import chartOfExpenses from "@/components/erp/settings/accounting/chartOfExpenses.vue";
import modal from "@/components/modal.vue";
import expander from "@/components/expander.vue";
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters({
      StateChanged: "accountState/StateChanged"
    })
  },
  watch: {
    StateChanged: async function(val) {
      if (val) {
        const result = await service.getInitData();
        this.currencies = result.currencies;
        this.bankAccounts = result.paymentMethod;
        this.tax = result.taxSettings;
        this.paymentTerms = result.paymentTerms;
        this.chartOfAccount = result.chartOfAccount;
        this.allAccount = result.allAccount;
        this.allExpense = result.allExpense;
        this.defaultSettings = this.$store.state.settings.organizationSetting;
      }
      this.$store.dispatch("accountState/setStateChanged", false);
    }
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
    service = sv(this.$axios, this.$store);
    const result = await service.getInitData();
    this.currencies = result.currencies;
    this.bankAccounts = result.paymentMethod;
    this.tax = result.taxSettings;
    this.paymentTerms = result.paymentTerms;
    this.chartOfAccount = result.chartOfAccount;
    this.allAccount = result.allAccount;
    this.allExpense = result.allExpense;
    this.defaultSettings = this.$store.state.settings.organizationSetting;
    if (result.error) return console.log(error);
  },
  layout(contex) {
    return "erp";
  }
};
</script>