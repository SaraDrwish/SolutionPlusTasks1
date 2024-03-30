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
                <form @submit.prevent="">
                  <div class="flex gap-2 w-[90%]">
                    <input
                      type="text"
                      class="w-[80%] rounded-[1rem] p-2 outline-none flex-1"
                      placeholder="write your title here ... "
                    />
                    <input
                      type="text"
                      class="w-[80%] rounded-[1rem] p-2 outline-none flex-1"
                      placeholder="write your description here ... "
                    />
                  </div>
                  <input
                    class="cursor-pointer text-red-400 border-2 border-red-400 p-2"
                    type="button"
                    value="Add"
                  />
                </form>
              </div>
            </li>
          </ul>
        </div>
        <div class="">
          <div class="bg-green-100 p-1 w-[90%] mx-auto rounded-[1rem]">
            <ul v-for="i in 4" :key="i.id">
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
                    <input
                      type="text"
                      class="rounded-[1rem] p-2 outline-none w-[30%]"
                      placeholder="title"
                    />
                    <input
                      type="text"
                      class="rounded-[1rem] p-2 outline-none w-[70%]"
                      placeholder="description"
                    />
                  </div>
                  <div class="flex gap-2 p-1 justify-between rounded-[1rem]">
                    <input
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoView",
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
