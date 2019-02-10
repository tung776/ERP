<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <vs-button @click="menuState.active=!menuState.active" type="flat" icon="menu"></vs-button>
      <vs-navbar-title>Hello world</vs-navbar-title>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>
      <vs-spacer></vs-spacer>
      <vs-input icon="search" placeholder="Search" v-model="search"/>
    </vs-navbar>
    <left-bar :menuState="menuState"/>
  </div>
</template>
<script>
import LeftBar from "@/components/SideBarMenu2";
export default {
  data: () => ({
    activeItem: 0,
    search: "",
    menuState: {
      active: false,
      isClick: [],
      selected: null
    }
  }),

  components: {
    LeftBar
  }
};
</script>