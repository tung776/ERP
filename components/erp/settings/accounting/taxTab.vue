<template>
  <expander :isExpanded="true">
    <div slot="expander-header">
      <h3 class="card-title">Thuế</h3>
    </div>
    <div slot="expander-body">
      <div class="row">
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
      </div>
    </div>
    <div slot="expander-footer">
      <button
        type="button"
        class="btn btn-primary btn-flat"
        data-toggle="modal"
        data-target="#taxModal"
      >
        Thêm Mới
        <i class="fa fa-plus primary"></i>
      </button>
      <modal :id="'taxModal'">
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
import { mapGetters } from "vuex";
export default {
  components: {
    modal,
    expander
  },
  computed: {
    ...mapGetters({
      tax: "accountState/taxSettings",
      StateChanged: "accountState/StateChanged"
    })
  }
};
</script>
