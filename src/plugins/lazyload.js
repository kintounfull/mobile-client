import Vue from "vue";
import VueLazyload from "vue-lazyload";

// https://github.com/hilongjw/vue-lazyload
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: require("@/assets/img/ic_photo_loading.png"),
    error: require("@/assets/img/ic_photo_error.png"),
    attempt: 3
});
