import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // todosList: [],
    todosList: [{ title: "", desc: "" }],
  },
  getters: {
    todosList: (state) => state.todosList,
  },
  mutations: {
    addTodo(state, payload) {
      state.todosList.push(payload);
    },
    deleteTodo(state, payload) {
      state.todosList = state.todosList.filter((elm, indx) => {
        indx != payload;
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
  },
  modules: {},
});
