<template>
  <div>
    <modal :id="'wareHouseModal'">
      <div slot="modal-title">{{title}}</div>
      <div slot="modal-body">
        <div class="form-group">
          <label for="exampleFormControlInput1">Tên</label>
          <input
            id="exampleFormControlInput1"
            v-model="wareHouseForm.name"
            type="text"
            class="form-control"
          >
        </div>
        <div class="form-group form-check">
          <label>Sở Hữu</label>
          <input
            class="form-check-input"
            type="checkbox"
            value="option1"
            :checked="wareHouseForm.isOwn"
          >
        </div>
        <div class="form-group form-check">
          <label>Kho Chính</label>
          <input
            class="form-check-input"
            type="checkbox"
            value="option1"
            :checked="wareHouseForm.main"
          >
        </div>
        <div class="form-group">
          <label>Vị Trí</label>
          <!-- <span class="badge badge-warning" style="font-size: 14px">{{wareHouseForm.locations.name}}</span> -->
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
        <div class="form-group">
          <label for="exampleFormControlSelect1">Tài Khoản</label>
          <select class="form-control" v-model="wareHouseForm.account">
            <template v-for="account in accountInventories">
              <option
                v-if="wareHouseForm.account && wareHouseForm.account._id == account._id"
                :key="account._id"
                :value="wareHouseForm.account"
                selected="selected"
              >{{account.name}}</option>
              <option v-else :key="account._id" :value="account">{{account.name}}</option>
            </template>
          </select>
        </div>
        <div class="form-group">
          <label class="form-check-label" for="exampleCheck1">Khu Vực</label>
          <div class="zone" v-for="item in wareHouseForm.locations" :key="item.name">
            <button
              @click="confirmRemoveLocation(item)"
              type="button"
              class="btn btn-tool btn-danger btn-flat"
              data-toggle="modal"
              data-target="#wareHouseConfirmModal"
            >
              <i class="fa fa-remove"></i>
            </button>
            <span class="badge badge-warning" style="font-size: 14px">{{item.name}}</span>
          </div>
          <button
            @click="newLocation"
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#locationModal"
          >Thêm Vị Trí</button>
        </div>
        <div class="form-group">
          <label for="exampleCheck1">Vùng</label>
          <div class="zone" v-for="item in wareHouseForm.zones" :key="item.name">
            <button
              @click="confirmRemoveZone(item)"
              type="button"
              class="btn btn-tool btn-danger btn-flat"
              data-toggle="modal"
              data-target="#zoneConfirm"
            >
              <i class="fa fa-remove"></i>
            </button>
            <span class="badge badge-warning" style="font-size: 14px">{{item.name}}</span>
          </div>
          <button
            @click="newZone"
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#zoneModal"
          >Thêm Khu Vực</button>
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
          @click="confirmAction(wareHouseForm)"
          type="button"
          class="btn btn-primary"
          data-dismiss="modal"
        >Lưu Dữ Liệu</button>
      </div>
    </modal>
    <location-modal/>
    <zone-modal :wareHouseId="wareHouseForm._id"/>
    <confirm
      :cancelAction="item=>{selectedZone = null}"
      :confirmAction="removeZone"
      :title="'Xác Nhận'"
      :id="'zoneConfirm'"
    />`
    <confirm
      :cancelAction="item=>{selectedLocation = null}"
      :confirmAction="removeLocation"
      :title="'Xác Nhận'"
      :id="'locationConfirm'"
    />`
  </div>
</template>
<script>
import expander from "@/components/expander.vue";
import modal from "@/components/modal.vue";
import confirm from "@/components/confirm.vue";
import locationModal from "@/components/erp/settings/products/wareHouse/locationModal.vue";
import zoneModal from "@/components/erp/settings/products/wareHouse/zoneModal.vue";
import { mapGetters } from "vuex";
import sv from "@/services/erp/settings/Product";
import zoneSv from "@/services/erp/settings/zone";
let service = null;
let zoneService = null;
export default {
  props: ["title", "wareHouseForm", "cancelAction", "confirmAction"],
  data() {
    return {
      selectedZone: null,
      selectedLocation: null
    };
  },

  async mounted() {
    service = sv(this.$axios, this.$store);
    zoneService = zoneSv(this.$axios, this.$store);
  },
  components: {
    modal,
    confirm,
    expander,
    zoneModal,
    locationModal
  },
  computed: {
    ...mapGetters({
      accountInventories: "settings/products/accountInventory",
      countries: "accountState/countries"
    })
  },
  methods: {
    newZone() {},
    newLocation() {},
    confirmRemoveZone(item) {
      this.selectedZone = item;
      console.log("this.selectedZone", this.selectedZone);
    },
    confirmRemoveLocation(item) {
      this.selectedLocation = item;
    },
    async removeZone() {
      await zoneService.deleteZone(this.selectedZone._id);
      this.stateChanged();
      this.selectedZone = null;
    },
    removeLocation(location) {
      this.selected = null;
    },
    stateChanged() {
      this.$store.dispatch("settings/products/setStateChanged", {
        isChanged: true,
        name: "wareHouseTab"
      });
    }
  }
};
</script>
<style scoped>
.zone {
  border: 1px solid darkgray;
  border-radius: 5px;
  padding: 10px 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
