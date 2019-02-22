<template>
  <expander :isExpanded="true">
    <div slot="expander-header">
      <h3 class="card-title">Tài Khoản Ngân Hàng</h3>
    </div>
    <div slot="expander-body">
      <div class="row">
        <div class="table-responsive-md col-md-12">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên</th>
                <th scope="col">Ngân hàng</th>
                <th scope="col">Tài Khoản</th>
                <th scope="col">Số hiệu tài khoản</th>
                <th scope="col">Loại Tiền</th>
                <th scope="col">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(account, index) in bankAccounts" :key="account.name">
                <th scope="row">{{index+1}}</th>
                <td>{{account.name}}</td>
                <td>{{account.bank}}</td>
                <td>{{account.account}}</td>
                <td>{{account.chartAccount.code + " " + account.chartAccount.account}}</td>
                <td>{{account.currency}}</td>
                <td>
                  <button
                    @click="edit(account)"
                    type="button"
                    class="btn btn-tool btn-success btn-flat"
                    data-toggle="modal"
                    data-target="#bankModal"
                  >
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button
                    @click="remove(account)"
                    type="button"
                    class="btn btn-tool btn-danger btn-flat"
                    data-toggle="modal"
                    data-target="#bankConfirmModal"
                  >
                    <i class="fa fa-remove"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div slot="expander-footer">
      <button
        @click="newBankAccount"
        type="button"
        class="btn btn-primary btn-flat"
        data-toggle="modal"
        data-target="#bankModal"
      >
        Thêm Mới
        <i class="fa fa-plus primary"></i>
      </button>
      <!-- modal form-->
      <modal :id="'bankModal'">
        <div slot="modal-title">{{actions.isNew ? "Thêm Mới" : "Thay Đổi Thông Tin"}}</div>
        <div slot="modal-body">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Tên</label>
              <input v-model="bankForm.name" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">IBAN</label>
              <input v-model="bankForm.account" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">owner</label>
              <input v-model="bankForm.owner" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Tên Ngân Hàng</label>
              <input v-model="bankForm.bank" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Địa Chỉ</label>
              <input v-model="bankForm.address" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Tài Khoản Đối Ứng</label>
              <select class="form-control" v-model="bankForm.chartAccount">
                <template v-for="cash in bankAnhCash">
                  <option
                    v-if="bankForm.chartAccount && bankForm.chartAccount._id == cash._id"
                    :key="cash._id"
                    :value="bankForm.chartAccount"
                    selected="selected"
                  >{{cash.name}}</option>
                  <option v-else :key="cash._id" :value="cash">{{cash.name}}</option>
                </template>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Chọn Loại Tiền</label>
              <select class="form-control" v-model="bankForm.currency">
                <template v-for="currency in currencies">
                  <option
                    v-if="bankForm.currency == currency._id"
                    :key="currency._id"
                    :value="bankForm.currency"
                    selected="selected"
                  >{{currency.name}}</option>
                  <option v-else :key="currency._id" :value="currency.name">{{currency.name}}</option>
                </template>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">swift Code</label>
              <input v-model="bankForm.swiftCode" type="text" class="form-control" placeholder>
            </div>
          </form>
        </div>
        <div slot="modal-footer">
          <button
            @click="cancelAction"
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >Hủy</button>
          <button
            @click="confirmAction"
            type="button"
            class="btn btn-primary"
            data-dismiss="modal"
          >Lưu Dữ Liệu</button>
        </div>
      </modal>
      <modal :id="'bankConfirmModal'">
        <div slot="modal-title">Cảnh Báo</div>
        <div slot="modal-body">
          <p>Bạn có chắc chắn muốn xóa dữ liệu</p>
        </div>
        <div slot="modal-footer">
          <button
            @click="cancelAction"
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >Close</button>
          <button
            @click="confirmAction"
            type="button"
            class="btn btn-primary"
            data-dismiss="modal"
          >Xác nhận</button>
        </div>
      </modal>
    </div>
  </expander>
</template>

<script>
import expander from "@/components/expander.vue";
import modal from "@/components/modal.vue";
import sv from "@/services/erp/settings/Accounts";
import { mapGetters } from "vuex";
let service = null;
export default {
  data() {
    return {
      selectedtItem: null,
      confirm: {
        isShow: false
      },
      actions: {
        isRemove: false,
        isEdit: false,
        isNew: false
      },
      bankForm: {
        _id: "",
        account: "",
        address: "",
        bank: "",
        chartAccount: null,
        currency: "",
        defaultPaymentMethod: 0,
        fullName: "",
        name: "",
        owner: "",
        swiftCode: ""
      }
    };
  },
  computed: {
    ...mapGetters({
      bankAnhCash: "accountState/bankAnhCash",
      currencies: "accountState/currencies",
      bankAccounts: "accountState/paymentMethods",
      StateChanged: "accountState/StateChanged"
    })
  },

  methods: {
    remove(item) {
      this.switchAction("remove");
      this.confirm.isShow = !this.confirm.isShow;
      this.selectedtItem = item;
    },
    edit(item) {
      this.switchAction("edit");
      this.confirm.isShow = !this.confirm.isShow;
      this.bankForm = { ...item };
    },
    newBankAccount() {
      this.switchAction("new");
      this.resetForm();
      this.confirm.isShow = !this.confirm.isShow;
    },
    cancelAction() {
      this.confirm.isShow = !this.confirm.isShow;
      this.selectedtItem = null;
      this.resetForm();
      this.resetAction();
    },
    async confirmAction() {
      if (this.actions.isRemove) {
        if (this.selectedtItem) {
          await service.deleteCurency(this.selectedtItem);
          this.resetForm();
        } else {
          console.log("nothing to remove");
        }
      }
      if (this.actions.isEdit) {
        if (this.bankForm) {
          await service.saveCurrency(this.bankForm);
          this.resetForm();
        } else {
          console.log("nothing to edit");
        }
      }
      if (this.actions.isNew) {
        if (this.bankForm) {
          await service.saveNewCurrency(this.bankForm);
          this.resetForm();
        } else {
          console.log("nothing to edit");
        }
      }
      this.resetAction();
    },
    resetAction() {
      this.actions.isRemove = false;
      this.actions.isEdit = false;
      this.actions.isNew = false;
    },
    resetForm() {
      this.bankForm = {
        name: "",
        decPlace: "",
        active: false,
        symbol: ""
      };
      this.selectedtItem = null;
      this.$store.dispatch("accountState/setStateChanged", {
        isChanged: true,
        name: "bankAccountTab"
      });
    },
    switchAction(name) {
      if (name == "new") {
        this.actions.isRemove = false;
        this.actions.isEdit = false;
        this.actions.isNew = true;
      } else if (name == "edit") {
        this.actions.isRemove = false;
        this.actions.isEdit = true;
        this.actions.isNew = false;
      } else {
        this.actions.isRemove = true;
        this.actions.isEdit = false;
        this.actions.isNew = false;
      }
    }
  },
  async mounted() {
    service = sv(this.$axios, this.$store);
    const allCurencies = await service.getAllCurencies();
  },
  components: {
    modal,
    expander
  }
};
</script>
