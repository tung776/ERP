<template>
  <div>
    <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link class="nav-link" data-widget="pushmenu" to="#">
            <i class="fa fa-bars"></i>
          </nuxt-link>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <nuxt-link to="erp" class="nav-link">Home</nuxt-link>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <nuxt-link to="#" class="nav-link">Contact</nuxt-link>
        </li>
      </ul>

      <!-- SEARCH FORM -->
      <form class="form-inline ml-3">
        <div class="input-group input-group-sm">
          <input
            class="form-control form-control-navbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
          <div class="input-group-append">
            <button class="btn btn-navbar" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <!-- Messages Dropdown Menu -->
        <li class="nav-item dropdown">
          <nuxt-link class="nav-link" data-toggle="dropdown" to="#">
            <i class="fa fa-comments-o"></i>
            <span class="badge badge-danger navbar-badge">3</span>
          </nuxt-link>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <nuxt-link to="#" class="dropdown-item">
              <!-- Message Start -->
              <div class="media">
                <img
                  src="/img/user1-128x128.jpg"
                  alt="User Avatar"
                  class="img-size-50 mr-3 img-circle"
                >
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Brad Diesel
                    <span class="float-right text-sm text-danger">
                      <i class="fa fa-star"></i>
                    </span>
                  </h3>
                  <p class="text-sm">Call me whenever you can...</p>
                  <p class="text-sm text-muted">
                    <i class="fa fa-clock-o mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
              <!-- Message End -->
            </nuxt-link>
            <div class="dropdown-divider"></div>
            <nuxt-link to="#" class="dropdown-item">
              <!-- Message Start -->
              <div class="media">
                <img
                  src="/img/user8-128x128.jpg"
                  alt="User Avatar"
                  class="img-size-50 img-circle mr-3"
                >
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    John Pierce
                    <span class="float-right text-sm text-muted">
                      <i class="fa fa-star"></i>
                    </span>
                  </h3>
                  <p class="text-sm">I got your message bro</p>
                  <p class="text-sm text-muted">
                    <i class="fa fa-clock-o mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
              <!-- Message End -->
            </nuxt-link>
            <div class="dropdown-divider"></div>
            <nuxt-link to="#" class="dropdown-item">
              <!-- Message Start -->
              <div class="media">
                <img
                  src="/img/user3-128x128.jpg"
                  alt="User Avatar"
                  class="img-size-50 img-circle mr-3"
                >
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Nora Silvester
                    <span class="float-right text-sm text-warning">
                      <i class="fa fa-star"></i>
                    </span>
                  </h3>
                  <p class="text-sm">The subject goes here</p>
                  <p class="text-sm text-muted">
                    <i class="fa fa-clock-o mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
              <!-- Message End -->
            </nuxt-link>
            <div class="dropdown-divider"></div>
            <nuxt-link to="#" class="dropdown-item dropdown-footer">See All Messages</nuxt-link>
          </div>
        </li>
        <!-- Notifications Dropdown Menu -->
        <li class="nav-item dropdown">
          <nuxt-link class="nav-link" data-toggle="dropdown" to="#">
            <i class="fa fa-bell-o"></i>
            <span class="badge badge-warning navbar-badge">15</span>
          </nuxt-link>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-header">15 Notifications</span>
            <div class="dropdown-divider"></div>
            <nuxt-link to="#" class="dropdown-item">
              <i class="fa fa-envelope mr-2"></i> 4 new messages
              <span class="float-right text-muted text-sm">3 mins</span>
            </nuxt-link>
            <div class="dropdown-divider"></div>
            <nuxt-link to="#" class="dropdown-item">
              <i class="fa fa-users mr-2"></i> 8 friend requests
              <span class="float-right text-muted text-sm">12 hours</span>
            </nuxt-link>
            <div class="dropdown-divider"></div>
            <nuxt-link to="#" class="dropdown-item">
              <i class="fa fa-file mr-2"></i> 3 new reports
              <span class="float-right text-muted text-sm">2 days</span>
            </nuxt-link>
            <div class="dropdown-divider"></div>
            <nuxt-link to="#" class="dropdown-item dropdown-footer">See All Notifications</nuxt-link>
          </div>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" data-widget="control-sidebar" data-slide="true" to="#">
            <i class="fa fa-th-large"></i>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>