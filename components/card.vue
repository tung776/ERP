<template>
  <div class="small-box">
    <nuxt-link :to="card.link">
      <div class="inner">
        <img :src="card.image" alt>
      </div>
    </nuxt-link>
    <div class="small-box-footer bg-info">
      <span>{{card.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"]
};
</script>