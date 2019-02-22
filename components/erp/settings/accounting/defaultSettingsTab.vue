<template>
  <expander :isExpanded="true">
    <div slot="expander-header">
      <h3 class="card-title">Thiết Lập Mặc Định</h3>
    </div>
    <div slot="expander-body">
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
    </div>

    <div slot="expander-footer">
      <button
        type="button"
        class="btn btn-primary btn-flat"
        data-toggle="modal"
        data-target="#defaultSettingsModal"
      >
        Thêm Mới
        <i class="fa fa-plus primary"></i>
      </button>
      <modal :id="'defaultSettingsModal'">
        <div slot="modal-title">Tiêu đề</div>
        <div slot="modal-body">
          <p>nội dung</p>
        </div>
        <div slot="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </modal>
    </div>
  </expander>
</template>

<script>
import { mapGetters } from "vuex";
import expander from "@/components/expander.vue";
import modal from "@/components/modal.vue";

export default {
  components: {
    modal,
    expander
  },
  computed: {
    ...mapGetters({
      Settings: "settings/organizationSetting",
      bankAccounts: "accountState/paymentMethods",
      paymentTerms: "accountState/paymentTerms",
      chartOfAccount: "accountState/chartOfAccount"
    })
  }
};
</script>
