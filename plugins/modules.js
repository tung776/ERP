import vue from "vue";
import {
    mapGetters
} from "vuex";

const User = {
    install(vue, options) {
        vue.mixin({
            computed: {
                ...mapGetters({
                    Modules: "modules/Modules"
                })
            }
        });
    }
};
vue.use(User);