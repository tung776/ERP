<template>
  <div class="card card-primary">
    <!-- <div class="card"> -->
    <div class="card-header">
      <h3 class="card-title">HỒ SƠ TỔ CHỨC</h3>
    </div>
    <!-- /.card-header -->
    <div class="card-body table-responsive p-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-12 card-body">
            <h4>Logo Công ty</h4>
          </div>
          <div class="col-lg-9 col-12 card-body">
            <div class="info-box logo-box">
              <span class="info-box-icon">
                <i class="fa fa-bookmark-o"></i>
              </span>
              <div class="info-box-content">
                <img :src="form.image" class="img-fluid logo" alt>
              </div>

              <div class="info-box-content">
                <input type="file" v-on:change="onImageChange" id="inputImg" accept="image/*">
              </div>
              <!-- /.info-box-content -->
            </div>
          </div>
          <div class="col-lg-3 col-12 card-body">
            <label for>Tên tổ chức</label>
          </div>
          <div class="col-lg-9 col-12 card-body">
            <input
              v-model="form.organizationName"
              type="text"
              class="form-control"
              id="organizationName"
              placeholder="Tên tổ chức"
            >
          </div>
          <div class="col-lg-3 col-12 card-body">
            <label for>Lĩnh Vực</label>
          </div>
          <div class="col-lg-9 col-12 card-body">
            <input
              v-model="form.industry"
              type="text"
              class="form-control"
              id="organizationName"
              placeholder="Lĩnh Vực"
            >
          </div>
          <div class="col-lg-3 col-12 card-body">
            <label for>Địa Chỉ</label>
          </div>
          <div class="col-lg-9 col-12 card-body">
            <div class="row">
              <div class="col-lg-12 card-body">
                <label for>Đường</label>
                <input
                  v-model="form.address.street"
                  type="text"
                  class="form-control"
                  id="organizationName"
                  placeholder="Số nhà và tên đường"
                >
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 card-body">
                <label for>Quận Huyện</label>
                <input
                  v-model="form.address.state"
                  type="text"
                  class="form-control"
                  id="organizationName"
                  placeholder="Quận Huyện"
                >
              </div>

              <div class="col-lg-4 card-body">
                <label for>Tỉnh/Thành</label>
                <input
                  v-model="form.address.city"
                  type="text"
                  class="form-control"
                  id="organizationName"
                  placeholder="Tỉnh / thành phố"
                >
              </div>
              <div class="col-lg-4 card-body">
                <label for>Quốc Gia</label>
                <input
                  v-model="form.address.country"
                  type="text"
                  class="form-control"
                  id="organizationName"
                  placeholder="Quốc Gia"
                >
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 card-body">
                <label for>Mã Bưu Chính</label>
                <input
                  v-model="form.address.zipcode"
                  type="text"
                  class="form-control"
                  id="organizationName"
                  placeholder="Mã Bưu Chính"
                >
              </div>
              <div class="col-lg-6 card-body">
                <label for>Điện Thoại</label>
                <input
                  v-model="form.address.phone"
                  type="text"
                  class="form-control"
                  id="organizationName"
                  placeholder="Số Điện Thoại"
                >
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 card-body">
                <label for>Fax</label>
                <input
                  v-model="form.address.fax"
                  type="text"
                  class="form-control"
                  id="organizationName"
                  placeholder="Số Fax"
                >
              </div>
              <div class="col-lg-6 card-body">
                <label for>Website</label>
                <input
                  v-model="form.address.website"
                  type="text"
                  class="form-control"
                  id="organizationName"
                  placeholder="Website"
                >
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-12 card-body">
            <label for>Địa Chỉ Liên Hệ Chính</label>
          </div>
          <div class="col-lg-9 col-12 card-body">
            <div class="row">
              <div class="col-lg-6">
                <label for>Liên hệ</label>
                <input
                  v-model="form.login"
                  type="text"
                  class="form-control"
                  id="organizationName"
                  placeholder="Liên Hệ"
                >
              </div>
              <div class="col-lg-6">
                <h4>Các email được gửi tự động sử dụng tài khoản này</h4>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-12 card-body">
            <label for>Thiết Lập Khu Vực</label>
          </div>
          <div class="col-lg-9 col-12 card-body">
            <div class="row">
              <div class="col-lg-6">
                <label for>Loại Tiền Tệ</label>
                <select class="form-control">
                  <option>VNĐ</option>
                  <option>USD</option>
                </select>
              </div>
              <div class="col-lg-6">
                <label for>Ngày Bắt Đầu</label>
                <input
                  type="text"
                  class="form-control"
                  data-inputmask="'alias': 'dd/mm/yyyy'"
                  data-mask
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer center">
        <div class="col-lg-6 offset-lg-3">
          <button class="btn btn-primary btn-lg">Lưu Thay Đổi</button>
          <button class="btn btn-default float-right btn-lg">Hủy Thay Đổi</button>
        </div>
      </div>
    </div>
    <!-- /.card-body -->
    <!-- </div> -->
    <!-- /.card -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        _id: "",
        name: "",
        __v: 0,
        paymentTerms: null,
        bankAccount: null,
        workInProgress: null,
        discount: "",
        shipping: "",
        carriedTax: "",
        payableTax: "",
        purchaseTax: "",
        salesTax: "",
        contactName: "",
        user: null,
        language: null,
        defaultEmail: true,
        contact: null,
        industry: "",
        currency: "",
        website: "",
        phone: "",
        imageSrc: "",
        address: {
          zip: "",
          fax: "",
          state: "",
          city: "",
          street: "",
          country: ""
        },
        startDate: ""
      }
    };
  },
  layout(contex) {
    return "erp";
  },
  mounted() {},
  methods: {
    async onImageChange(e) {
      try {
        this.form.image = null;
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        await this.createImage(files[0]);
      } catch (error) {
        console.log("error: ", error);
      }
    },
    async createImage(file) {
      let reader = new FileReader();
      let vm = this.form;
      reader.onload = e => {
        vm.image = e.target.result;
      };
      await reader.readAsDataURL(file);
    },
    async uploadImage() {
      axios.post("/image/store", { image: this.image }).then(response => {
        console.log(response);
      });
    }
  }
};
</script>

<style scoped>
#inputImg {
  position: absolute;
  top: 0;
  height: 20px;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 0;
  width: 50%;
  height: 100%;
  left: 0;
  cursor: pointer;
  z-index: 1;
  padding-left: 100% !important;
}
.logo {
  height: 150px;
}
.logo-box {
  height: 180px;
}
</style>
