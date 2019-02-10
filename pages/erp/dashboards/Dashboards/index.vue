<template>
  <section class="content">
    <div class="container-fluid">
      <vs-row>
        <vs-col type="flex" vs-w="8">
          <vs-row vs-justify="center">
            <!-- ./col -->
            <vs-col type="flex" vs-w="3">
              <!-- small box -->
              <small-box
                :card="{
                title: 'CRM', 
                content:'Quản Trị Khách Hàng',
                icon: 'person_pin', 
                link: '/erp/CRM/reportsDashboard', 
                footer: 'Chi Tiết' }"
              />
            </vs-col>
            <!-- ./col -->
            <vs-col type="flex" vs-w="3">
              <!-- small box -->
              <small-box
                :card="{
                title: 'HRM', 
                icon: 'person',
                content: 'Quản Trị Nhân Sự',
                link: '/erp/HR/HrDashboard', 
                footer: 'Chi Tiết' }"
              />
            </vs-col>
            <!-- ./col -->
            <vs-col type="flex" vs-w="3">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Hóa Đơn', 
                content: 'Quản Lý Hóa Đơn',
                icon: 'shopping_cart', 
                link: '#', 
                footer: 'Chi Tiết' }"
              />
            </vs-col>
          </vs-row>
          <!-- row -->
          <vs-row vs-justify="center">
            <!-- ./col -->
            <vs-col type="flex" vs-w="3">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Hóa Đơn Nhập', 
                content: 'Quản Lý Hóa Đơn',
                icon: 'store_mall_directory', 
                link: '/erp/Purchases/purchaseDashboard', 
                footer: 'Chi Tiết' }"
              />
            </vs-col>
            <!-- ./col -->
            <vs-col type="flex" vs-w="3">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Quản Trị Kế Toán', 
                content: 'Quản Trị Kế Toán',
                icon: 'table_chart', 
                link: '/erp/Accounting/journal', 
                footer: 'Chi Tiết' }"
              />
            </vs-col>
            <!-- ./col -->
            <vs-col type="flex" vs-w="3">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Quản Trị Sản Xuất', 
                content: 'Quản Trị Sản Xuất',
                icon: 'view_compact', 
                link: '/erp/Manufacturing/workCenters', 
                footer: 'Chi Tiết' }"
              />
            </vs-col>
          </vs-row>
          <!-- row -->
          <vs-row vs-justify="center">
            <!-- ./col -->
            <vs-col type="flex" vs-w="3">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Tồn Kho', 
                content: 'Quản Trị Kho',
                icon: 'store_mall_directory', 
                link: '/erp/Inventory/Products', 
                footer: 'Chi Tiết' }"
              />
            </vs-col>
            <!-- ./col -->
            <vs-col type="flex" vs-w="3">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Báo Cáo',
                content: 'Báo Cáo Quản Trị', 
                icon: 'receipt', 
                link: '/erp/Reports/reports', 
                footer: 'Chi Tiết' }"
              />
            </vs-col>
            <!-- ./col -->
            <vs-col type="flex" vs-w="3">
              <!-- small box -->
              <small-box
                :card="{
                title: 'Cài Đặt',
                content: 'Các Cài Đặt',
                icon: 'settings', 
                link: '/erp/Settings/settingsOverview', 
                footer: 'Chi Tiết' }"
              />
            </vs-col>
          </vs-row>
        </vs-col>
        <vs-col type="flex" vs-w="4">
          <!--calendar -->
          <no-ssr>
            <v-calendar :attributes="attrs"/>
          </no-ssr>
          <!--end calendar -->
        </vs-col>
      </vs-row>
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
import SmallBox from "@/components/SmallBox";
import Calendar from "@/components/Calendar";

export default {
  data() {
    return {
      attrs: [
        {
          key: "today",
          highlight: {
            backgroundColor: "#ff8080"
          },
          // Just use a normal style
          contentStyle: {
            color: "#fafafa"
          },
          dates: new Date(2018, 0, 1)
        }
      ],
      selectedDate: {
        start: new Date(2018, 10, 9),
        end: new Date(2018, 10, 10)
      }
    };
  },
  components: {
    SmallBox,
    Calendar
  },
  layout(contex) {
    return "erp";
  }
};
</script>