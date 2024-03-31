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
    compeletTodo(state, payload) {
      console.log(
        "todosList[payload].completed",
        state.todosList[payload].completed
      );
      state.todosList = state.todosList.filter((elm, index) => {
        if (index == payload) {
          elm.completed = true;
        }
        return elm;
      });
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },
    // //
    updateTodo(state, payload) {
      state.todosList.forEach((elm, index) => {
        if (index == payload) {
          state.todosList[index] = JSON.parse(JSON.stringify(payload));
          console.log("udpateeeeeee payload ");
        }
      });
      console.log("udpateeeeeee payload ");

      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },
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
    getTodo({ state }, index) {
      let data = state.todosList.filter((data) => data.index == index);
      return data;
    },
    ///
    updateTodo({ commit, state }, payload) {
      state.todosList.forEach((elm) => {
        if (elm == payload) {
          commit("updateTodo", payload);
        }
      });
      localStorage.setItem("todosList", JSON.stringify(state.todosList));

      console.log("******updateTodo success******");
      return "sucsess";
    },

    // ///
  },
  modules: {},
});
