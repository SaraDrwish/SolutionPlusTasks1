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
      const { index, updatedTodo } = payload;
      state.todosList[index] = updatedTodo;
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },
    updateTodo(state, payload) {
      const { index, updatedTodo } = payload;
      // Update the todo item at the provided index with the updatedTodo object
      state.todosList[index] = updatedTodo;
      localStorage.setItem("todosList", JSON.stringify(state.todosList));
    },
    // ////////////////
    // editTodo(state, payload) {
    //   state.todosList = state.todosList.filter((el, index) => {
    //     if (index == payload) {
    //       el.title = `${el.title} + ${state.todosList[el].title} `;
    //       el.desc = `${el.desc}=${index.title}== `;
    //       console.log(
    //         "el :::",
    //         el,
    //         "payload :::",
    //         payload,
    //         " index:::",
    //         index,

    //         "state.todosList:::::",
    //         state.todosList,
    //         "state.todosList[index]:::",
    //         state.todosList[index]
    //       );
    //     }
    //     return el;
    //   });

    //   localStorage.setItem("todosList", JSON.stringify(state.todosList));
    // },

    // ////////////

    // updateTodo(state, payload) {
    //   state.todosList.forEach((el, index) => {
    //     if (el == payload) {
    //       state.todosList[index] = payload;
    //       console.console.log("el from udpate ", el);
    //     }
    //   });
    //   localStorage.setItem("todosList", JSON.stringify(state.todosList));
    // },
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
    getTodo({ state }, payload) {
      let data = state.todosList.filter((data, index) => {
        data.payload == payload;
        return index++;
      });
      console.log("******getTodo success******");

      return data;
    },
  },

  modules: {},
});
