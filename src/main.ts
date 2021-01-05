import Vue from "vue";
import App from "@/components/App.vue";
import router from "./routes";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
