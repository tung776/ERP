<template>
  <div>
    <!-- Loại tiền tệ -->
    <div class="card card-default">
      <div class="card-header">
        <h3 class="card-title">Loại Tiền Tệ</h3>

        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-widget="collapse">
            <i class="fa fa-minus"></i>
          </button>
        </div>
      </div>
      <!-- /.card-header -->
      <div class="card-body" style="display: block;">
        <div class="row">
          <currency-tab :currencies="currencies"/>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.card-body -->
      <div class="card-footer" style="display: block;">
        <button type="button" class="btn btn-primary btn-flat">
          Thêm Mới
          <i class="fa fa-plus primary"></i>
        </button>
      </div>
    </div>
    <!-- Bank Account -->
    <div class="card card-default collapsed-card">
      <div class="card-header">
        <h3 class="card-title">Tài Khoản Ngân Hàng</h3>

        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-widget="collapse">
            <i class="fa fa-minus"></i>
          </button>
        </div>
      </div>
      <!-- /.card-header -->
      <div class="card-body" style="display: none;">
        <div class="row">
          <bank-account-tab :bankAccounts="bankAccounts"/>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.card-body -->
      <div class="card-footer" style="display: none;">
        <button type="button" class="btn btn-primary btn-flat">
          Thêm Mới
          <i class="fa fa-plus primary"></i>
        </button>
      </div>
    </div>

    <!-- Payment Term -->
    <div class="card card-default collapsed-card">
      <div class="card-header">
        <h3 class="card-title">Điều Khoản Thanh Toán</h3>

        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-widget="collapse">
            <i class="fa fa-minus"></i>
          </button>
        </div>
      </div>
      <!-- /.card-header -->
      <div class="card-body" style="display: none;">
        <div class="row">
          <payment-term-tab :paymentTerms="paymentTerms"/>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.card-body -->
      <div class="card-footer" style="display: none;">
        <button type="button" class="btn btn-primary btn-flat">
          Thêm Mới
          <i class="fa fa-plus primary"></i>
        </button>
      </div>
    </div>

    <!-- Tax -->
    <div class="card card-default collapsed-card">
      <div class="card-header">
        <h3 class="card-title">Thuế</h3>

        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-widget="collapse">
            <i class="fa fa-minus"></i>
          </button>
        </div>
      </div>
      <!-- /.card-header -->
      <div class="card-body" style="display: none;">
        <div class="row">
          <tax-tab :tax="tax"/>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.card-body -->
      <div class="card-footer" style="display: none;">
        <button type="button" class="btn btn-primary btn-flat">
          Thêm Mới
          <i class="fa fa-plus primary"></i>
        </button>
      </div>
    </div>

    <!-- Default Settings -->
    <div class="card card-default collapsed-card">
      <div class="card-header">
        <h3 class="card-title">Thiết Lập Mặc Định</h3>

        <div class="card-tools">
          <div class="row">
            <button type="button" class="btn btn-tool" data-widget="collapse">
              <i class="fa fa-minus"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- /.card-header -->
      <div class="card-body" style="display: none;">
        <default-settings-tab
          :defaultSettings="defaultSettings"
          :bankAccounts="bankAccounts"
          :chartOfAccount="chartOfAccount"
          :paymentTerms="paymentTerms"
        />
        <!-- /.row -->
      </div>
      <!-- /.card-body -->
      <div class="card-footer" style="display: none;">
        <button type="button" class="btn btn-primary btn-flat">
          Thêm Mới
          <i class="fa fa-plus primary"></i>
        </button>
      </div>
    </div>

    <!-- Chart of Account -->
    <div class="card card-default collapsed-card">
      <div class="card-header">
        <h3 class="card-title">Biểu Đồ Tài Khoản</h3>

        <div class="card-tools">
          <div class="row">
            <button type="button" class="btn btn-tool" data-widget="collapse">
              <i class="fa fa-minus"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- /.card-header -->
      <div class="card-body" style="display: none;">
        <chart-of-account :allAccount="allAccount" :chartOfAccount="chartOfAccount"/>
        <!-- /.row -->
      </div>
      <!-- /.card-body -->
      <div class="card-footer" style="display: none;">
        <button type="button" class="btn btn-primary btn-flat">
          Thêm Mới
          <i class="fa fa-plus primary"></i>
        </button>
      </div>
    </div>
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
      allAccount: []
    };
  },
  components: {
    currencyTab,
    bankAccountTab,
    taxTab,
    paymentTermTab,
    defaultSettingsTab,
    chartOfAccount
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
    this.defaultSettings = this.$store.state.settings.organizationSetting;
    if (result.error) return console.log(error);
  },
  layout(contex) {
    return "erp";
  }
};
</script>