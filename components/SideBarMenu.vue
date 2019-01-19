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
        <li v-for="module in modules" :key="module.mname" class="nav-item has-treeview">
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
  data() {
    return {
      modules: []
    };
  },
  async mounted() {
    try {
      const menu = await this.$axios.get("modules");
      const organizationSettings = await this.$axios.get(
        "organizationSettings"
      );
      // const userCurrent = await this.$axios.get("users/current");
      this.modules = menu.data;
      /**
       * date: "2019-01-19T03:18:11.356Z"
email: "info@thinkmobiles.com"
eventType: "userFlow"
login: "superAdmin"
message: "dashboards"
mobilePhone: "+312456987545"
name: "dashboards"
       */
    } catch (error) {}
  },
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