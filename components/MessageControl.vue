<template>
  <div>
    <div v-if="message.type === 'error'" class="alert alert-danger alert-dismissible">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <h5>
        <i class="icon fa fa-ban"></i>
        {{message.title}}
      </h5>
      {{message.content}}
    </div>
    <div v-if="message.type=='success'" class="alert alert-success alert-dismissible">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <h5>
        <i class="icon fa fa-check"></i>
        {{message.title}}
      </h5>
      {{message.content}}
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"]
};
</script>