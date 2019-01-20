<template>
  <div>
    <nav-bar/>
    <left-bar/>
    <div class="content-wrapper" style="min-height: 512px;">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid" slot="content-header"></div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
      <!-- Main content -->
      <div class="content">
        <div slot="message-slot"></div>
        <nuxt/>
      </div>
      <!-- /.content -->
    </div>
    <right-bar/>
    <footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";
export default {
  middleware: "auth",

  async mounted() {
    try {
      const organizationSettings = await this.$axios.get(
        "organizationSettings"
      );
      const currentUser = await this.$axios.get("users/current");
      const menu = await this.$axios.get("modules");

      await this.$store.dispatch(
        "settings/setOrganizationSetting",
        organizationSettings.data
      );
      await this.$store.dispatch("user/setCurrentUser", currentUser.data);
      await this.$store.dispatch("modules/setModules", menu.data);
    } catch (error) {
      console.log("Đã có lỗi: ", error);
    }
  },
  components: {
    NavBar,
    Footer,
    RightBar,
    LeftBar
  },

  layout(context) {
    return "default";
  }
};
</script>

<style>
</style>
