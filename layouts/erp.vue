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
