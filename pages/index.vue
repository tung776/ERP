<template>
  <div>
    <header/>
    <menu/>
    <herro/>
    <feature-products/>
    <contact-us/>
  </div>
</template>

<script>
import Header from "@/components/ecommerce/header";
import Footer from "@/components/ecommerce/footer";
import Herro from "@/components/ecommerce/herro";
import Menu from "@/components/ecommerce/menu";
import FeatureProducts from "@/components/ecommerce/FeatureProducts";
import ContactUs from "@/components/ecommerce/ContactUs";
export default {
  components: {
    Header,
    Footer,
    Herro,
    Menu,
    FeatureProducts,
    ContactUs
  },
  // OR
  layout(context) {
    return "ecommerce";
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>