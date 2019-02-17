<template>
  <div>
    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul
        class="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <account-item-tree
          v-for="account in allAccount"
          :account="account"
          :allAccount="allAccount"
          :key="account"
        />
        <!-- Add icons to the links using the .nav-icon class
        with font-awesome or any other icon font library-->
        <!-- <template v-for="account in allAccount">
          <li
            :key="account.name"
            class="nav-item has-treeview"
            v-bind:class="{ 'menu-open': selected == account}"
            v-on:click="itemClicked(account)"
          >
            <nuxt-link v-if="!account.parent" to="#" class="nav-link" name="menu">
              <i class="nav-icon fa fa-credit-card-alt"></i>
              <p>
                {{account.name}}
                <i class="right fa fa-angle-left"></i>
              </p>
            </nuxt-link>
            <ul class="nav nav-treeview">
              <li v-for="item in account.child" :key="item" class="nav-item">
                <template v-for="parent in allAccount">
                  <nuxt-link
                    v-if="parent.parent && parent.parent._id == item"
                    to="#"
                    class="nav-link"
                    :key="parent._id"
                  >
                    <i class="fa fa-circle-o nav-icon"></i>
                    <p>{{parent.parent.name}}</p>
                  </nuxt-link>
                </template>
              </li>
            </ul>
          </li>
        </template> 
        -->
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
</template>

<script>
import accountItemTree from "./accountItemTree.vue";
export default {
  props: ["allAccount", "chartOfAccount"],
  data() {
    return {
      isClick: [],
      selected: null
    };
  },
  components: {
    accountItemTree
  },
  methods: {
    itemClicked(account) {
      const name = account.name;
      if (this.isClick[name]) {
        this.isClick[name] = false;
        this.selected = null;
      } else {
        this.isClick[name] = true;
        this.selected = account;
      }
    }
  }
};
</script>