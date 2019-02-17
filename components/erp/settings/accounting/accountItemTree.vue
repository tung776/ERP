<template>
  <li>
    <nuxt-link v-if="!account.parent" to="#" class="nav-link" name="menu">
      <i class="nav-icon fa fa-credit-card-alt"></i>
      <p>
        {{account.name}}
        <i class="right fa fa-angle-left"></i>
      </p>
    </nuxt-link>
    <ul v-if="account.child && account.child.length > 0">
      <node v-for="child in account.child" :account="child" :allAccount="allAccount" :key="child"/>
    </ul>
  </li>
</template>
<script>
export default {
  name: "node",
  props: ["account", "allAccount"],
  components: {}
};
</script>