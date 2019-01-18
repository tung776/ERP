<template>
  <div id="menu">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class href="#">
            <img class="img-responsive logo" src="/img/Logo.png" alt>
          </a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#">Trang Chủ</a>
            </li>
            <li>
              <a href="#">Giới Thiệu</a>
            </li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Danh Mục
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Sơn PU</a>
                </li>
                <li>
                  <a href="#">Sơn 2k</a>
                </li>
                <li>
                  <a href="#">Sơn Công nghiệp</a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">Sơn Kẽm</a>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-user fa-2x"></i>
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Thông tin người dùng</a>
                </li>
                <li>
                  <a href="#">Lịch Sử</a>
                </li>
                <li>
                  <a href="#">Thiết lập</a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">Thoát</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
    </nav>
  </div>
</template>