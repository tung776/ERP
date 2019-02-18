<template>
  <div class="card card-default" :class="isExpanded ? 'collapsed-card' : ''">
    <div class="card-header">
      <slot name="expander-header"></slot>
      <div class="card-tools">
        <button type="button" class="btn btn-tool" data-widget="collapse">
          <i class="fa fa-minus"></i>
        </button>
      </div>
    </div>
    <!-- /.card-header -->
    <div class="card-body" :style="isExpanded ? 'display: none;' : 'display: block;'">
      <slot name="expander-body"></slot>
      <!-- /.row -->
    </div>
    <!-- /.card-body -->
    <div class="card-footer" :style="isExpanded ? 'display: none;' : 'display: block;'">
      <slot name="expander-footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["isExpanded"]
};
</script>