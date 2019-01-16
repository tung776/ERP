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
export default {
  // middleware: "guest",

  data() {
    return {
      form: {
        login: "",
        pass: "",
        dbId: "saas"
      },
      error: null
    };
  },

  methods: {
    async login() {
      try {
        const { email, password } = this.form;
        const respon = await this.$axios.post("users/login", {
          data: this.form
        });
        this.$store.dispatch("auth/setLogged", true);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
        this.error = err.response.data.error;
      }
    }
  },

  async mounted() {
    const dbs = await this.$axios.get("getDBS");
    console.log("dbs = ", dbs);
  }
};
</script>