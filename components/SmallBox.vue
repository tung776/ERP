<template>
  <div class="small-box bg-info">
    <div class="inner">
      <h3>{{card.title}}</h3>

      <p>{{card.content}}</p>
    </div>
    <div class="icon">
      <i :class="card.icon"></i>
    </div>
    <nuxt-link :to="card.link" class="small-box-footer">
      {{card.footer}}
      <i class="fa fa-arrow-circle-right"></i>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["card"]
};
</script>