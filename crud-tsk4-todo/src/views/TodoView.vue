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
                <input
                  type="text"
                  class="w-[80%] rounded-[1rem] p-2 outline-none"
                />
                <input
                  class="cursor-pointer text-red-400 border-2 border-red-400 p-2"
                  type="button"
                  value="Add"
                />
              </div>
            </li>
          </ul>
        </div>
        <div class="">
          <h3></h3>
          <div class="bg-green-100 p-1 w-[100%] mx-auto rounded-[1rem]">
            <ul>
              <li>
                <div
                  class="flex gap-4 w-[80%] bg-slate-300 p-2 my-4 mx-auto justify-evenly rounded-[1rem]"
                >
                  <input
                    type="checkbox"
                    class="p-2 m-1 outline-none text-orange-400 bg-orange-200"
                  />
                  <div
                    class="flex gap-1 w-[80%] bg-gray-600 my-1 mx-auto text-orange-600 p-4 rounded-[1rem]"
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
.todo {
  text-transform: capitalize;
  width: 90%;
  background: rgb(167, 178, 181);
  padding: 1rem;
  margin: auto;
  border-radius: 2rem;
}
</style>
