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
        @click="newCurency"
        type="button"
        class="btn btn-primary btn-flat"
        data-toggle="modal"
        data-target="#currencyModal"
      >
        Thêm Mới
        <i class="fa fa-plus primary"></i>
      </button>
      <modal :id="'currencyModal'">
        <div slot="modal-title">{{actions.isNew ? "Thêm Mới" : "Thay Đổi Thông Tin"}}</div>
        <div slot="modal-body">
          <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Chọn Loại Tiền</label>
              <select class="form-control" v-model="currencyForm.name">
                <template v-for="curency in allCurencies">
                  <option
                    v-if="currencyForm._id == curency._id"
                    :key="curency._id"
                    :value="currencyForm.name"
                    selected="selected"
                  >{{curency.name}}</option>
                  <option v-else :key="curency._id" :value="curency.name">{{curency.name}}</option>
                </template>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Ký Hiệu</label>
              <input v-model="currencyForm.symbol" type="text" class="form-control" placeholder="$">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Số sau dấu "."</label>
              <input
                v-model="currencyForm.decPlace"
                type="text"
                class="form-control"
                placeholder="$"
              >
            </div>
            <div class="form-group">
              <div class="form-group form-check">
                <input
                  v-model="currencyForm.active"
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                >
                <label class="form-check-label" for="exampleCheck1">Kích Hoạt</label>
              </div>
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
      currencyForm: {
        name: "",
        decPlace: "",
        active: false,
        symbol: ""
      },
      allCurencies: []
    };
  },
  async mounted() {
    const allCurencies = await service.getAllCurencies(this.$axios);
    this.allCurencies = allCurencies;
  },
  methods: {
    remove(item) {
      this.switchAction("remove");
      this.confirm.isShow = !this.confirm.isShow;
      this.selectedtItem = item;
      console.log("item removed ", item);
    },
    edit(item) {
      this.switchAction("edit");
      this.confirm.isShow = !this.confirm.isShow;
      this.currencyForm = { ...item };
      console.log("item editing ", item);
    },
    newCurency() {
      this.switchAction("new");
      this.confirm.isShow = !this.confirm.isShow;
      // console.log("item added ", this.selectedtItem);
    },
    cancelAction() {
      this.confirm.isShow = !this.confirm.isShow;
      this.selectedtItem = null;
      this.resetForm();
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
        if (this.currencyForm) {
          console.log(`item ${this.currencyForm.name} edited`);
          this.resetForm();
        } else {
          console.log("nothing to edit");
        }
      }
      if (this.actions.isNew) {
        if (this.currencyForm) {
          await service.saveNewCurrency(this.$axios, this.currencyForm);
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
      this.currencyForm = {
        name: "",
        decPlace: "",
        active: false,
        symbol: ""
      };
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
  }
};
</script>
