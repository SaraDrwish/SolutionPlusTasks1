<template>
  <div class="todo">
    <h2 class="text-3xl my-4 font-bold text-red-500">TODO</h2>
    <div class="container">
      <div class="p-1 mx-auto w-[80%]">
        <ul>
          <li>
            <div
              class="flex gap-4 bg-slate-700 p-4 my-9 justify-evenly rounded-[1rem]"
            >
              <form @submit.prevent="AddTodo" class="flex gap-2 w-[90%]">
                <div class="flex gap-2 w-[90%]">
                  <input
                    v-model="title"
                    type="text"
                    class="w-[80%] rounded-[1rem] p-2 outline-none flex-1"
                    placeholder="write your title here ... "
                  />
                  <input
                    v-model="desc"
                    type="text"
                    class="w-[80%] rounded-[1rem] p-2 outline-none flex-1"
                    placeholder="write your description here ... "
                  />
                </div>
                <input
                  class="cursor-pointer text-red-400 border-2 border-red-400 p-2"
                  type="submit"
                  value="Add"
                />
              </form>
            </div>
          </li>
        </ul>
      </div>

      <div
        v-if="todosList.length > 0"
        class="bg-green-100 p-1 w-[90%] mx-auto rounded-[1rem]"
      >
        <ul v-for="(item, index) in todosList" :key="index">
          <li>
            <div
              class="flex gap-4 w-[90%] bg-[#a7b2b5] p-2 my-4 mx-auto items-center justify-evenly rounded-[1rem]"
            >
              <p class="w-[5%] p-1 m-auto text-center">-{{ index }}-</p>

              <button
                :disabled="item.completed"
                :class="item.completed ? 'bg-green-300' : 'bg-red-400 '"
                class="p-2 mx-auto my-1 text-center outline-none text-orange-900 rounded-[5rem]"
                @click="compeletTodo(index)"
              >
                {{ item.completed ? "completed" : "incompleted" }}
              </button>
              <div
                class="flex gap-1 w-[90%] bg-slate-700 my-1 mx-auto text-orange-600 p-4 rounded-[1rem]"
              >
                <p
                  class="rounded-[1rem] bg-slate-100 p-2 outline-none w-[40%] m-1"
                  :class="item.completed ? 'bg-green-400' : 'bg-red-100 '"
                >
                  {{ item.title | shorten }}
                </p>

                <p
                  class="rounded-[1rem] p-2 bg-slate-100 outline-none w-[60%] m-1"
                  :class="item.completed ? 'bg-green-400' : 'bg-red-100 '"
                >
                  {{ item.desc | shorten }}
                </p>
              </div>

              <div class="flex gap-2 p-1 justify-between rounded-[1rem]">
                <input
                  @click="deleteTodo(index)"
                  class="p-1 cursor-pointer"
                  type="submit"
                  value="Delete"
                />

                <input
                  @click="editTodo(index)"
                  class="p-1 cursor-pointer"
                  type="submit"
                  value="Edit"
                />
              </div>
            </div>
          </li>
          <!-- //////////////////////////// -->
          <div class="" v-show="popmodel">
            <div class="popup-compon-lay" @click="popmodel = false"></div>

            <div class="popup-compon p-4 flex flex-col">
              <p class="mb-8 text-red-400">Edit the note</p>
              <p>----{{ index }}----</p>

              <div class="p-4 flex gap-4 items-center text-orange-400">
                <label>title:</label>
                <input
                  class="p-1 rounded-[1rem] text-slate-400"
                  type="text"
                  v-model="item.title"
                />
                <label>description:</label>
                <input
                  class="p-1 rounded-[1rem] text-slate-400"
                  type="text"
                  v-model="item.desc"
                />
              </div>

              <input
                @click="updateTodo(index)"
                class="border-2 border-red-400 p-2 cursor-pointer text-red-400 mt-9"
                type="submit"
                value="Update"
              />
            </div>
          </div>
          <!-- //////////////////////////// -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import shorten from "../filters/shorten";
export default {
  name: "TodoView",

  data() {
    return {
      title: "",
      desc: "",
      completed: false,
      updatedTodos: {
        title: "",
        desc: " ",
        completed: false,
      },
      popmodel: false,
    };
  },
  computed: {
    ...mapGetters({
      todosList: "todosList",
    }),
  },
  methods: {
    deleteTodo(payload) {
      this.$store.dispatch("deleteTodo", payload);
      console.log("deleteTodo :::::working paylod ::", payload);
    },
    compeletTodo(payload) {
      this.$store.dispatch("compeletTodo", payload);
      console.log("compeletTodoooo :", payload);
    },
    AddTodo() {
      const addTodo = (payload) => {
        this.$store.dispatch("addTodo", payload);
      };
      if (!this.title || !this.desc) return;
      const item = {
        title: this.title,
        desc: this.desc,
        completed: false,
      };
      (this.title = ""), (this.desc = ""), addTodo(item);
      console.log("item:", item);
    },
    // /////////////////////////////////////////////////////////
    editTodo(payload) {
      this.popmodel = true;

      this.$store.dispatch("editTodo", payload).then((response) => {
        this.updatedTodos.title = response.title;

        this.updatedTodos.desc = response.desc;
        console.log("this.updatedTodos.title::", this.updatedTodos.title);
      });
    },
    updateTodo(payload) {
      this.popmodel = false;
      this.$store.dispatch("updateTodo", payload);
      console.log("updated from vue sucss");
    },
    // ///
  },
};
</script>

<style lang="scss" scoped>
$base-color: #a7b2b5;
.todo {
  text-transform: capitalize;
  width: 90%;
  background: $base-color;
  padding: 1rem;
  margin: auto;
  border-radius: 2rem;
}
.popup-compon {
  width: 60%;
  padding: 1rem;
  background-color: rgb(174, 216, 185);
  border-radius: 2rem;
  position: absolute;
  top: 30%;
  left: 20%;
  font-size: 22px;
  font-weight: bold;
  // display: flex;
  input[type="submit"] {
    width: 30%;
    margin: 2rem auto;
    border-radius: 2rem;
  }
}
.popup-compon-lay {
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow: hidden;
  background-color: rgba(148, 163, 184, 0.7);
  position: absolute;
  top: 0;
  left: 0;
}
</style>
