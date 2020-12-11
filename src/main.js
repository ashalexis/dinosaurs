import Vue from "vue";
import VueTypedJs from "vue-typed-js";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueTypedJs);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
