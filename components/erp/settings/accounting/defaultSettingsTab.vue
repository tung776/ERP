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
            </select>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Tài Khoản Mặc Định Thuế Phải Trả</label>
            <select class="form-control" v-model="Settings.payableTax">
              <template v-for="acc in chartOfAccount">
                <option
                  v-if="Settings.payableTax && Settings.payableTax.name == acc.name"
                  :key="acc.name"
                  :value="Settings.payableTax"
                  selected="selected"
                >{{acc.name}}</option>
                <option v-else :key="acc._id" :value="acc">{{acc.name}}</option>
              </template>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Tài Khoản Mặc Định Chiết Khấu</label>
            <select class="form-control" v-model="Settings.discount">
              <template v-for="acc in chartOfAccount">
                <option
                  v-if="Settings.discount && Settings.discount.name == acc.name"
                  :key="acc.name"
                  :value="Settings.discount"
                  selected="selected"
                >{{acc.name}}</option>
                <option v-else :key="acc._id" :value="acc">{{acc.name}}</option>
              </template>
              <option checked>{{Settings.discount ? Settings.discount.name : ""}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Tài Khoản Mặc Định Chi Phí Sản Xuất</label>
            <select class="form-control" v-model="Settings.workInProgress">
              <template v-for="acc in chartOfAccount">
                <option
                  v-if="Settings.workInProgress && Settings.workInProgress.name == acc.name"
                  :key="acc.name"
                  :value="Settings.workInProgress"
                  selected="selected"
                >{{acc.name}}</option>
                <option v-else :key="acc._id" :value="acc">{{acc.name}}</option>
              </template>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Mặc Định Điều Khoản Thanh Toán</label>
            <select class="form-control" v-model="Settings.paymentTerms">
              <template v-for="paymentTerm in paymentTerms" placeholder="Chọn điều khoản">
                <option
                  v-if="Settings.paymentTerms && Settings.paymentTerms.name == paymentTerm.name"
                  :key="paymentTerm.name"
                  :value="Settings.paymentTerms"
                  selected="selected"
                >{{paymentTerm.name}}</option>
                <option v-else :key="paymentTerm._id" :value="paymentTerm">{{paymentTerm.name}}</option>
              </template>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["defaultSettings", "bankAccounts", "chartOfAccount", "paymentTerms"],
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
