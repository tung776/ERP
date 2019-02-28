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
                <th scope="col">Tên</th>
                <th scope="col">Thuộc Sở Hữu</th>
                <th scope="col">Kho Chính</th>
                <th scope="col">Khu Vực</th>
                <th scope="col">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in wareHouses" :key="item.name">
                <th scope="row">{{index+1}}</th>
                <td>{{item.name}}</td>
                <td>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="option1"
                    disabled
                    :checked="item.isOwn"
                  >
                </td>
                <td>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="option1"
                    disabled
                    :checked="item.main"
                  >
                </td>
                <td>
                  <span
                    class="badge badge-warning"
                    style="font-size: 14px"
                  >{{item.locations[0].name}}</span>
                </td>
                <td>{{(item.zone && item.zone.length > 0) ? item.zone[0] : ""}}</td>
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
      <ware-house-modal
        v-if="wareHouseForm"
        :wareHouseForm="wareHouseForm"
        :title="actions.isNew ? 'Thêm Mới' : 'Thay Đổi Thông Tin'"
        :confirmAction="confirmAction"
        :cancelAction="cancelAction"
      />
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
import wareHouseModal from "@/components/erp/settings/products/wareHouse/wareHouseModal.vue";
import { mapGetters } from "vuex";
import sv from "@/services/erp/settings/Product";
import sv_account from "@/services/erp/settings/Accounts";
let service = null;
let service_account = null;
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
    service_account = sv_account(this.$axios, this.$store);
  },
  methods: {
    remove(item) {
      this.switchAction("remove");
      this.confirm.isShow = !this.confirm.isShow;
      this.selectedtItem = item;
    },
    async edit(item) {
      this.wareHouseForm = { ...item };
      this.switchAction("edit");
      this.confirm.isShow = !this.confirm.isShow;
      await this.loadMoreDate();
    },
    async newWareHouse() {
      this.switchAction("new");
      this.resetForm();
      this.confirm.isShow = !this.confirm.isShow;
      await this.loadMoreDate();
    },
    async loadMoreDate() {
      await service.getAccountInventory();
      await service_account.getCountries();
    },
    cancelAction() {
      this.confirm.isShow = !this.confirm.isShow;
      this.selectedtItem = null;
      this.resetForm();
      this.resetAction();
    },
    async confirmAction(data) {
      console.log("data = ", data);
      return;
      if (this.actions.isRemove) {
        if (data) {
          await service.deleteWareHouse(data);
          this.resetForm();
        } else {
          console.log("nothing to remove");
        }
      }
      if (this.actions.isEdit) {
        if (data) {
          await service.saveWareHouse(data);
          this.resetForm();
        } else {
          console.log("nothing to edit");
        }
      }
      if (this.actions.isNew) {
        if (data) {
          await service.newWareHouse(data);
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
    expander,
    wareHouseModal
  },
  computed: {
    ...mapGetters({
      StateChanged: "settings/products/StateChanged",
      wareHouses: "settings/products/warehouse",
      accountInventories: "settings/products/accountInventory",
      countries: "accountState/countries"
    })
  }
};
</script>
