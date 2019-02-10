<template>
  <vs-row vs-justify="center" style="margin:80px 0px">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3">
      <vs-row type="flex" vs-justify="center" vs-align="center" style="margin-bottom: 20px">
        <img vs-align="center" src="/img/Logo.png" style="max-width: 120px;" srcset>
      </vs-row>
      <vs-card vs-lg="12">
        <div slot="header">
          <vs-row vs-justify="center" vs-align="center"></vs-row>
          <vs-row vs-justify="center" style="padding-top:5px" vs-align="center">
            <h4 style="color: #5b3cc4; margin-top: 10px">Đăng Nhập</h4>
          </vs-row>
        </div>
        <vs-row class="form" vs-justify="center" vs-align="center" slot="media">
          <vs-input
            icon="account_circle"
            icon-after="true"
            :warning="false"
            label="Tên Đăng Nhập"
            warning-text="The entered data could not be verified"
            placeholder="Tên đăng nhập"
            v-model="form.login"
          />

          <vs-input
            icon="fingerprint"
            type="password"
            icon-after="true"
            :warning="false"
            label="Mật Khẩu"
            warning-text="The entered data could not be verified"
            placeholder="Mật Khẩu"
            v-model="form.pass"
          />

          <vs-select color="primary" label="Cơ sở dữ liệu" v-model="form.dbId">
            <vs-select-item
              :value="db.DBname"
              :text="db.DBname"
              v-for="db in dbs"
              :key="db.DBname"
            />
          </vs-select>
        </vs-row>
        <div slot="footer">
          <vs-row vs-justify="center">
            <vs-button @click="login" color="primary" icon="done">Đăng Nhập</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import MessageControl from "@/components/MessageControl";
import { setStorageUser } from "@/utils/auth";
export default {
  // middleware: "guest",

  data() {
    return {
      form: {
        login: "",
        pass: "",
        dbId: ""
      },
      dbs: [],
      message: {
        type: "",
        content: "",
        title: ""
      }
    };
  },

  methods: {
    async login() {
      try {
        const respon = await this.$axios.post("users/login", {
          data: this.form
        });
        const user = respon.data.user;
        await setStorageUser(user);
        await this.$store.dispatch("auth/setUser", user);
        await this.$store.dispatch("auth/setLogged", true);
        this.$router.push("/erp");
      } catch (err) {
        console.log(err);
        this.$vs.notify({
          title: "Báo Lỗi",
          text: "Đăng nhập thất bại",
          color: "danger"
        });
        // this.message = {
        //   content: "Đăng nhập thất bại",
        //   type: "error"
        // };
      }
    }
  },

  async mounted() {
    try {
      const result = await this.$axios.get("getDBS");
      this.dbs = result.data.dbsNames;
    } catch (error) {
      this.message = {
        type: "error",
        content: "Không tìm thấy cơ sở dữ liệu trên Server"
      };
    }
  },

  components: {
    MessageControl
  }
};
</script>