<template>
  <div>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <nuxt-link to="/erp" class="brand-link">
        <img
          src="/img/logoCatTuong.png"
          alt="SonCatTuong"
          class="brand-image img-circle elevation-3"
          style="opacity: .8"
        >
        <span class="brand-text font-weight-light">SERP</span>
      </nuxt-link>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info" v-if="user">
            <nuxt-link
              :to="{name:'erp-user-id-profile', params:{id:user._id ? user._id : user.uId}}"
              class="d-block"
            >{{user.uName}}</nuxt-link>
          </div>
        </div>
        <side-bar-menu/>
      </div>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>

<script>
import SideBarMenu from "~/components/SideBarMenu";

export default {
  components: {
    SideBarMenu
  }
  // data() {
  //   console.log("this.$store.state.auth.user = ", this.$store.state.auth.user);
  //   const userInfor = this.$store.state.auth.user;
  //   return {
  //     userInfor
  //   };
  // }
};
</script>
