import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "bootstrap";
// import "bootstrap/dist/css";
// import "bootstrap/dist/css/bootstrap.main.css";
// import { BootstrapVue } from "bootstrap-vue";
// import "./assets/sass/style.scss";
// Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
