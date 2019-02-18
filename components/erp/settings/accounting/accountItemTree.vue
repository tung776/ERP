<template>
  <li>
    <nuxt-link to="#" class="nav-link" name="menu">
      <i class="nav-icon fa fa-credit-card-alt"></i>
      <p>
        {{account.name}}
        <i class="right fa fa-angle-left"></i>
      </p>
    </nuxt-link>
    <ul v-if="account.child && account.child.length > 0">
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