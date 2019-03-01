<template>
  <modal :id="'locationModal'">
    <div slot="modal-title">Thêm Vị Trí</div>
    <div slot="modal-body"></div>
    <div slot="modal-footer">
      <button @click="cancelAction" type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
      <button type="button" class="btn btn-primary" data-dismiss="locationModal">Lưu Dữ Liệu</button>
    </div>
  </modal>
</template>
<script>
import modal from "@/components/modal.vue";
import { mapGetters } from "vuex";
import sv from "@/services/erp/settings/Product";
let service = null;
export default {
  data() {
    return {
      locationForm: {}
    };
  },
  async mounted() {
    service = sv(this.$axios, this.$store);
  },
  components: {
    modal
  },
  methods: {
    cancelAction() {}
  }
};
</script>