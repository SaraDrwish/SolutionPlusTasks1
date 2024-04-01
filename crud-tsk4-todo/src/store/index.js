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
    editTodo(state, payload) {
      state.todosList = state.todosList.filter((el, index) => {
        if (index == payload) {
          el.title = `st({${el.title} });`;
          console.log("el ;;", el, "payload :::", payload, " index::", index);
        }
        return el;
      });

      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },

    // ////
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
    // //

    updateTodo(state, payload) {
      // state.todosList[payload.index] = payload.index;
      state.todosList.forEach((el, index) => {
        if (el == payload) {
          state.todosList[index] = JSON.parse(JSON.stringify(payload));
          console.console.log(
            "el from udpate ",
            el,
            "tofo[onddx",
            todosList[index],
            ",payod",
            payload
          );
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
    editTodo({ commit }, payload) {
      commit("editTodo", payload);
    },
    updateTodo({ commit }, payload) {
      commit("updateTodo", payload);
      console.log("******updateTodo success******");
      return "sucsess";
    },
  },

  modules: {},
});
