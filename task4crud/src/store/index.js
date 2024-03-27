import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notesElmnts: [
      {
        id: 1,
        title: "test ",
        desc: "test eru11 ",
        // completed: false,
        completed: true ? " yes" : " no ",
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
      state.notesElmnts.push(JSON.parse(JSON.stringify(notaManipyol)));
      console.log("addNew success ******* ");
      return "addNew success ******* ";
    },

    getNewnote({ state }, id) {
      let data = state.notesElmnts.filter((data) => data.id == id);
      console.log("the not daata is ::::::: ", data);
      return data;
    },

    updateNoteStored({ commit, state }, notaManipyol) {
      state.notesElmnts.forEach((el) => {
        console.log(notaManipyol);
        if (el.id == notaManipyol.id) {
          commit("update Note Stored", notaManipyol);
        }
      });
      console.log("******updateNoteStored success******");

      return "**updateNoteStored success**";
    },
    delnote({ state }, id) {
      state.notesElmnts.forEach((d, i) => {
        if (d.id == id) {
          state.notesElmnts.splice(i, 1);
        }
      });
      console.log("sussecc dell");
    },

    // toglNote({ state }, id) {
    // state.notesElmnts.forEach((e) => {
    //   if (e.id == id) {
    //     let cmplteStore = !state.notesElmnts.completed;
    //     console.log(
    //       "state.notesElmnts.completed stooredd :::: ",
    //       state.notesElmnts.completed,
    //       "cmplteStore",
    //       cmplteStore
    //     );
    //     return cmplteStore;
    // }
    // });
    // ///////////////////////////////////////////
    //   let cmplteStore = state.notesElmnts.completed;
    //   console.log(
    //     " cmplte Store ::: ",
    //     cmplteStore,
    //     "!cmplteStore::",
    //     !cmplteStore
    //   );
    //   return cmplteStore;
    // },
  },
  modules: {},
});
