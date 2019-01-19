<template>
  <div style="min-height: 203px;">
    <div
      style="padding: 20px 30px; background: rgb(243, 156, 18); z-index: 999999; font-size: 16px; font-weight: 600; display: none;"
    >
      <a
        class="float-right"
        href="#"
        data-toggle="tooltip"
        data-placement="left"
        title="Never show me this again!"
        style="color: rgb(255, 255, 255); font-size: 20px;"
      >×</a>
      <a
        href="https://themequarry.com"
        style="color: rgba(255, 255, 255, 0.9); display: inline-block; margin-right: 10px; text-decoration: none;"
      >Ready to sell your theme? Submit your theme to our new marketplace now and let over 200k visitors see it!</a>
      <a
        class="btn btn-default btn-sm"
        href="https://themequarry.com"
        style="margin-top: -5px; border: 0px; box-shadow: none; color: rgb(243, 156, 18); font-weight: 600; background: rgb(255, 255, 255);"
      >Let's Do It!</a>
    </div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Profile</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <nuxt-link to="/erp">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item active">User Profile</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <!-- Profile Image -->
            <div class="card card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  <img
                    class="profile-user-img img-fluid img-circle"
                    :src="userDetail.imageSrc"
                    alt="User profile picture"
                  >
                </div>

                <h3 class="profile-username text-center">{{userDetail.login}}</h3>

                <p class="text-muted text-center">{{userDetail.position}}</p>

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <b>Điện Thoại</b>
                    <a class="float-right">{{userDetail.mobilePhone}}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Email</b>
                    <a class="float-right">{{userDetail.email}}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Website</b>
                    <a class="float-right">{{userDetail.website}}</a>
                  </li>
                </ul>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
            <!-- About Me Box -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">About Me</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <strong>
                  <i class="fa fa-book mr-1"></i> Education
                </strong>

                <p
                  class="text-muted"
                >B.S. in Computer Science from the University of Tennessee at Knoxville</p>

                <hr>

                <strong>
                  <i class="fa fa-map-marker mr-1"></i> Location
                </strong>

                <p class="text-muted">Malibu, California</p>

                <hr>

                <strong>
                  <i class="fa fa-pencil mr-1"></i> Skills
                </strong>

                <p class="text-muted">
                  <span class="tag tag-danger">UI Design</span>
                  <span class="tag tag-success">Coding</span>
                  <span class="tag tag-info">Javascript</span>
                  <span class="tag tag-warning">PHP</span>
                  <span class="tag tag-primary">Node.js</span>
                </p>

                <hr>

                <strong>
                  <i class="fa fa-file-text-o mr-1"></i> Notes
                </strong>

                <p
                  class="text-muted"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
          <div class="col-md-9">
            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <a class="nav-link active" href="#activity" data-toggle="tab">Activity</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#settings" data-toggle="tab">Settings</a>
                  </li>
                </ul>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content">
                  <div class="active tab-pane" id="activity">
                    <!-- Post -->
                    <div class="post">
                      <div class="user-block">
                        <span class="description">{{userDetail.lastAccess}}</span>
                      </div>
                      <!-- /.user-block -->
                    </div>
                    <!-- /.post -->
                  </div>
                  <div class="tab-pane" id="settings">
                    <form class="form-horizontal">
                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                          <button type="submit" class="btn btn-danger">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <!-- /.tab-pane -->
                </div>
                <!-- /.tab-content -->
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.nav-tabs-custom -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDetail: {
        _id: "",
        email: "",
        imageSrc: "",
        login: "",
        compnay: "",
        lastAccess: "",
        mobilePhone: "",
        relatedEmployee: null,
        website: "",
        kanbanSettings: null,
        profile: null,
        credentials: null,
        tasks: null
      }
    };
  },
  async mounted() {
    try {
      const result = await this.$axios.get("users/current");
      console.log("result = ", result.data.user);
      this.userDetail = result.data.user;
      // this.$store.dispatch("auth/setUserDetail", result.data.user);
    } catch (error) {
      console.log(error);
    }
  },

  layout(context) {
    return "erp";
  }
};
</script>