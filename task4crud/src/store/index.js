import Vue from "vue";
import Vuex from "vuex";

const localStorageKey = "localStorage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notesElmnts: [
      {
        id: 1,
        title: "title test 1 ",
        desc: "description test 1 lorem11  ",
        completed: false,
      },
    ],
    // notesElmntsLocalS: JSON.parse(localStorage.getItem("notesElmnts")) || "[]",
  },

  // created() {
  //   this.addUpdateData = JSON.parse(
  //     localStorage.getItem(loclStoregKey || "[]")
  //   );
  // },

  mounted() {
    state.notesElmnts = JSON.parse(localStorage.getItem(localStorageKey));
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
      // localStorage.setItem(
      //   "notesElmntsLocalS",
      //   JSON.stringify(state.notesElmnts)
      // );
      // localStorage.setItem("notesElmnts", JSON.stringify(state.notesElmnts));
      localStorage.setItem(
        "localStorageKey",
        JSON.stringify(state.notesElmnts)
      );
    },
  },
  actions: {
    addNew({ state }, notaManipyol) {
      // if (state.notesElmnts.includes(id) === false) {

      // localStorage.setItem(loclStoregKey, JSON.stringify(this.notesElmnts));
      // } else {
      // id -= 1;
      // }

      let id = state.notesElmnts.length + 1;
      //reset the id
      notaManipyol.id = id;
      state.notesElmnts.push(JSON.parse(JSON.stringify(notaManipyol)));
      console.log("addNew success ******* ");
      // localStorage.setItem("notesElmnts", JSON.stringify(state.notesElmnts));
      localStorage.setItem(
        "localStorageKey",
        JSON.stringify(state.notesElmnts)
      );
      return "sucsess addNew";
    },

    getNewnote({ state }, id) {
      let data = state.notesElmnts.filter((data) => data.id == id);
      // localStorage.setItem("notesElmnts", JSON.stringify(state.notesElmnts));

      return data;
    },

    updateNoteStored({ commit, state }, notaManipyol) {
      state.notesElmnts.forEach((el) => {
        if (el.id == notaManipyol.id) {
          commit("updateNoteStored", notaManipyol);
        }
      });
      // localStorage.setItem("notesElmnts", JSON.stringify(state.notesElmnts));
      localStorage.setItem(
        "localStorageKey",
        JSON.stringify(state.notesElmnts)
      );
      console.log("******updateNoteStored success******");
      return "sucsess updateNoteStored";
    },
    // /////////

    delnote({ state }, id) {
      state.notesElmnts.forEach((d, i) => {
        if (d.id == id) {
          state.notesElmnts.splice(i, 1);
        }
      });
      // localStorage.setItem("notesElmnts", JSON.stringify(state.notesElmnts));
      console.log("sussecc dell");

      return "success deletion ";
    },
    toglNotComStored({ state }, id) {
      // state.notesElmnts.forEach((d, i) => {
      // if (d.id == id) {

      // return (state.notesElmnts.completed = !state.notesElmnts.completed);

      // }
      localStorage.setItem(
        "localStorageKey",
        JSON.stringify(state.notesElmnts)
      );
      return (state.notesElmnts.completed = !state.notesElmnts.completed);
      // });
      // console.log("sussecc change status of completed");
    },
  },
  modules: {},
});
