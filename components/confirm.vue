<template>
  <div>
    <modal :id="id">
      <div slot="modal-title">{{title}}</div>
      <div slot="modal-body">
        <slot name="modal-body"></slot>
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
</template>
<script>
import modal from "@/components/modal.vue";
export default {
  props: ["cancelAction", "confirmAction", "title", "id"],
  components: {
    modal
  }
};
</script>