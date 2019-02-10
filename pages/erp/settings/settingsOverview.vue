<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-w="2">
      <card
        :card="{title: 'Hồ Sơ Tổ Chức', image: '../../img/erp_icons-01.svg', link: 'organizationSettings' }"
      />
      <card
        :card="{title: 'Thiết Lập Kế Toán', image: '../../img/erp_icons-04.svg', link: 'Accounts' }"
      />
      <card
        :card="{title: 'Thiết Lập Sản Phẩm', image: '../../img/erp_icons-07.svg', link: 'productsSetings' }"
      />
    </vs-col>
    <vs-col type="flex" vs-w="2">
      <card
        :card="{title: 'Thiết lập Nhân Sự', image: '../../img/erp_icons-08.svg', link: 'SettingsEmployee' }"
      />
      <card
        :card="{title: 'Thiết lập Người Dùng', image: '../../img/erp_icons-03.svg', link: 'Users' }"
      />
      <card
        :card="{title: 'Thiết Lập Phòng Ban', image: '../../img/erp_icons-06.svg', link: 'Departments' }"
      />
    </vs-col>
    <vs-col type="flex" vs-w="2">
      <card
        :card="{title: 'Dòng Công Việc', image: '../../img/erp_icons-06.svg', link: 'Workflows' }"
      />
      <card
        :card="{title: 'Thiết lập Truy Xuất', image: '../../img/erp_icons-02.svg', link: 'Profiles' }"
      />
    </vs-col>
  </vs-row>
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
