<template>
  <div>
    <div class="login-box">
      <div class="login-logo">
        <nuxt-link to="/">SERP</nuxt-link>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form action="../../index2.html" method="post">
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email">
              <div class="input-group-append">
                <span class="fa fa-envelope input-group-text"></span>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password">
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
                <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
              </div>
              <!-- /.col -->
            </div>
          </form>
          <!-- /.social-auth-links -->
          <p class="mb-1">
            <a href="#">Bạn quên mật khẩu ?</a>
          </p>
          <p class="mb-0">
            <a href="register.html" class="text-center">Đăng ký thành viên mới</a>
          </p>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    const dbs = await this.$axios.get("getDBS");
    console.log("dbs = ", dbs);
  }
};
</script>