<template>
  <expander :isExpanded="true">
    <div slot="expander-header">
      <h3 class="card-title">Nhóm Chi Phí</h3>
    </div>
    <div slot="expander-body">
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <expenses-item-tree
            v-for="account in allExpenses"
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
        data-target="#expenseModal"
      >
        Thêm Mới
        <i class="fa fa-plus primary"></i>
      </button>
      <modal :id="'expenseModal'">
        <div slot="modal-title">Thông tin tài khoản</div>
        <div slot="modal-body">
          <div class="form-group" v-if="selectedItem">
            <label for="exampleFormControlInput1">Tên tài khoản</label>
            <input v-model="selectedItem.name" type="text" class="form-control">
          </div>
          <div class="form-group" v-if="selectedItem">
            <label for="exampleFormControlSelect1">Tài Khoản</label>
            <select class="form-control" v-model="selectedItem.parent">
              <template v-for="account in accounts">
                <option
                  v-if="selectedItem.parent && selectedItem.parent._id == account._id"
                  :key="account._id"
                  :value="selectedItem.parent"
                  selected="selected"
                >{{account.name}}</option>
                <option v-else :key="account._id" :value="account">{{account.name}}</option>
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
import expensesItemTree from "./expensesItemTree.vue";
import expander from "@/components/expander.vue";
import modal from "@/components/modal.vue";
import { mapGetters } from "vuex";
import sv from "@/services/erp/settings/Accounts";
let service = null;
export default {
  data() {
    return {
      isClick: [],
      selectedItem: {
        name: "",
        parent: null
      },
      confirm: {
        isShow: false
      },
      actions: {
        isRemove: false,
        isEdit: false,
        isNew: false
      }
    };
  },
  methods: {
    editItem(val) {
      this.selectedItem = { ...val };
      console.log("this.selectedItem.parent = ", this.selectedItem.parent);
      this.switchAction("edit");
    },

    newAccount() {
      this.switchAction("new");
      this.resetForm();
      this.confirm.isShow = !this.confirm.isShow;
    },
    cancelAction() {
      this.confirm.isShow = !this.confirm.isShow;
      this.selectedItem = null;
      this.resetForm();
      this.resetAction();
    },
    async confirmAction() {
      let selectedAccount = null;
      this.accounts.forEach(el => {
        if (el._id == this.selectedItem._id) {
          selectedAccount = { ...el };
          selectedAccount.name = this.selectedItem.name;
          selectedAccount.fullName =
            this.selectedItem.parent.name + " / " + this.selectedItem.name;
          selectedAccount.parent = this.selectedItem.parent._id;
          selectedAccount.isAllUpdate = true;
        }
      });

      if (this.actions.isRemove) {
        if (selectedAccount) {
          // await service.deleteAccount(this.selectedItem);
        } else {
          console.log("nothing to remove");
        }
      }
      if (this.actions.isEdit) {
        if (selectedAccount) {
          await service.saveExpresses(selectedAccount);
        } else {
          console.log("nothing to edit");
        }
      }
      if (this.actions.isNew) {
        if (selectedAccount) {
          await service.saveNewExpresses(selectedAccount);
        } else {
          console.log("nothing to edit");
        }
      }
      this.resetAction();
      this.resetForm();
    },
    resetAction() {
      this.actions.isRemove = false;
      this.actions.isEdit = false;
      this.actions.isNew = false;
    },
    resetForm() {
      this.selectedItem = {
        name: "",
        parent: null
      };
      this.$store.dispatch("accountState/setStateChanged", {
        isChanged: true,
        name: "chartOfExpenses"
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
      allExpenses: "accountState/allExpenses",
      accounts: "accountState/expresses",
      StateChanged: "accountState/StateChanged"
    })
  },
  components: {
    expensesItemTree,
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