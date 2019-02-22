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
            v-for="account in allExpense"
            :account="account"
            :key="account._id ? account._id : account.name"
            :marginLeft="0"
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
import expensesItemTree from "./expensesItemTree.vue";
import expander from "@/components/expander.vue";
import modal from "@/components/modal.vue";
export default {
  data() {
    return {
      isClick: [],
      selected: null
    };
  },
  computed: {
    ...mapGetters({
      allExpense: "accountState/allExpense",
      StateChanged: "accountState/StateChanged"
    })
  },
  components: {
    expensesItemTree,
    modal,
    expander
  },
  methods: {
    itemClicked(account) {
      const name = account.name;
      if (this.isClick[name]) {
        this.isClick[name] = false;
        this.selected = null;
      } else {
        this.isClick[name] = true;
        this.selected = account;
      }
    }
  }
};
</script>