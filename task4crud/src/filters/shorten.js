import Vue from "vue";
Vue.filter("shorten", (inp) => {
  if (inp.length > 11) {
    return inp.substring(0, 11) + "...";
  } else {
    return inp;
  }
});
