<template>
  <div class="card card-success">
    <div class="card-body">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Tài Khoản Thuế bán hàng</label>
            <select class="form-control">
              <option checked>{{defaultSettings.salesTax ? defaultSettings.salesTax.name : ""}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Tài Khoản Mặc Định Thuế mua hàng</label>
            <select class="form-control">
              <option
                checked
              >{{defaultSettings.purchaseTax ? defaultSettings.purchaseTax.name : ""}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Tài Khoản Mặc Định Số Dư Thuế</label>
            <select class="form-control">
              <option checked>{{defaultSettings.carriedTax ? defaultSettings.carriedTax.name : ""}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Tài Khoản Mặc Định Vận Chuyển</label>
            <select class="form-control">
              <option checked>{{defaultSettings.shipping ? defaultSettings.shipping.name : ""}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label>Tài Khoản Mặc Định Ngân Hàng</label>
            <select class="form-control">
              <option></option>
              <option v-for="bank in bankAccounts" :key="bank.name">{{bank.name}}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- <table class="table table-hover table-dark">
      <tbody>
        <tr>
          <th scope="row">{{defaultSettings.salesTax.name}}</th>
          <td>{{defaultSettings.purchaseTax.name}}</td>
          <td>{{defaultSettings.carriedTax.name}}</td>
          <td>{{defaultSettings.payableTax.name}}</td>
          <td>{{defaultSettings.shipping.name}}</td>
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
    </table>-->
  </div>
</template>

<script>
export default {
  props: ["defaultSettings", "bankAccounts"]
};
</script>
