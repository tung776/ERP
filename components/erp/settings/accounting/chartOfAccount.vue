<template>
  <expander :isExpanded="true">
    <div slot="expander-header">
      <h3 class="card-title">Biểu Đồ Tài Khoản</h3>
    </div>
    <div slot="expander-body">
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <account-item-tree
            v-for="account in allAccount"
            :account="account"
            :key="account._id ? account._id : account.name"
            :marginLeft="0"
            :editItem="editItem"
          />
        </ul>
      </nav>
    </div>
    <div slot="expander-footer">
      <button
        type="button"
        class="btn btn-primary btn-flat"
        data-toggle="modal"
        data-target="#chartAccountModal"
      >
        Thêm Mới
        <i class="fa fa-plus primary"></i>
      </button>
      <modal :id="'chartAccountModal'">
        <div slot="modal-title">Thông tin tài khoản</div>
        <div slot="modal-body">
          <div class="form-group">
            <label for="exampleFormControlInput1">Tên tài khoản</label>
            <input v-model="chartAccountForm.name" type="text" class="form-control">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Quốc Gia</label>
            <select class="form-control" v-model="chartAccountForm.parent">
              <template v-for="account in accounts">
                <option
                  v-if="chartAccountForm.parent && chartAccountForm.parent._id == account._id"
                  :key="account._id"
                  :value="chartAccountForm.parent"
                  selected="selected"
                >{{account.name}}</option>
                <option v-else :key="account._id" :value="account.name">{{account.name}}</option>
              </template>
            </select>
          </div>
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
    </div>
  </expander>
</template>

<script>
import accountItemTree from "./accountItemTree.vue";
import expander from "@/components/expander.vue";
import modal from "@/components/modal.vue";
import { mapGetters } from "vuex";
import sv from "@/services/erp/settings/Accounts";
let service = null;
export default {
  data() {
    return {
      isClick: [],
      selectedtItem: null,
      confirm: {
        isShow: false
      },
      actions: {
        isRemove: false,
        isEdit: false,
        isNew: false
      },
      accounts: [],
      chartAccountForm: {
        name: "",
        parent: 0
      }
    };
  },
  methods: {
    editItem(val) {
      this.selected = val;
      console.log("val = ", val);
    },
    remove(item) {
      this.switchAction("remove");
      this.confirm.isShow = !this.confirm.isShow;
      this.selectedtItem = item;
    },
    edit(item) {
      this.switchAction("edit");
      this.confirm.isShow = !this.confirm.isShow;
      this.chartAccountForm = { ...item };
    },
    newTax() {
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
          await service.deletetax(this.selectedtItem);
          this.resetForm();
        } else {
          console.log("nothing to remove");
        }
      }
      if (this.actions.isEdit) {
        if (this.chartAccountForm) {
          await service.saveTax(this.chartAccountForm);
          this.resetForm();
        } else {
          console.log("nothing to edit");
        }
      }
      if (this.actions.isNew) {
        if (this.chartAccountForm) {
          await service.saveNewtax(this.chartAccountForm);
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
      this.chartAccountForm = {
        name: "",
        parent: 0
      };
      this.selectedtItem = null;
      this.$store.dispatch("accountState/setStateChanged", {
        isChanged: true,
        name: "chartOfAccount"
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
  },
  computed: {
    ...mapGetters({
      allAccount: "accountState/allAccount",
      StateChanged: "accountState/StateChanged"
    })
  },
  components: {
    accountItemTree,
    modal,
    expander
  }
  // methods: {
  //   itemClicked(account) {
  //     const name = account.name;
  //     if (this.isClick[name]) {
  //       this.isClick[name] = false;
  //       this.selected = null;
  //     } else {
  //       this.isClick[name] = true;
  //       this.selected = account;
  //     }
  //   }
  // }
};
</script>