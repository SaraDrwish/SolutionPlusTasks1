import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todosList: JSON.parse(localStorage.getItem("todosList")) || [],
    // todosList: [{ title: "", desc: "" }],
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
        index !== payload;
      });
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },
    compeletTodo(state, payload) {
      state.todosList = state.todosList.filter((elm, index) => {
        if (elm == payload) {
          elm.completed = true;
        }
        return elm;
      });
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
  },
  modules: {},
});
