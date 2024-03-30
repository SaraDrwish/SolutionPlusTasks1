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
  },

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
      localStorage.setItem(
        "localStorageKey",
        JSON.stringify(state.notesElmnts)
      );
    },
  },
  actions: {
    addNew({ state }, notaManipyol) {
      let id = state.notesElmnts.length + 1;
      notaManipyol.id = id;
      state.notesElmnts.push(JSON.parse(JSON.stringify(notaManipyol)));
      console.log("addNew success ******* ");
      localStorage.setItem(
        "localStorageKey",
        JSON.stringify(state.notesElmnts)
      );
      return "sucsess addNew";
    },

    getNewnote({ state }, id) {
      let data = state.notesElmnts.filter((data) => data.id == id);
      return data;
    },

    updateNoteStored({ commit, state }, notaManipyol) {
      state.notesElmnts.forEach((el) => {
        if (el.id == notaManipyol.id) {
          commit("updateNoteStored", notaManipyol);
        }
      });
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
      console.log("sussecc dell");

      return "success deletion ";
    },
    toglNotComStored({ state }, id) {
      localStorage.setItem(
        "localStorageKey",
        JSON.stringify(state.notesElmnts)
      );
      return (state.notesElmnts.completed = !state.notesElmnts.completed);
    },
  },
  modules: {},
});
