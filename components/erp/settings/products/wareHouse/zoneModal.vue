<template>
  <modal :id="'zoneModal'">
    <div slot="modal-title">Thêm Vị Trí</div>
    <div slot="modal-body">
      <div class="form-group">
        <label for="exampleFormControlInput1">Tên Khu Vực</label>
        <input
          id="exampleFormControlInput1"
          v-model="zoneForm.name"
          type="text"
          class="form-control"
        >
      </div>
    </div>
    <div slot="modal-footer">
      <button @click="cancelAction" type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
      <button
        @click="saveNewZone"
        type="button"
        class="btn btn-primary"
        data-dismiss="zoneModal"
      >Lưu</button>
    </div>
  </modal>
</template>
<script>
import modal from "@/components/modal.vue";
import { mapGetters } from "vuex";
import sv from "@/services/erp/settings/Product";
import zsv from "@/services/erp/settings/zone";
let service = null;
let zoneService = null;
export default {
  props: ["wareHouseId"],
  mounted() {
    service = sv(this.$axios, this.$store);
    zoneService = zsv(this.$axios, this.$store);
  },
  data() {
    return {
      zoneForm: {
        name: ""
      }
    };
  },
  components: {
    modal
  },
  methods: {
    cancelAction() {},
    saveNewZone() {
      zoneService.newZone(this.wareHouseId, this.zoneForm.name);
      this.stateChanged();
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