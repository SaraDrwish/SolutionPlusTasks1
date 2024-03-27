import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notesElmnts: [
      {
        id: 1,
        title: "title test",
        desc: "decs ssss ssssssssss sssssssssssss",
        completed: false,
      },
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

    getNewnote({ state }, id) {
      let notData = state.notesElmnts.filter((notData) => notData.id == id);
      console.log(notData);
      return notData;
    },
    // updateNote({state} , data)
  },
  modules: {},
});
