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
          // state.todosList[payload].completed = true;
          // console.log("::elm.completed::::", elm.completed, "::elmmmmm:::::");

          elm.completed = true;
          // return elm;
        }
        // console.log("elm.completed::", (elm.completed = true));

        // return (elm.completed = true);
        return elm;
        // return state.todosList[payload].completed;
      });
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },
    updateTodo(state, payload) {
      state.todosList.forEach((data, i) => {
        if (data.id == payload.id) {
          state.todosList[i] = JSON.parse(JSON.stringify(payload));
        }
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
    updateTodo({ commit, state }, payload) {
      state.todosList.forEach((el) => {
        if (el.id == payload.id) {
          commit("updateTodo", payload);
        }
      });
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
      console.log("****** updated success******");
      return "sucsess";
    },
  },
  modules: {},
});
