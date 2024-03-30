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

  // created() {
  //   this.addUpdateData = JSON.parse(
  //     localStorage.getItem(loclStoregKey || "[]")
  //   );
  // },

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
      // localStorage.setItem(loclStoregKey, JSON.stringify(this.notesElmnts));

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
      // localStorage.setItem(loclStoregKey, JSON.stringify(this.notesElmnts));
      console.log("sussecc dell");

      return "success deletion ";
    },
    toglNotComStored({ state }, id) {
      state.notesElmnts.forEach((d, i) => {
        if (d.id == id) {
          state.notesElmnts.completed = !state.notesElmnts.completed;
        }
      });
      // localStorage.setItem(loclStoregKey, JSON.stringify(this.notesElmnts));

      console.log("sussecc change status of completed");
    },
  },
  modules: {},
});
