<template>
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
      <div class="form-group form-check">
        <input
          v-model="wareHouseForm.isDefault"
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
        >
        <label class="form-check-label" for="exampleCheck1">Mặc định</label>
      </div>
    </div>
    <div slot="modal-footer">
      <button @click="cancelAction" type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
      <button
        @click="confirmAction(wareHouseForm)"
        type="button"
        class="btn btn-primary"
        data-dismiss="modal"
      >Lưu Dữ Liệu</button>
    </div>
  </modal>
</template>
<script>
import expander from "@/components/expander.vue";
import modal from "@/components/modal.vue";
import { mapGetters } from "vuex";
import sv from "@/services/erp/settings/Product";
import sv_account from "@/services/erp/settings/Accounts";
let service = null;
let service_account = null;
export default {
  props: ["title", "wareHouseForm", "cancelAction", "confirmAction"],

  async mounted() {
    service = sv(this.$axios, this.$store);
    service_account = sv_account(this.$axios, this.$store);
  },
  components: {
    modal,
    expander
  },
  computed: {
    ...mapGetters({
      accountInventories: "settings/products/accountInventory",
      countries: "accountState/countries"
    })
  }
};
</script>