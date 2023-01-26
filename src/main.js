import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import router from "@/router";
import vuetify from "@/plugins/vuetify";
import { store } from "@/store";

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
