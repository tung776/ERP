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
        <li v-for="module in Modules" :key="module.mname" class="nav-item has-treeview">
          <nuxt-link to="#" class="nav-link">
            <i class="nav-icon fa fa-credit-card-alt"></i>
            <p>
              {{module.mname}}
              <i class="right fa fa-angle-left"></i>
            </p>
          </nuxt-link>

          <ul class="nav nav-treeview">
            <li v-for="item in module.subModules" :key="item.mname" class="nav-item">
              <nuxt-link :to="{path: `/erp/${module.mname}/${item.href}`}" class="nav-link">
                <i class="fa fa-circle-o nav-icon"></i>
                <p>{{item.mname}}</p>
              </nuxt-link>
            </li>
          </ul>
        </li>

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