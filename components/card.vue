<template>
  <vs-card>
    <div slot="header">
      <h3>{{card.title}}</h3>
    </div>
    <div slot="media">
      <nuxt-link :to="card.link">
        <div class="inner">
          <img :src="card.image" alt>
        </div>
      </nuxt-link>
    </div>
  </vs-card>
</template>

<script>
export default {
  props: ["card"]
};
</script>