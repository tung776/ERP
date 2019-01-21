<template>
  <section class="content">
    <div class="container-fluid">
      <!-- Small boxes (Stat box) -->
      <div class="row connectedSortable ui-sortable">
        <div class="col-lg-4 col-12">
          <div class="card-header no-border ui-sortable-handle" style="cursor: move;">
            <card
              :card="{title: 'Hồ Sơ Tổ Chức', image: '../../img/erp_icons-01.svg', link: 'organizationSettings' }"
            />
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-4 col-12">
          <div class="card-header no-border ui-sortable-handle" style="cursor: move;">
            <card
              :card="{title: 'Thiết Lập Kế Toán', image: '../../img/erp_icons-04.svg', link: 'Accounts' }"
            />
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-4 col-12">
          <div class="card-header no-border ui-sortable-handle" style="cursor: move;">
            <card
              :card="{title: 'Thiết Lập Sản Phẩm', image: '../../img/erp_icons-07.svg', link: 'productsSetings' }"
            />
          </div>
        </div>
      </div>
      <div class="row connectedSortable ui-sortable">
        <div class="col-lg-4 col-12">
          <div class="card-header no-border ui-sortable-handle" style="cursor: move;">
            <card
              :card="{title: 'Thiết lập Nhân Sự', image: '../../img/erp_icons-08.svg', link: 'SettingsEmployee' }"
            />
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-4 col-12">
          <div class="card-header no-border ui-sortable-handle" style="cursor: move;">
            <card
              :card="{title: 'Thiết lập Người Dùng', image: '../../img/erp_icons-03.svg', link: 'Users' }"
            />
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-4 col-12">
          <div class="card-header no-border ui-sortable-handle" style="cursor: move;">
            <card
              :card="{title: 'Thiết Lập Phòng Ban', image: '../../img/erp_icons-06.svg', link: 'Departments' }"
            />
          </div>
        </div>
      </div>
      <div class="row connectedSortable ui-sortable">
        <div class="col-lg-4 col-12">
          <div class="card-header no-border ui-sortable-handle" style="cursor: move;">
            <card
              :card="{title: 'Thiết Lập Dòng Công Việc', image: '../../img/erp_icons-06.svg', link: 'Workflows' }"
            />
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="card-header no-border ui-sortable-handle" style="cursor: move;">
            <card
              :card="{title: 'Thiết lập Truy Xuất', image: '../../img/erp_icons-02.svg', link: 'Profiles' }"
            />
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
  </section>
</template>

<script>
import Card from "@/components/card";
export default {
  components: {
    Card
  },
  layout(contex) {
    return "erp";
  }
};
</script>
