import Vue from "vue";
Vue.filter("shorten", (inp) => {
  return inp.substring(0, 33) + " ....";
});
