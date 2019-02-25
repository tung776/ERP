<template>
  <expander :isExpanded="true">
    <div slot="expander-header">
      <h3 class="card-title">Thuế</h3>
    </div>
    <div slot="expander-body">
      <div class="row">
        <div class="table-responsive-md col-md-12">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Mã</th>
                <th scope="col">Tên Thuế</th>
                <th scope="col">Tỷ lệ thuế</th>
                <th scope="col">Quốc Gia</th>
                <th scope="col">Mặc Định</th>
                <th scope="col">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in wareHouse" :key="item.name">
                <th scope="row">{{index+1}}</th>
                <td>{{item.code}}</td>
                <td>{{item.name}}</td>
                <td>{{item.rate * 100}} %</td>
                <td>{{item.country}}</td>
                <td>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="option1"
                    :checked="item.isDefault"
                  >
                </td>
                <td>
                  <button
                    @click="edit(item)"
                    type="button"
                    class="btn btn-tool btn-success btn-flat"
                    data-toggle="modal"
                    data-target="#wareHouseModal"
                  >
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button
                    @click="remove(item)"
                    type="button"
                    class="btn btn-tool btn-danger btn-flat"
                    data-toggle="modal"
                    data-target="#wareHouseConfirmModal"
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
        @click="newWareHouse"
        type="button"
        class="btn btn-primary btn-flat"
        data-toggle="modal"
        data-target="#peymentTermModal"
      >
        Thêm Mới
        <i class="fa fa-plus primary"></i>
      </button>
      <!-- wareHouse modal form-->
      <modal :id="'wareHouseModal'">
        <div slot="modal-title">{{actions.isNew ? "Thêm Mới" : "Thay Đổi Thông Tin"}}</div>
        <div slot="modal-body">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Code</label>
              <input v-model="wareHouseForm.code" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Tên</label>
              <input v-model="wareHouseForm.name" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Tỷ lệ</label>
              <input v-model="wareHouseForm.rate" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Quốc Gia</label>
              <select class="form-control" v-model="wareHouseForm.country">
                <template v-for="country in countries">
                  <option
                    v-if="wareHouseForm.country && wareHouseForm.country._id == country._id"
                    :key="country._id"
                    :value="wareHouseForm.country"
                    selected="selected"
                  >{{country.name}}</option>
                  <option v-else :key="country._id" :value="country.name">{{country.name}}</option>
                </template>
              </select>
            </div>
            <div class="form-group form-check">
              <input
                v-model="wareHouseForm.isDefault"
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              >
              <label class="form-check-label" for="exampleCheck1">Mặc định</label>
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
      <!--wareHouseConfirm Modal -->
      <modal :id="'wareHouseConfirmModal'">
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
import sv from "@/services/erp/settings/Product";
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
      wareHouseForm: {
        account: null,
        address: "",
        isOwn: false,
        locations: null,
        main: false,
        name: "",
        zones: []
      }
    };
  },
  async mounted() {
    service = sv(this.$axios, this.$store);
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
      this.wareHouseForm = { ...item };
    },
    newWareHouse() {
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
          await service.deleteWareHouse(this.selectedtItem);
          this.resetForm();
        } else {
          console.log("nothing to remove");
        }
      }
      if (this.actions.isEdit) {
        if (this.wareHouseForm) {
          await service.saveWareHouse(this.wareHouseForm);
          this.resetForm();
        } else {
          console.log("nothing to edit");
        }
      }
      if (this.actions.isNew) {
        if (this.wareHouseForm) {
          await service.newWareHouse(this.wareHouseForm);
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
      this.wareHouseForm = {
        account: null,
        address: "",
        isOwn: false,
        locations: null,
        main: false,
        name: "",
        zones: []
      };
      this.selectedtItem = null;
      this.$store.dispatch("settings/products/setStateChanged", {
        isChanged: true,
        name: "wareHouseTab"
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
      StateChanged: "settings/products/StateChanged",
      warehouse: "settings/products/warehouse"
    })
  }
};
</script>
