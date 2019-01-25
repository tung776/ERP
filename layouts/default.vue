<template>
  <div>
    <slot name="message"></slot>
    <nuxt/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "/plugins/jquery/jquery.min.js"
        },
        {
          src: "/plugins/bootstrap/js/bootstrap.bundle.min.js"
        }
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
        },
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        },
        {
          rel: "stylesheet",
          href:
            "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        },
        {
          rel: "stylesheet",
          href: "/css/adminlte.min.css"
        }
      ]
    };
  }
};
</script>