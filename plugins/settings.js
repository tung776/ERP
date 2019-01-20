import vue from "vue";
import {
    mapGetters
} from "vuex";

const User = {
    install(vue, options) {
        vue.mixin({
            computed: {
                ...mapGetters({
                    organizationSetting: "settings/organizationSetting"
                })
            }
        });
    }
};
vue.use(User);