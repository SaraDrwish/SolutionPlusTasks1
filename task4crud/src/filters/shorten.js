import Vue from "vue";
Vue.filter("shorten", (inp) => {
  if (inp.length > 20) {
    return inp.substring(0, 20) + "...";
  } else {
    return inp;
  }
});
