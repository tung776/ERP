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
                <img :src="form.imageSrc" class="img-fluid logo" alt>
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
              v-model="form.name"
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
            <label for>Lĩnh Vực</label>
            <select class="form-control" v-model="form.industry">Chọn cơ sở dữ liệu
              <option v-for="industry in industries" :key="industry._id">{{industry.name}}</option>
            </select>
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
                  required
                  type="text"
                  class="form-control"
                  id="address-street"
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
                  id="address-state"
                  placeholder="Quận Huyện"
                >
              </div>

              <div class="col-lg-4 card-body">
                <label for>Tỉnh/Thành</label>
                <input
                  v-model="form.address.city"
                  required
                  type="text"
                  class="form-control"
                  id="address-city"
                  placeholder="Tỉnh / thành phố"
                >
              </div>
              <div class="col-lg-4 card-body">
                <label for>Quốc Gia</label>
                <input
                  v-model="form.address.country"
                  required
                  type="text"
                  class="form-control"
                  id="address-country"
                  placeholder="Quốc Gia"
                >
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 card-body">
                <label for>Mã Bưu Chính</label>
                <input
                  v-model="form.address.zip"
                  type="text"
                  class="form-control"
                  id="address-zip"
                  placeholder="Mã Bưu Chính"
                >
              </div>
              <div class="col-lg-6 card-body">
                <label for>Điện Thoại</label>
                <input
                  required
                  v-model="form.address.phone"
                  type="text"
                  class="form-control"
                  id="address-phone"
                  placeholder="Số Điện Thoại"
                >
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 card-body">
                <label for>Fax</label>
                <input
                  v-model="form.address.fax"
                  required
                  type="text"
                  class="form-control"
                  id="address-fax"
                  placeholder="Số Fax"
                >
              </div>
              <div class="col-lg-6 card-body">
                <label for>Website</label>
                <input
                  v-model="form.website"
                  required
                  type="text"
                  class="form-control"
                  id="website"
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
              <div class="col-lg-4 col-6">
                <label for>Tên Liên Hệ</label>
                <input
                  v-model="form.contactName"
                  type="text"
                  class="form-control"
                  id="contactName"
                  required
                  placeholder="contactName"
                >
              </div>
              <div class="col-lg-4 col-6">
                <label for>Chọn Liên Hệ Chính</label>
                <select class="form-control" v-model="form.contact">Chọn cơ sở dữ liệu
                  <option v-for="contact in contacts" :key="contact._id">{{contact.name}}</option>
                </select>
              </div>
              <div class="col-lg-4 col-6">
                <div class="form-group">
                  <label for>Liên Hệ Chính</label>
                  <select class="form-control" v-model="form.defaultEmail">Chọn cơ sở dữ liệu
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>
                </div>
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
                <select class="form-control" v-model="form.currency">Chọn cơ sở dữ liệu
                  <option v-for="currency in currencies" :key="currency._id">{{currency.name}}</option>
                </select>
              </div>
              <div class="col-lg-6">
                <label for>Ngày Bắt Đầu</label>
                <input
                  v-model="form.startDate"
                  required
                  type="date"
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
          <button @click="submit" class="btn btn-primary btn-lg">Lưu Thay Đổi</button>
          <button @click="cancel" class="btn btn-default float-right btn-lg">Hủy Thay Đổi</button>
        </div>
      </div>
    </div>
    <!-- /.card-body -->
    <!-- </div> -->
    <!-- /.card -->
  </div>
</template>

<script>
import Validation from "@/utils/Validation";

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
      },
      errors: null,
      currencies:[],
      contacts:[],
      industries:[]
    };
  },
  layout(contex) {
    return "erp";
  },
  async mounted() {
    try {
      this.currencies = await this.$axios.get('/api/getForDd/').data
      this.contacts = await this.axios.get('/api/forDd/').data
      this.industries = await this.$axios.get('/api/industry/').data
    } catch (error) {
      console.log("Đã có lỗi: ", error)
    }
  },
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
        vm.imageSrc = e.target.result;
      };
      await reader.readAsDataURL(file);
    },
    async submit() {
      this.errors = this.validate(this.form)
      if(this.errors.length > 0) return
      if (!this.form._id === "") return;
      try {
        const result = await this.$axios
          .put(`/api/organizationSettings/${this.form._id}`, {
            data: this.form
          })
          .then(response => {
            console.log(response);
          });
      } catch (error) {
        console.log("error: ", error);
      }
    },
    async cancel() {},
    validate(attrs) {
      var errors
      Validation.checkGroupsNameField(errors, true, attrs.name, "Company");
      Validation.checkPhoneField(errors, false, attrs.phone, "Phone");
      Validation.checkCountryCityStateField(
        errors,
        false,
        attrs.address.country,
        "Country"
      );
      Validation.checkCountryCityStateField(
        errors,
        false,
        attrs.address.state,
        "State"
      );
      Validation.checkCountryCityStateField(
        errors,
        false,
        attrs.address.city,
        "City"
      );
      Validation.checkStreetField(
        errors,
        false,
        attrs.address.street,
        "Street"
      );
      Validation.checkZipField(errors, false, attrs.address.zip, "Zip");

      if (errors.length > 0) {
        return errors;
      }
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
