import Vue from "vue";
import VueTypedJs from "vue-typed-js";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

Vue.use(VueTypedJs);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  provide: () => {
    return {
      notyf: new Notyf({
        duration: 3000, // Set your global Notyf configuration here
      }),
    };
  },
  render: (h) => h(App),
}).$mount("#app");
