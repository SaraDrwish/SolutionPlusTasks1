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
  mutations: {
    updateNote(state, notaManipyol) {
      state.notesElmnts.forEach((data, i) => {
        if (data.id == notaManipyol.id) {
          state.notesElmnts[i] = notaManipyol;
        }
      });
    },
  },
  actions: {
    addNew({ state }, notaManipyol) {
      let id = state.notesElmnts.length + 1;
      //reset the id
      notaManipyol.id = id;
      state.notesElmnts.push(notaManipyol);
    },

    getNewnote({ state }, id) {
      let notData = state.notesElmnts.filter((notData) => notData.id == id);
      console.log(notData);
      return notData;
    },
    updateNote({ state }, notaManipyol) {
      state.notesElmnts.forEach((el) => {
        console.log(notaManipyol);
        if (el == notaManipyol.id) {
          this.commit("updateNote", notaManipyol);
        }
      });
    },
  },
  modules: {},
});
