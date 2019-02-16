<template>
  <div class="table-responsive-md col-md-12">
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tên</th>
          <th scope="col">Ký Hiệu</th>
          <th scope="col">Tình Trạng</th>
          <th scope="col">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in currencies" :key="item.name">
          <th scope="row">{{index+1}}</th>
          <td>{{item.name}}</td>
          <td>{{item.symbol}}</td>
          <td>{{item.active}}</td>
          <td>
            <button type="button" class="btn btn-tool btn-success btn-flat" data-widget="collapse">
              <i class="fa fa-pencil-square-o"></i>
            </button>
            <button type="button" class="btn btn-tool btn-danger btn-flat" data-widget="remove">
              <i class="fa fa-remove"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-tool btn-primary btn-flat" data-widget="collapse">
      Thêm Mới
      <i class="fa fa-plus primary"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: ["currencies"]
};
</script>
