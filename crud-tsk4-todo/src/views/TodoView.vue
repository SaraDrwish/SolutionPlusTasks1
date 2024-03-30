<template>
  <div class="todo">
    <h2 class="text-3xl my-4 font-bold text-red-500">TODO</h2>
    <div class="container">
      <div class="p-1 mx-auto w-[80%]">
        <div class="">
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
        <div class="">
          <div class="bg-green-100 p-1 w-[90%] mx-auto rounded-[1rem]">
            <ul v-for="(tod, index) in todosList" :key="index">
              <!-- <div class="" v-if="todoss.length > 0"> -->
              <li>
                <div
                  class="flex gap-4 w-[90%] bg-[#a7b2b5] p-2 my-4 mx-auto justify-evenly rounded-[1rem]"
                >
                  <input
                    type="checkbox"
                    class="p-2 m-1 outline-none text-orange-400 bg-orange-200"
                  />
                  <div
                    class="flex gap-1 w-[80%] bg-slate-700 my-1 mx-auto text-orange-600 p-4 rounded-[1rem]"
                  >
                    <p
                      class="rounded-[1rem] bg-slate-100 p-2 outline-none w-[30%] m-1"
                      placeholder="title"
                    >
                      {{ tod.title }}
                    </p>
                    <!-- <input
                      type="text"
                      class="rounded-[1rem] p-2 outline-none w-[70%]"
                      placeholder="description"
                    /> -->
                    <p
                      class="rounded-[1rem] p-2 bg-slate-100 outline-none w-[30%] m-1"
                      placeholder="title"
                    >
                      {{ tod.desc }}
                    </p>
                  </div>
                  <div class="flex gap-2 p-1 justify-between rounded-[1rem]">
                    <input
                      @click="DeleteTodoo(index)"
                      class="p-1 cursor-pointer"
                      type="button"
                      value="Delete"
                    />
                    <input
                      class="p-1 cursor-pointer"
                      type="button"
                      value="Edit"
                    />
                  </div>
                </div>
              </li>
              <!-- </div> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TodoView",
  data() {
    return {
      title: "",
      desc: "",
      // completed:false,
    };
  },
  computed: {
    ...mapGetters({
      todosList: "todosList",
    }),
  },
  methods: {
    // DeleteTodoo() {
    deleteTodo(payload) {
      // const deleteTodo = (payload) => {
      this.$store.dispatch("deleteTodo", payload);
      // console.log("deleteTodo::::", deleteTodo);
    },
    // deleteTodo(index);
    // return deleteTodo(index);
    // },
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
      (this.title = " "), (this.desc = " "), addTodo(item);
      console.log("item:", item);
    },
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
</style>
