<template>
  <div>
    <!-- Automatic element centering -->
    <div class="lockscreen-wrapper">
      <div class="lockscreen-logo">
        <nuxt-link to="login">SERP</nuxt-link>
        <div class="lockscreen-name">Thanh Tùng</div>
      </div>
      <!-- User name -->
      <!-- START LOCK SCREEN ITEM -->
      <div class="lockscreen-item">
        <!-- lockscreen image -->
        <div class="lockscreen-image">
          <img src="/img/user1-128x128.jpg" alt="User Image">
        </div>
        <!-- /.lockscreen-image -->
        <!-- lockscreen credentials (contains the form) -->
        <form class="lockscreen-credentials">
          <div class="input-group">
            <input type="password" class="form-control" placeholder="password">

            <div class="input-group-append">
              <button type="button" class="btn">
                <i class="fa fa-arrow-right text-muted"></i>
              </button>
            </div>
          </div>
        </form>
        <!-- /.lockscreen credentials -->
      </div>
      <!-- /.lockscreen-item -->
      <div class="help-block text-center">Điền mật khẩu của bạn để tiếp tục công việc</div>
      <div class="text-center">
        <nuxt-link to="login">Hoặc đăng nhập bằng tài khoản khác</nuxt-link>
      </div>
      <div class="lockscreen-footer text-center">
        Copyright © 2019
        <b>
          <a href="http://soncattuong.co" class="text-black">SonCatTuong</a>
        </b>
        <br>All rights reserved
      </div>
    </div>
    <!-- /.center -->
  </div>
</template>

<script>
export default {};
</script>