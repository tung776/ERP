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
    <!-- <script src="/plugins/jquery/jquery.min.js" defer></script>
    <script src="/plugins/datepicker/bootstrap-datepicker.js" defer></script>
    <script src="/plugins/bootstrap/js/bootstrap.bundle.min.js" defer></script>
    <script src="/js/adminlte.min.js" defer></script>-->
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
        organizationSettings.data.data
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

  head() {
    return {
      script: [
        // {
        //   src: "/plugins/jquery/jquery.min.js"
        // },
        // {
        //   src: "/js/adminlte.min.js"
        // },
        // {
        //   src: "/plugins/bootstrap/js/bootstrap.bundle.min.js"
        // },
        // {
        //   src: "/plugins/datepicker/bootstrap-datepicker.js"
        // }
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
        },
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        },
        {
          rel: "stylesheet",
          href:
            "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        },
        {
          rel: "stylesheet",
          href:
            "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        },
        {
          rel: "stylesheet",
          href: "/plugins/datepicker/datepicker3.css"
        },
        {
          rel: "stylesheet",
          href: "/plugins/iCheck/flat/blue.css"
        },
        {
          rel: "stylesheet",
          href: "/plugins/morris/morris.css"
        },
        {
          rel: "stylesheet",
          href: "/plugins/jvectormap/jquery-jvectormap-1.2.2.css"
        },

        {
          rel: "stylesheet",
          href: "/plugins/daterangepicker/daterangepicker-bs3.css"
        },
        {
          rel: "stylesheet",
          href: "/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css"
        },

        {
          rel: "stylesheet",
          href: "/css/adminlte.min.css"
        }
      ]
    };
  },

  layout(context) {
    return "default";
  }
};
</script>

<style>
</style>
