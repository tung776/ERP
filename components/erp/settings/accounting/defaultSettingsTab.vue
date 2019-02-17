<template>
  <div class="card card-success">
    <div class="card-body">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Tài Khoản Thuế bán hàng</label>
            <select class="form-control" v-model="Settings.salesTax">
              <template v-for="acc in chartOfAccount">
                <option
                  v-if="Settings.salesTax && Settings.salesTax.name == acc.name"
                  :key="acc._id"
                  :value="Settings.salesTax"
                  selected="selected"
                >{{acc.name}}</option>
                <option v-else :key="acc._id" :value="acc">{{acc.name}}</option>
              </template>
              <option checked>{{Settings.salesTax ? Settings.salesTax.name : ""}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Tài Khoản Mặc Định Thuế mua hàng</label>
            <select class="form-control" v-model="Settings.purchaseTax">
              <template v-for="acc in chartOfAccount">
                <option
                  v-if="Settings.purchaseTax && Settings.purchaseTax.name == acc.name"
                  :key="acc._id"
                  :value="Settings.purchaseTax"
                  selected="selected"
                >{{acc.name}}</option>
                <option v-else :key="acc._id" :value="acc">{{acc.name}}</option>
              </template>
              <option checked>{{Settings.purchaseTax ? Settings.purchaseTax.name : ""}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Tài Khoản Mặc Định Số Dư Thuế</label>
            <select class="form-control" v-model="Settings.carriedTax">
              <template v-for="acc in chartOfAccount">
                <option
                  v-if="Settings.carriedTax && Settings.carriedTax.name == acc.name"
                  :key="acc._id"
                  :value="Settings.carriedTax"
                  selected="selected"
                >{{acc.name}}</option>
                <option v-else :key="acc._id" :value="acc">{{acc.name}}</option>
              </template>
              <option checked>{{Settings.carriedTax ? Settings.carriedTax.name : ""}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Tài Khoản Mặc Định Vận Chuyển</label>
            <select class="form-control" v-model="Settings.shipping">
              <template v-for="acc in chartOfAccount">
                <option
                  v-if="Settings.shipping && Settings.shipping.name == acc.name"
                  :key="acc._id"
                  :value="Settings.shipping"
                  selected="selected"
                >{{acc.name}}</option>
                <option v-else :key="acc._id" :value="acc">{{acc.name}}</option>
              </template>
              <option checked>{{Settings.shipping ? Settings.shipping.name : ""}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Tài Khoản Mặc Định Ngân Hàng</label>
            <select class="form-control" v-model="Settings.bankAccount">
              <template v-for="bank in bankAccounts">
                <option
                  v-if="Settings.bankAccount && Settings.bankAccount.name == bank.name"
                  :key="bank.name"
                  :value="Settings.bankAccount"
                  selected="selected"
                >{{bank.name}}</option>
                <option v-else :key="bank._id" :value="bank">{{bank.name}}</option>
              </template>
              <option checked>{{Settings.bankAccount ? Settings.bankAccount.name : ""}}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- <table class="table table-hover table-dark">
      <tbody>
        <tr>
          <th scope="row">{{defaultSettings.salesTax.name}}</th>
          <td>{{defaultSettings.purchaseTax.name}}</td>
          <td>{{defaultSettings.carriedTax.name}}</td>
          <td>{{defaultSettings.payableTax.name}}</td>
          <td>{{defaultSettings.shipping.name}}</td>
          <td>
            <button type="button" class="btn btn-tool btn-success btn-flat">
              <i class="fa fa-pencil-square-o"></i>
            </button>
            <button type="button" class="btn btn-tool btn-danger btn-flat">
              <i class="fa fa-remove"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["defaultSettings", "bankAccounts", "chartOfAccount"],
  // data() {
  //   return {
  //     Settings: {
  //       saleTax: {},
  //       carriedTax: {},
  //       shipping: {},
  //       purchaseTax: {}
  //     }
  //   };
  // },
  computed: {
    ...mapGetters({
      Settings: "settings/organizationSetting"
    })
  }
  // async mounted() {
  //   this.Settings = mapGetters("settings/organizationSetting");
  //   console.log("settings = ", this.Settings);
  // }
};
</script>
