import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notesElmnts: [
      {
        id: 1,
        title: "test ",
        desc: "test eru 1111111 ",
        completed: false ? " yes" : " no ",
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
      console.log("the not daata is ::::::: ", notData);

      let notData = state.notesElmnts.filter((notData) => notData.id == id);
      console.log("the not daata is ::::::: ", notData);
      return notData;
    },

    updateNoteStored({ commit, state }, notaManipyol) {
      state.notesElmnts.forEach((el) => {
        console.log(notaManipyol);
        if (el.id == notaManipyol.id) {
          commit("updateNoteStored", notaManipyol);
        }
      });
    },
  },
  modules: {},
});
