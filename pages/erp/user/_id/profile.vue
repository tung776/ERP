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
                <a href="#">Home</a>
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
                    src="/img/user4-128x128.jpg"
                    alt="User profile picture"
                  >
                </div>

                <h3 class="profile-username text-center">Nina Mcintire</h3>

                <p class="text-muted text-center">Software Engineer</p>

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <b>Followers</b>
                    <a class="float-right">1,322</a>
                  </li>
                  <li class="list-group-item">
                    <b>Following</b>
                    <a class="float-right">543</a>
                  </li>
                  <li class="list-group-item">
                    <b>Friends</b>
                    <a class="float-right">13,287</a>
                  </li>
                </ul>

                <a href="#" class="btn btn-primary btn-block">
                  <b>Follow</b>
                </a>
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
                    <a class="nav-link" href="#timeline" data-toggle="tab">Timeline</a>
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
                        <img
                          class="img-circle img-bordered-sm"
                          src="/img/user1-128x128.jpg"
                          alt="user image"
                        >
                        <span class="username">
                          <a href="#">Jonathan Burke Jr.</a>
                          <a href="#" class="float-right btn-tool">
                            <i class="fa fa-times"></i>
                          </a>
                        </span>
                        <span class="description">Shared publicly - 7:30 PM today</span>
                      </div>
                      <!-- /.user-block -->
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore the hate as they create awesome
                        tools to help create filler text for everyone from bacon lovers
                        to Charlie Sheen fans.
                      </p>

                      <p>
                        <a href="#" class="link-black text-sm mr-2">
                          <i class="fa fa-share mr-1"></i> Share
                        </a>
                        <a href="#" class="link-black text-sm">
                          <i class="fa fa-thumbs-o-up mr-1"></i> Like
                        </a>
                        <span class="float-right">
                          <a href="#" class="link-black text-sm">
                            <i class="fa fa-comments-o mr-1"></i> Comments (5)
                          </a>
                        </span>
                      </p>

                      <input
                        class="form-control form-control-sm"
                        type="text"
                        placeholder="Type a comment"
                      >
                    </div>
                    <!-- /.post -->
                    <!-- Post -->
                    <div class="post clearfix">
                      <div class="user-block">
                        <img
                          class="img-circle img-bordered-sm"
                          src="/img/user7-128x128.jpg"
                          alt="User Image"
                        >
                        <span class="username">
                          <a href="#">Sarah Ross</a>
                          <a href="#" class="float-right btn-tool">
                            <i class="fa fa-times"></i>
                          </a>
                        </span>
                        <span class="description">Sent you a message - 3 days ago</span>
                      </div>
                      <!-- /.user-block -->
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore the hate as they create awesome
                        tools to help create filler text for everyone from bacon lovers
                        to Charlie Sheen fans.
                      </p>

                      <form class="form-horizontal">
                        <div class="input-group input-group-sm mb-0">
                          <input class="form-control form-control-sm" placeholder="Response">
                          <div class="input-group-append">
                            <button type="submit" class="btn btn-danger">Send</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <!-- /.post -->
                    <!-- Post -->
                    <div class="post">
                      <div class="user-block">
                        <img
                          class="img-circle img-bordered-sm"
                          src="/img/user6-128x128.jpg"
                          alt="User Image"
                        >
                        <span class="username">
                          <a href="#">Adam Jones</a>
                          <a href="#" class="float-right btn-tool">
                            <i class="fa fa-times"></i>
                          </a>
                        </span>
                        <span class="description">Posted 5 photos - 5 days ago</span>
                      </div>
                      <!-- /.user-block -->
                      <div class="row mb-3">
                        <div class="col-sm-6">
                          <img class="img-fluid" src="/img/photo1.png" alt="Photo">
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-6">
                          <div class="row">
                            <div class="col-sm-6">
                              <img class="img-fluid mb-3" src="/img/photo2.png" alt="Photo">
                              <img class="img-fluid" src="/img/photo3.jpg" alt="Photo">
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-6">
                              <img class="img-fluid mb-3" src="/img/photo4.jpg" alt="Photo">
                              <img class="img-fluid" src="/img/photo1.png" alt="Photo">
                            </div>
                            <!-- /.col -->
                          </div>
                          <!-- /.row -->
                        </div>
                        <!-- /.col -->
                      </div>
                      <!-- /.row -->
                      <p>
                        <a href="#" class="link-black text-sm mr-2">
                          <i class="fa fa-share mr-1"></i> Share
                        </a>
                        <a href="#" class="link-black text-sm">
                          <i class="fa fa-thumbs-o-up mr-1"></i> Like
                        </a>
                        <span class="float-right">
                          <a href="#" class="link-black text-sm">
                            <i class="fa fa-comments-o mr-1"></i> Comments (5)
                          </a>
                        </span>
                      </p>

                      <input
                        class="form-control form-control-sm"
                        type="text"
                        placeholder="Type a comment"
                      >
                    </div>
                    <!-- /.post -->
                  </div>
                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="timeline">
                    <!-- The timeline -->
                    <ul class="timeline timeline-inverse">
                      <!-- timeline time label -->
                      <li class="time-label">
                        <span class="bg-danger">10 Feb. 2014</span>
                      </li>
                      <!-- /.timeline-label -->
                      <!-- timeline item -->
                      <li>
                        <i class="fa fa-envelope bg-primary"></i>

                        <div class="timeline-item">
                          <span class="time">
                            <i class="fa fa-clock-o"></i> 12:05
                          </span>

                          <h3 class="timeline-header">
                            <a href="#">Support Team</a> sent you an email
                          </h3>

                          <div class="timeline-body">
                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                            quora plaxo ideeli hulu weebly balihoo...
                          </div>
                          <div class="timeline-footer">
                            <a href="#" class="btn btn-primary btn-sm">Read more</a>
                            <a href="#" class="btn btn-danger btn-sm">Delete</a>
                          </div>
                        </div>
                      </li>
                      <!-- END timeline item -->
                      <!-- timeline item -->
                      <li>
                        <i class="fa fa-user bg-info"></i>

                        <div class="timeline-item">
                          <span class="time">
                            <i class="fa fa-clock-o"></i> 5 mins ago
                          </span>

                          <h3 class="timeline-header no-border">
                            <a href="#">Sarah Young</a> accepted your friend request
                          </h3>
                        </div>
                      </li>
                      <!-- END timeline item -->
                      <!-- timeline item -->
                      <li>
                        <i class="fa fa-comments bg-warning"></i>

                        <div class="timeline-item">
                          <span class="time">
                            <i class="fa fa-clock-o"></i> 27 mins ago
                          </span>

                          <h3 class="timeline-header">
                            <a href="#">Jay White</a> commented on your post
                          </h3>

                          <div class="timeline-body">
                            Take me to your leader!
                            Switzerland is small and neutral!
                            We are more like Germany, ambitious and misunderstood!
                          </div>
                          <div class="timeline-footer">
                            <a href="#" class="btn btn-warning btn-flat btn-sm">View comment</a>
                          </div>
                        </div>
                      </li>
                      <!-- END timeline item -->
                      <!-- timeline time label -->
                      <li class="time-label">
                        <span class="bg-success">3 Jan. 2014</span>
                      </li>
                      <!-- /.timeline-label -->
                      <!-- timeline item -->
                      <li>
                        <i class="fa fa-camera bg-purple"></i>

                        <div class="timeline-item">
                          <span class="time">
                            <i class="fa fa-clock-o"></i> 2 days ago
                          </span>

                          <h3 class="timeline-header">
                            <a href="#">Mina Lee</a> uploaded new photos
                          </h3>

                          <div class="timeline-body">
                            <img src="http://placehold.it/150x100" alt="..." class="margin">
                            <img src="http://placehold.it/150x100" alt="..." class="margin">
                            <img src="http://placehold.it/150x100" alt="..." class="margin">
                            <img src="http://placehold.it/150x100" alt="..." class="margin">
                          </div>
                        </div>
                      </li>
                      <!-- END timeline item -->
                      <li>
                        <i class="fa fa-clock-o bg-gray"></i>
                      </li>
                    </ul>
                  </div>
                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="settings">
                    <form class="form-horizontal">
                      <div class="form-group">
                        <label for="inputName" class="col-sm-2 control-label">Name</label>

                        <div class="col-sm-10">
                          <input
                            type="email"
                            class="form-control"
                            id="inputName"
                            placeholder="Name"
                          >
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputEmail" class="col-sm-2 control-label">Email</label>

                        <div class="col-sm-10">
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail"
                            placeholder="Email"
                          >
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputName2" class="col-sm-2 control-label">Name</label>

                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputName2"
                            placeholder="Name"
                          >
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputExperience" class="col-sm-2 control-label">Experience</label>

                        <div class="col-sm-10">
                          <textarea
                            class="form-control"
                            id="inputExperience"
                            placeholder="Experience"
                          ></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputSkills" class="col-sm-2 control-label">Skills</label>

                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputSkills"
                            placeholder="Skills"
                          >
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                          <div class="checkbox">
                            <label>
                              <input type="checkbox"> I agree to the
                              <a href="#">terms and conditions</a>
                            </label>
                          </div>
                        </div>
                      </div>
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
      <div>
        <div class="container-fluid">
          <div class="row docs-premium-template">
            <div class="col-sm-12 col-md-6">
              <div class="card">
                <div class="card-body p-2">
                  <h4
                    style="background-color:#f7f7f7; font-size: 18px; text-align: center; padding: 7px 10px; margin-top: 0;"
                  >PREMIUM TEMPLATE</h4>
                  <div class="media">
                    <div class="media-left">
                      <a
                        href="https://www.creative-tim.com/product/material-dashboard-pro-angular2?affiliate_id=97705"
                        class="ad-click-event"
                      ></a>
                    </div>
                    <div class="media-body ml-3">
                      <div class="clearfix">
                        <p class="pull-right">
                          <a
                            href="https://www.creative-tim.com/product/material-dashboard-pro-angular2?affiliate_id=97705"
                            class="btn btn-success btn-sm ad-click-event"
                          >LEARN MORE</a>
                        </p>

                        <h4 style="margin-top: 0">Material Dashboard Pro ─ $59</h4>

                        <p
                          class="mb-1"
                        >Angular 2 Premium Material Bootstrap Admin with a fresh, new design inspired by Google's Material Design</p>
                        <p style="margin-bottom: 0">
                          <i class="fa fa-shopping-cart margin-r5"></i> 853+ purchases
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="card">
                <div class="card-body p-2">
                  <h4
                    style="background-color:#f7f7f7; font-size: 18px; text-align: center; padding: 7px 10px; margin-top: 0;"
                  >PREMIUM TEMPLATE</h4>
                  <div class="media">
                    <div class="media-left">
                      <a
                        href="https://www.creative-tim.com/product/now-ui-kit-pro?affiliate_id=97705"
                        class="ad-click-event"
                      ></a>
                    </div>
                    <div class="media-body ml-3">
                      <div class="clearfix">
                        <p class="pull-right">
                          <a
                            href="https://www.creative-tim.com/product/now-ui-kit-pro?affiliate_id=97705"
                            class="btn btn-success btn-sm ad-click-event"
                          >LEARN MORE</a>
                        </p>

                        <h4 style="margin-top: 0">Now UI Kit ─ $69</h4>

                        <p
                          class="mb-1"
                        >A beautiful Bootstrap 4 UI kit featuring over 1000 components, 34 sections and 11 example pages</p>
                        <p style="margin-bottom: 0">
                          <i class="fa fa-shopping-cart margin-r5"></i> 858+ purchases
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
export default {
  layout(context) {
    return "erp";
  }
};
</script>