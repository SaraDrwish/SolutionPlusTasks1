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
    updateNoteStored(state, notaManipyol) {
      state.notesElmnts.forEach((data, i) => {
        if (data.id == notaManipyol.id) {
          state.notesElmnts[i] = JSON.parse(JSON.stringify(notaManipyol));
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
      console.log("addNew success ******* ");
      return "addNew success ******* ";
    },

    getNewnote({ state }, id) {
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
      console.log("******updateNoteStored success******");

      return "**updateNoteStored success**";
    },
  },
  modules: {},
});
