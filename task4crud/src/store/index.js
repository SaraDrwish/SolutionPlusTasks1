import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notesElmnts: [
      {
        id: 1,
        title: "title test",
        desc: "decs a s a r a a a ssss ssss ssssssssss sssssssssssss",
        // completed: false,
        completed: false ? " yes" : " no ",
      },
      // {
      //   id: 2,
      //   title: "titl2e test",
      //   desc: "decs 2ss ssss ssssssssss sssssssssssss",
      //   completed: false,
      // },
    ],
  },
  getters: {
    notes: (state) => state.notesElmnts,
  },
  mutations: {},
  actions: {
    addNew({ state }, notadded) {
      let id = state.notesElmnts.length + 1;
      //reset the id
      notadded.id = id;
      state.notesElmnts.push(notadded);
    },
  },
  modules: {},
});
