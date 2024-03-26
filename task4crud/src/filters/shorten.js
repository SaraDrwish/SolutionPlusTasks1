import Vue from "vue";
Vue.filter("shorten", (v) => {
  return v.substring(0, 9) + "....";
});
