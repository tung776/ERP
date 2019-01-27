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
          <nuxt-link to="/erp/Dashboards/dashboards" class="nav-link">
            <i class="nav-icon fa fa-credit-card-alt"></i>
            <p>Bàn Làm Việc</p>
          </nuxt-link>
        </li>
        <template v-for="module in Modules">
          <li
            :key="module.mname"
            class="nav-item has-treeview"
            v-bind:class="{ 'menu-open': selected == module}"
            v-on:click="itemClicked(module)"
          >
            <nuxt-link v-if="module.mname!=='Dashboards'" to="#" class="nav-link" name="menu">
              <i class="nav-icon fa fa-credit-card-alt"></i>
              <p>
                {{module.mname}}
                <i class="right fa fa-angle-left"></i>
              </p>
            </nuxt-link>

            <ul v-if="module.mname!=='Dashboards'" class="nav nav-treeview">
              <li v-for="item in module.subModules" :key="item.mname" class="nav-item">
                <nuxt-link :to="{path: `/erp/${module.mname}/${item.href}`}" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>{{item.mname}}</p>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </template>

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
      isClick: [],
      selected: null
    };
  },
  watch: {
    isClick: function(value) {
      console.log("value");
      // Modules.forEach(module => {
      //   isClick[module.mname] = false;
      // });
      // console.log(isClick);
      return this.isClick;
    }
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
    },
    itemClicked(module) {
      const name = module.mname;
      if (this.isClick[name]) {
        this.isClick[name] = false;
        this.selected = null;
      } else {
        this.isClick[name] = true;
        this.selected = module;
      }
    }
  }
};
</script>