import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todosList: JSON.parse(localStorage.getItem("todosList")) || [],
  },
  getters: {
    todosList: (state) => state.todosList,
  },
  mutations: {
    addTodo(state, payload) {
      state.todosList.push(payload);
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },
    deleteTodo(state, payload) {
      state.todosList = state.todosList.filter((elm, index) => {
        return index !== payload;
      });
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },
    // ////
    // editTodo(state, payload) {
    //   localStorage.setItem("todosList", JSON.stringify(state.todosList));
    // },
    // ////
    compeletTodo(state, payload) {
      // console.log(
      //   "todosList[payload].completed",
      //   state.todosList[payload].completed
      // );
      state.todosList = state.todosList.filter((elm, index) => {
        if (index == payload) {
          elm.completed = true;
        }
        return elm;
      });
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },
    // //
    // updateTodo(state, payload) {
    //   state.todosList[payload.index] = payload.index;
    //   localStorage.setItem("todosList", JSON.stringify(state.todosList));
    // },
    ///////
    // updateTodo(state, payload) {
    //   state.todosList.forEach((data, index) => {
    //     if (data == payload) {
    //       state.todosList[index] = JSON.parse(JSON.stringify(payload));
    //     }
    //   });
    //   localStorage.setItem("todosList", JSON.stringify(state.todosList));
    // },
    //////////
    updateTodo(state, payload) {
      state.todosList[payload.index] = payload.index;
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },
    // ////
  },
  actions: {
    addTodo({ commit }, payload) {
      commit("addTodo", payload);
    },
    deleteTodo({ commit }, payload) {
      commit("deleteTodo", payload);
    },
    compeletTodo({ commit }, payload) {
      commit("compeletTodo", payload);
    },
    // //////////////////////////////////////////////////////////////////
    // editTodo({ state }, index) {
    //   // commit("editTodo", payload);
    //   return state.todosList[index];
    //   localStorage.setItem("todosList", JSON.stringify(state.todosList));
    // },
    // ////////
    // edTodo({ state }, index) {
    //   let data = state.todosList.filter((data) => data.index == index);
    //   return data;
    // },
    // ////////

    // updateTodo({ commit, state }, payload) {
    //   commit("updateTodo", payload);
    //   localStorage.setItem("todosList", JSON.stringify(state.todosList));
    //   console.log("******updateTodo success******");
    //   return "sucsess";
    // },
    // ////
    // updateTodo({ state }, payload) {
    //   state.todosList.forEach((el) => {
    //     if (el == payload) {
    //       commit("updateTodo", payload);
    //     }
    //   });
    //   localStorage.setItem("todosList", JSON.stringify(state.todosList));

    //   console.log("******updateNoteStored success******");
    //   return "sucsess updateNoteStored";
    // ///
    // },

    // ////////////////////////////////
    getTodo({ state }, index) {
      return state.todosList[index];
    },
    ///
    updateTodo({ commit, state }, payload) {
      commit("updateTodo", payload);
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
      console.log("******updateTodo success******");
      return "sucsess";
    },
    // ///////////////////////////////////////
  },
  modules: {},
});
