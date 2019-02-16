<template>
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
    <div class="card-footer" style="display: block;"></div>
  </div>
</template>

<script>
import service from "@/services/erp/settings/Accounts";
import currencyTab from "@/components/erp/settings/accounting/currency.vue";
export default {
  data() {
    return {
      form: {},
      currencies: []
    };
  },
  components: {
    currencyTab
  },
  async mounted() {
    const result = await service.getInitData(this.$axios);
    console.log("result = ", result);
    this.currencies = result.currencies;
    if (result.error) return console.log(error);
  },
  layout(contex) {
    return "erp";
  }
};
</script>