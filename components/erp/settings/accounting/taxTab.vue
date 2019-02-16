<template>
  <div class="table-responsive-md col-md-12">
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Mã</th>
          <th scope="col">Tên Thuế</th>
          <th scope="col">Tỷ lệ thuế</th>
          <th scope="col">Quốc Gia</th>
          <th scope="col">Mặc Định</th>
          <th scope="col">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tax" :key="item.name">
          <th scope="row">{{index+1}}</th>
          <td>{{item.code}}</td>
          <td>{{item.name}}</td>
          <td>{{item.rate}}</td>
          <td>{{item.country}}</td>
          <td>
            <input
              class="form-check-input"
              type="checkbox"
              value="option1"
              :checked="item.isDefault"
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
  props: ["tax"]
};
</script>
