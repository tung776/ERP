<template>
  <expander :isExpanded="true">
    <div slot="expander-header">
      <h3 class="card-title">Điều Khoản Thanh Toán</h3>
    </div>
    <div slot="expander-body">
      <div class="row">
        <div class="table-responsive-md col-md-12">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên</th>
                <th scope="col">Hạn Thanh Toán</th>
                <th scope="col">Mặc Định</th>
                <th scope="col">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(payment, index) in paymentTerms" :key="payment.name">
                <th scope="row">{{index+1}}</th>
                <td>{{payment.name}}</td>
                <td>{{payment.count ? payment.count : 0}}</td>
                <td>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="option1"
                    :checked="payment.defaultpaymentTerms !== 0"
                  >
                </td>
                <td>
                  <button
                    @click="edit(payment)"
                    type="button"
                    class="btn btn-tool btn-success btn-flat"
                    data-toggle="modal"
                    data-target="#paymentTermModal"
                  >
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button
                    @click="remove(payment)"
                    type="button"
                    class="btn btn-tool btn-danger btn-flat"
                    data-toggle="modal"
                    data-target="#paymentTermConfirmModal"
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
        @click="newPaymentTerm"
        type="button"
        class="btn btn-primary btn-flat"
        data-toggle="modal"
        data-target="#peymentTermModal"
      >
        Thêm Mới
        <i class="fa fa-plus primary"></i>
      </button>
      <!-- paymentTerm modal form-->
      <modal :id="'paymentTermModal'">
        <div slot="modal-title">{{actions.isNew ? "Thêm Mới" : "Thay Đổi Thông Tin"}}</div>
        <div slot="modal-body">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Tên</label>
              <input v-model="paymentTermForm.name" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Thời Hạn Thanh Toán</label>
              <input v-model="paymentTermForm.count" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Mặc Định</label>
              <input
                class="form-check-input"
                type="checkbox"
                :value="paymentTermForm.defaultpaymentTerms"
                :checked="paymentTermForm.defaultpaymentTerms !== 0"
              >
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
      <!--paymentTermConfirm Modal -->
      <modal :id="'paymentTermConfirmModal'">
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
import { mapGetters } from "vuex";
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
      paymentTermForm: {
        name: "",
        defaultpaymentTerms: 0,
        count: 0
      }
    };
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
      this.paymentTermForm = { ...item };
    },
    newpaymentTermAccount() {
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
          await service.deletePaymentTerm(this.selectedtItem);
          this.resetForm();
        } else {
          console.log("nothing to remove");
        }
      }
      if (this.actions.isEdit) {
        if (this.paymentTermForm) {
          await service.savePaymentTerm(this.paymentTermForm);
          this.resetForm();
        } else {
          console.log("nothing to edit");
        }
      }
      if (this.actions.isNew) {
        if (this.paymentTermForm) {
          await service.saveNewPaymentTerm(this.paymentTermForm);
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
      this.paymentTermForm = {
        name: "",
        defaultpaymentTerms: 0,
        count: 0
      };
      this.selectedtItem = null;
      this.$store.dispatch("accountState/setStateChanged", {
        isChanged: true,
        name: "paymentTermTab"
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
  components: {
    modal,
    expander
  },
  computed: {
    ...mapGetters({
      paymentTerms: "accountState/paymentTerms",
      StateChanged: "accountState/StateChanged"
    })
  }
};
</script>
