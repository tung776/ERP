<template>
  <vs-card style="margin: 10px 10px">
    <div slot="header">
      <h3>{{card.title}}</h3>
    </div>
    <div slot="media">
      <!-- <p>{{card.content}}</p> -->
      <div>
        <vs-icon :icon="card.icon" color="primary" size="200px"/>
      </div>
    </div>
    <div slot="footer">
      <vs-row vs-justify="center">
        <vs-button @click="$router.push(card.link)" color="success" icon="forward">{{card.footer}}</vs-button>
      </vs-row>
    </div>
  </vs-card>
</template>

<script>
export default {
  props: ["card"]
};
</script>