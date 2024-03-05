import Vue from "vue";
import App from "@/App";
import store from "@/store";
import router from "@/router";
import * as filters from "@/filters";
import directives from "@/directives";
import "@/assets/css/reset.scss";
import "@/styles/index.scss";

Vue.config.productionTip = false;

Vue.use(directives);

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

const app = new Vue({
  render: (h) => h(App),
  store,
  router,
});
app.$mount("#app");
