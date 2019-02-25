<template>
  <div>
    <ware_house_tab/>
    <price_list_tab/>
    <product_type_tab/>
    <product_option_tab/>
    <product_categories_tab/>
    <shipping_methods_tab/>
  </div>
</template>

<script>
import sv from "@/services/erp/settings/Product";
let service = null;
import { mapGetters } from "vuex";
import priceListTab from "@/components/settings/products/priceList";
import productCategoriesTab from "@/components/settings/products/productCategories";
import productOptionTab from "@/components/settings/products/productOption";
import productTypeTab from "@/components/settings/products/productType";
import shippingMethodsTab from "@/components/settings/products/shippingMethods";
import wareHouseTab from "@/components/settings/products/wareHouse";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      StateChanged: "settings/products/StateChanged"
    })
  },
  watch: {
    StateChanged: async function(val) {
      if (val && val.isChanged) {
        switch (val.name) {
          case "priceList":
            await service.getPriceList();
            break;
          case "productCategories":
            await service.getProductCategories();
            break;
          case "productOption":
            await service.getProductOption();
            break;
          case "productType":
            await service.getProductType();
            break;
          case "shippingMethods":
            await service.getShippingMethods();
            break;
          case "wareHouse":
            await service.getWareHouse();
            break;
          default:
            const result = await service.getInitData();
        }
      }
      this.$store.dispatch("accountState/setStateChanged", false);
    }
  },
  components: {
    priceListTab,
    productCategoriesTab,
    productOptionTab,
    productTypeTab,
    shippingMethodsTab,
    wareHouseTab
  },
  async mounted() {
    service = sv(this.$axios, this.$store);
  },
  layout(contex) {
    return "erp";
  }
};
</script>