<template>
  <div>
    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul
        class="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <!-- Add icons to the links using the .nav-icon class
        with font-awesome or any other icon font library-->
        <li class="nav-item">
          <nuxt-link to="#" class="nav-link">
            <i class="nav-icon fa fa-dashboard"></i>
            <p>Bàn Làm Việc</p>
          </nuxt-link>
        </li>
        <!-- Begin Nhập Hàng-->
        <li class="nav-item has-treeview">
          <nuxt-link to="#" class="nav-link">
            <i class="nav-icon fa fa-credit-card-alt"></i>
            <p>
              Bán Hàng
              <i class="right fa fa-angle-left"></i>
            </p>
          </nuxt-link>

          <ul class="nav nav-treeview">
            <li class="nav-item">
              <nuxt-link to="#" class="nav-link">
                <i class="fa fa-circle-o nav-icon"></i>
                <p>Hóa Đơn Bán</p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="#" class="nav-link">
                <i class="fa fa-circle-o nav-icon"></i>
                <p>Báo Cáo</p>
              </nuxt-link>
            </li>
          </ul>
        </li>
        <!-- End Bán Hàng -->
        <!-- Begin Nhập hàng -->
        <li class="nav-item has-treeview">
          <nuxt-link to="#" class="nav-link">
            <i class="nav-icon fa fa-id-card-o"></i>
            <p>
              Nhập hàng
              <i class="right fa fa-angle-left"></i>
            </p>
          </nuxt-link>

          <ul class="nav nav-treeview">
            <li class="nav-item">
              <nuxt-link to="#" class="nav-link">
                <i class="fa fa-circle-o nav-icon"></i>
                <p>Hóa Đơn Nhập</p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="#" class="nav-link">
                <i class="fa fa-circle-o nav-icon"></i>
                <p>Báo Cáo</p>
              </nuxt-link>
            </li>
          </ul>
        </li>
        <!-- End Nhập Hàng -->
        <!-- begin Nhân Sự -->
        <li class="nav-item has-treeview">
          <nuxt-link to="#" class="nav-link">
            <i class="nav-icon ffa fa-users"></i>
            <p>
              Nhân Sự
              <i class="right fa fa-angle-left"></i>
            </p>
          </nuxt-link>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <nuxt-link to="#" class="nav-link">
                <i class="fa fa-circle-o nav-icon"></i>
                <p>Nhóm Nhân Viên</p>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="#" class="nav-link">
                <i class="fa fa-circle-o nav-icon"></i>
                <p>Nhân Viên</p>
              </nuxt-link>
            </li>
          </ul>
        </li>
        <!-- End Nhân Sự -->
        <li class="nav-item">
          <button @click="logout" class="nav-link">
            <i class="nav-icon fa fa-sign-out"></i>
            <p>Thoát</p>
          </button>
        </li>
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$axios.get("/logout");
      } catch (error) {
        console.log("error = ", error);
      }
      const unSetStorageUser = require("~/utils/auth").unSetStorageUser;
      unSetStorageUser();
      this.$router.push("/");
    }
  }
};
</script>