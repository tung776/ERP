<template>
  <li
    class="nav-item"
    :class="account.child.length > 0 ? 'has-treeview' : ''"
    style="border-bottom: 1px solid rgba(0,0,0,.125);"
  >
    <nuxt-link to="#" class="nav-link" name="menu">
      <p>
        {{account.name}}
        <i :class="account.child.length > 0 ? 'right fa fa-angle-left': ''"></i>
      </p>
    </nuxt-link>
    <ul
      class="nav nav-treeview"
      style="display: block;"
      v-if="account.child && account.child.length > 0"
    >
      <node v-for="child in account.child" :account="child" :key="child._id ? child._id : child"/>
    </ul>
  </li>
</template>
<script>
export default {
  name: "node",
  props: ["account"],
  components: {}
};
</script>