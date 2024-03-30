import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todosList: [],
    // todosList: [{ title: "", desc: "" }],
  },
  getters: {
    todosList: (state) => state.todosList,
  },
  mutations: {
    addTodo(state, payload) {
      state.todosList.push(payload);
    },
    deleteTodo(state, payload) {
      state.todosList = state.todosList.filter((elm, index) => {
        index !== payload;
      });
    },
    compeletTodo(state, payload) {
      state.todosList = state.todosList.filter((elm, index) => {
        if (elm == payload) {
          elm.completed = true;
        }
        return elm;
      });
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
