<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 col-12">
          <div class="row">
            <!-- ./col -->
            <div class="col-lg-4 col-6">
              <!-- small box -->
              <small-box
                :card="{
                title: 'CRM', 
                content:'Quản Trị Khách Hàng',
                icon: 'ion ion-person', 
                link: '/erp/CRM/reportsDashboard', 
                footer: 'Chi Tiết' }"
              />
            </div>
            <!-- ./col -->
            <div class="col-lg-4 col-6">
              <!-- small box -->
              <small-box
                :card="{
                title: 'HRM', 
                icon: 'ion ion-person',
                content: 'Quản Trị Nhân Sự',
                link: '/erp/HR/HrDashboard', 
                footer: 'Chi Tiết' }"
              />
            </div>
            <!-- ./col -->
            <div class="col-lg-4 col-6">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Hóa Đơn', 
                content: 'Quản Lý Hóa Đơn',
                icon: 'ion ion-bag', 
                link: '#', 
                footer: 'Chi Tiết' }"
              />
            </div>
          </div>
          <!-- row -->
          <div class="row">
            <!-- ./col -->
            <div class="col-lg-4 col-6">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Hóa Đơn Nhập', 
                content: 'Quản Lý Hóa Đơn',
                icon: 'ion ion-bag', 
                link: '/erp/Purchases/purchaseDashboard', 
                footer: 'Chi Tiết' }"
              />
            </div>
            <!-- ./col -->
            <div class="col-lg-4 col-6">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Quản Trị Kế Toán', 
                content: 'Quản Trị Kế Toán',
                icon: 'ion ion-calculator', 
                link: '/erp/Accounting/journal', 
                footer: 'Chi Tiết' }"
              />
            </div>
            <!-- ./col -->
            <div class="col-lg-4 col-6">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Quản Trị Sản Xuất', 
                content: 'Quản Trị Sản Xuất',
                icon: 'ion ion-hammer', 
                link: '/erp/Manufacturing/workCenters', 
                footer: 'Chi Tiết' }"
              />
            </div>
          </div>
          <!-- row -->
          <div class="row">
            <!-- ./col -->
            <div class="col-lg-4 col-6">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Tồn Kho', 
                content: 'Quản Trị Kho',
                icon: 'ion ion-cube', 
                link: '/erp/Inventory/Products', 
                footer: 'Chi Tiết' }"
              />
            </div>
            <!-- ./col -->
            <div class="col-lg-4 col-6">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Báo Cáo',
                content: 'Báo Cáo Quản Trị', 
                icon: 'ion ion-document', 
                link: '/erp/Reports/reports', 
                footer: 'Chi Tiết' }"
              />
            </div>
            <!-- ./col -->
            <div class="col-lg-4 col-6">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Cài Đặt',
                content: 'Các Cài Đặt',
                icon: 'ion ion-settings', 
                link: '/erp/Settings/settingsOverview', 
                footer: 'Chi Tiết' }"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <!--calendar -->
          <calendar/>
          <!--end calendar -->
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
import SmallBox from "@/components/SmallBox";
import Calendar from "@/components/Calendar";

export default {
  components: {
    SmallBox,
    Calendar
  },
  layout(contex) {
    return "erp";
  }
};
</script>