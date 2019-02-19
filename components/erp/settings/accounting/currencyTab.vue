<template>
  <expander :isExpanded="true">
    <div slot="expander-header">
      <h3 class="card-title">Loại Tiền Tệ</h3>
    </div>
    <div slot="expander-body">
      <div class="row">
        <div class="table-responsive-md col-md-12">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên</th>
                <th scope="col">Ký Hiệu</th>
                <th scope="col">Tình Trạng</th>
                <th scope="col">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in currencies" :key="item.name">
                <th scope="row">{{index+1}}</th>
                <td>{{item.name}}</td>
                <td>{{item.symbol}}</td>
                <td>{{item.active}}</td>
                <td>
                  <button
                    @click="edit(item)"
                    type="button"
                    class="btn btn-tool btn-success btn-flat"
                    data-toggle="modal"
                    data-target="#currencyModal"
                  >
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button
                    @click="remove(item)"
                    type="button"
                    class="btn btn-tool btn-danger btn-flat"
                    data-toggle="modal"
                    data-target="#confirmModal"
                  >
                    <i class="fa fa-remove"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--  -->
      </div>
    </div>
    <div slot="expander-footer">
      <button
        type="button"
        class="btn btn-primary btn-flat"
        data-toggle="modal"
        data-target="#currencyModal"
      >
        Thêm Mới
        <i class="fa fa-plus primary"></i>
      </button>
      <modal :id="'currencyModal'">
        <div slot="modal-title">Tiêu đề</div>
        <div slot="modal-body">
          <p>nội dung</p>
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
      <modal :id="'confirmModal'">
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
import service from "@/services/erp/settings/Accounts";
export default {
  props: ["currencies"],
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
      currencyForm: {}
    };
  },
  methods: {
    remove(item) {
      this.confirm.isShow = !this.confirm.isShow;
      this.switchAction("remove");
      this.selectedtItem = item;
      console.log("item removed ", item);
    },
    edit(item) {
      this.confirm.isShow = !this.confirm.isShow;
      this.switchAction("edit");
      this.selectedtItem = item;
      console.log("item editing ", item);
    },
    new() {
      this.confirm.isShow = !this.confirm.isShow;
      this.switchAction("new");
      this.selectedtItem = this.currencyForm;
      console.log("item added ", this.selectedtItem);
    },
    cancelAction() {
      this.confirm.isShow = !this.confirm.isShow;
      this.selectedtItem = null;
      this.resetAction();
      console.log("item canceled ");
    },
    async confirmAction() {
      if (this.actions.isRemove) {
        if (this.selectedtItem) {
          await service.deleteCurency(this.$axios, this.selectedtItem);
          this.selectedtItem = null;
        } else {
          console.log("nothing to remove");
        }
      }
      if (this.actions.isEdit) {
        if (this.selectedtItem) {
          console.log(`item ${this.selectedtItem.name} edited`);
          this.selectedtItem = null;
        } else {
          console.log("nothing to edit");
        }
      }
      if (this.actions.isNew) {
        if (this.selectedtItem) {
          console.log(`item ${this.selectedtItem.name} added`);
          this.selectedtItem = null;
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
    switchAction(name) {
      if (name == "new") {
        this.actions.isRemove = false;
        this.actions.isEdit = false;
        this.actions.isNew = true;
      }
      if (name == "edit") {
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
  }
};
</script>
