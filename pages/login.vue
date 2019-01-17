<template>
  <div>
    <div class="login-box">
      <div class="login-logo">
        <nuxt-link to="/">SERP</nuxt-link>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Đăng nhập để bắt đầu công việc của bạn</p>

          <div class="input-group mb-3">
            <input
              type="text"
              v-model="form.login"
              class="form-control"
              placeholder="Tên đăng nhập"
            >
            <div class="input-group-append">
              <span class="fa fa-envelope input-group-text"></span>
            </div>
          </div>
          <div class="input-group mb-3">
            <input v-model="form.pass" type="password" class="form-control" placeholder="Password">
            <div class="input-group-append">
              <span class="fa fa-lock input-group-text"></span>
            </div>
          </div>
          <div class="input-group mb-3">
            <select class="form-control" v-model="form.dbId">Chọn cơ sở dữ liệu
              <option v-for="db in dbs" :key="db.DBname">{{db.DBname}}</option>
            </select>
          </div>
          <!--message -->
          <div slot="message">
            <message-control :message="message"/>
          </div>
          <!--end message -->
          <div class="row">
            <div class="col-8">
              <div class="checkbox icheck">
                <label>
                  <div
                    class="icheckbox_square-blue"
                    aria-checked="false"
                    aria-disabled="false"
                    style="position: relative;"
                  >
                    <input
                      type="checkbox"
                      style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"
                    >
                    <ins
                      class="iCheck-helper"
                      style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"
                    ></ins>
                  </div>Remember Me
                </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <button
                @click="login"
                type="submit"
                class="btn btn-primary btn-block btn-flat"
              >Đăng Nhập</button>
            </div>
            <!-- /.col -->
          </div>

          <p class="mb-1">
            <a href="#">Bạn quên mật khẩu ?</a>
          </p>
          <p class="mb-0">
            <a href="register" class="text-center">Đăng ký thành viên mới</a>
          </p>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
</template>

<script>
import MessageControl from "@/components/MessageControl";
export default {
  // middleware: "guest",

  data() {
    return {
      form: {
        login: "",
        pass: "",
        dbId: ""
      },
      dbs: [],
      message: {
        type: "",
        content: "",
        title: ""
      }
    };
  },

  methods: {
    async login() {
      try {
        await this.$store.dispatch("auth/login", this.form);
        this.$router.push("/erp");
      } catch (err) {
        console.log(err);
        this.message = {
          content: "Đăng nhập thất bại",
          type: "error"
        };
      }
    }
  },

  async mounted() {
    try {
      const result = await this.$axios.get("getDBS");
      console.log("result = ", result.data.dbsNames);
      this.dbs = result.data.dbsNames;
    } catch (error) {
      this.message = {
        type: "error",
        content: "Không tìm thấy cơ sở dữ liệu trên Server"
      };
    }
  },

  components: {
    MessageControl
  }
};
</script>