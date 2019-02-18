<template>
  <li
    class="nav-item"
    :class="account.child.length > 0 ? 'has-treeview' : ''"
    style="border-bottom: 1px solid rgba(0,0,0,.125);"
    v-bind:style="{ marginLeft: marginLeft + 'px' }"
  >
    <nuxt-link to="#" class="nav-link" name="menu">
      <i :class="account.parent ? 'fa fa-arrow-right' : 'fa fa-list-ul'"></i>
      <p>
        {{account.name}}
        <i :class="account.child.length > 0 ? 'right fa fa-angle-left': ''"></i>
      </p>
      <button
        v-on:click.stop.prevent="editClick(account)"
        type="button"
        class="btn btn-tool btn-success btn-flat"
      >
        <i class="fa fa-pencil-square-o"></i>
      </button>
      <button
        v-on:click.stop.prevent="removeClick(account)"
        type="button"
        class="btn btn-tool btn-danger btn-flat"
      >
        <i class="fa fa-remove"></i>
      </button>
    </nuxt-link>

    <ul
      class="nav nav-treeview"
      style="display: block;"
      v-if="account.child && account.child.length > 0"
    >
      <node
        v-for="child in account.child"
        :account="child"
        :marginLeft="marginLeft + 20"
        :key="child._id ? child._id : child"
      />
    </ul>
  </li>
</template>
<script>
export default {
  name: "node",
  props: ["account", "marginLeft"],
  components: {},
  methods: {
    removeClick(account) {
      console.log("remove clicked", account.name);
    },
    editClick(account) {
      console.log("edit clicked", account.name);
    }
  }
};
</script>