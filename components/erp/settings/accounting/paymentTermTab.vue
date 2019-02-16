<template>
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
        <tr v-for="(payment, index) in paymentTerm" :key="payment.name">
          <th scope="row">{{index+1}}</th>
          <td>{{payment.name}}</td>
          <td>{{payment.count ? payment.count : 0}}</td>
          <td>
            <input
              class="form-check-input"
              type="checkbox"
              value="option1"
              :checked="payment.defaultPaymentTerm !== 0"
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
</template>

<script>
export default {
  props: ["paymentTerm"]
};
</script>
