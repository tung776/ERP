<template>
  <div class="table-responsive-md col-md-12">
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tên</th>
          <th scope="col">Ngân hàng</th>
          <th scope="col">Tài Khoản</th>
          <th scope="col">Số hiệu tài khoản</th>
          <th scope="col">Loại Tiền</th>
          <th scope="col">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(account, index) in bankAccounts" :key="account.name">
          <th scope="row">{{index+1}}</th>
          <td>{{account.name}}</td>
          <td>{{account.bank}}</td>
          <td>{{account.account}}</td>
          <td>{{account.chartAccount.code + " " + account.chartAccount.account}}</td>
          <td>{{account.currency}}</td>
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
  props: ["bankAccounts"]
};
</script>
