<template>
  <expander :isExpanded="true">
    <div slot="expander-header">
      <h3 class="card-title">Điều Khoản Thanh Toán</h3>
    </div>
    <div slot="expander-body">
      <div class="row">
        <div class="table-responsive-md col-md-12">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên</th>
                <th scope="col">Hạn Thanh Toán</th>
                <th scope="col">Mặc Định</th>
                <th scope="col">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(payment, index) in paymentTerms" :key="payment.name">
                <th scope="row">{{index+1}}</th>
                <td>{{payment.name}}</td>
                <td>{{payment.count ? payment.count : 0}}</td>
                <td>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="option1"
                    :checked="payment.defaultpaymentTerms !== 0"
                  >
                </td>
                <td>
                  <button type="button" class="btn btn-tool btn-success btn-flat">
                    <i class="fa fa-pencil-square-o"></i>
                  </button>
                  <button type="button" class="btn btn-tool btn-danger btn-flat">
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
        type="button"
        class="btn btn-primary btn-flat"
        data-toggle="modal"
        data-target="#paymentTermModal"
      >
        Thêm Mới
        <i class="fa fa-plus primary"></i>
      </button>
      <modal :id="'paymentTermModal'">
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
import expander from "@/components/expander.vue";
import modal from "@/components/modal.vue";
export default {
  props: ["paymentTerms"],
  components: {
    modal,
    expander
  }
};
</script>
