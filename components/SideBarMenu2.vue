<template lang="html">

  <div id="parentx">

    <vs-sidebar :reduce="menuState.reduce" parent="body" default-index="1"  color="success" class="sidebarx" spacer v-model="menuState.active">

      <div class="header-sidebar" slot="header">
        <img size="100px" src="/img/Logo.png"/>
      </div>
      <vs-sidebar-item index="1" icon="menu" to="/erp/Dashboards/dashboards" >
         Bàn Làm Việc
      </vs-sidebar-item>
      <template v-for="module in Modules">
        <template v-if="module.mname!=='Dashboards'">
          
            <vs-sidebar-group v-if="module.subModules.length > 0" :title="module.mname">
              <template v-for="item in module.subModules">

                <vs-sidebar-item :index="item.mname" icon="menu" :to="{path: `/erp/${module.mname}/${item.href}`}">
                {{item.mname}}
                </vs-sidebar-item>    
                </template>                    
            </vs-sidebar-group>
          
        </template>
        
      </template>
      
      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat" @click="logout">Thoát</vs-button>
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>
    </vs-sidebar>
  </div>

</template>

<script>
export default {
  props: ["menuState"],

  methods: {
    async logout() {
      try {
        await this.$axios.get("/logout");
      } catch (error) {
        console.log("error = ", error);
      }
      this.$router.push("/");
      this.menuState.active = false;
      const unSetStorageUser = require("~/utils/auth").unSetStorageUser;
      unSetStorageUser();
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

<style lang="stylus">
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    > button {
      margin-left: 10px;
    }
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}
</style>