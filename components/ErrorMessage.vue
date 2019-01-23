<template>
  <div class="alert alert-danger alert-dismissible">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
    <strong>
      <i class="icon fa fa-ban"></i>
      {{message.title}}
    </strong>
    {{message.content}}
  </div>
</template>

<script>
export default {
  props: ["message"]
};
</script>