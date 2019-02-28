<template>
  <div>
    <ware-house-tab/>
    <!-- <price-list-tab/> -->
    <!-- <product-type-tab/> -->
    <!-- <product-option-tab/> -->
    <!-- <product-categories-tab/> -->
    <!-- <shipping-methods-tab/> -->
  </div>
</template>

<script>
import sv from "@/services/erp/settings/Product";
let service = null;
import { mapGetters } from "vuex";
import priceListTab from "@/components/erp/settings/products/priceList";
import productCategoriesTab from "@/components/erp/settings/products/productCategories";
import productOptionTab from "@/components/erp/settings/products/productOption";
import productTypeTab from "@/components/erp/settings/products/productType";
import shippingMethodsTab from "@/components/erp/settings/products/shippingMethods";
import wareHouseTab from "@/components/erp/settings/products/wareHouse";
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
            await service.getInitData();
        }
      } else {
        await service.getInitData();
        this.$store.dispatch("settings/products/setStateChanged", false);
      }
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
    await service.getInitData();
  },
  layout(contex) {
    return "erp";
  }
};
</script>