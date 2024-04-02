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
      state.todosList = state.todosList.filter((el, index) => {
        if (index == payload) {
          el.completed = true;
        }
        return el;
      });
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },

    // //////////////////////
    editTodo(state, payload) {
      const { index, el } = payload;
      state.todosList[index] = el;
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },

    updateTodo(state, payload) {
      const { index, el } = payload;
      state.todosList[index] = el;
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },

    // //////////////////////////////
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
    editTodo({ commit }, payload) {
      commit("editTodo", payload);
      console.log("******editTodo success******");
    },
    updateTodo({ commit }, payload) {
      commit("updateTodo", payload);
      console.log("******updateTodo success******");
      return "sucsess";
    },
  },

  modules: {},
});
