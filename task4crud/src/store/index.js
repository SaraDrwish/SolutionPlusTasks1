import Vue from "vue";
import Vuex from "vuex";

// const loclStoregKey = "loclStoreg";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notesElmnts: [
      {
        id: 1,
        title: "test ",
        desc: "test eru11 ",
        completed: false,
      },
    ],
  },
  getters: {
    notes: (state) => state.notesElmnts,
  },
  mutations: {
    updateNoteStored(state, notaManipyol) {
      notes.forEach((data, i) => {
        if (data.id == notaManipyol.id) {
          notes[i] = JSON.parse(JSON.stringify(notaManipyol));
          console.log("notes..", notes);
          console.log("state.notesElmnts..", state.notesElmnts);
        }
      });
      // localStorage.setItem(loclStoregKey, JSON.stringify(this.notesElmnts));
    },
  },
  actions: {
    addNew({ state }, notaManipyol) {
      let id = state.notesElmnts.length + 1;
      //reset the id
      notaManipyol.id = id;
      state.notesElmnts.push(JSON.parse(JSON.stringify(notaManipyol)));
      console.log("addNew success ******* ");
      // localStorage.setItem(loclStoregKey, JSON.stringify(this.notesElmnts));
      return "addNew";
    },

    getNewnote({ state }, id) {
      let data = state.notesElmnts.filter((data) => data.id == id);
      // console.log(
      //   "the not daata is ::::::: ",
      //   data,
      //   "..not elmnts ::::..",
      //   notesElmnts
      // );
      // localStorage.setItem(loclStoregKey, JSON.stringify(this.notesElmnts));

      return data;
    },

    updateNoteStored({ commit, state }, notaManipyol) {
      state.notesElmnts.forEach((el) => {
        console.log("notaManipyol::", notaManipyol);
        if (el.id == notaManipyol.id) {
          commit("updateNoteStored", notaManipyol);
        }
      });
      // localStorage.setItem(loclStoregKey, JSON.stringify(this.notesElmnts));

      console.log("******updateNoteStored success******");

      return "updateNoteStored";
    },
    // /////////
    // toggleNoteComplteStored({ commit, state }, notaManipyol) {
    //   state.notesElmnts.forEach((elm) => {
    //     console.log("toglecomplt::", notaManipyol);
    //     if (elm.id == notaManipyol.id) {
    //       commit("toglecomplt", notaManipyol);
    //     }
    //   });
    //   console.log("******toglecomplt success******");
    //   return "toglecomplt";
    // },
    togglN({ commit, state }, notaManipyol) {
      state.notesElmnts.completed = !state.notesElmnts.completed;
      return "togglN";
    },
    // ////////
    delnote({ state }, id) {
      state.notesElmnts.forEach((d, i) => {
        if (d.id == id) {
          state.notesElmnts.splice(i, 1);
        }
      });
      // localStorage.setItem(loclStoregKey, JSON.stringify(this.notesElmnts));

      console.log("sussecc dell");
    },
  },
  modules: {},
});
