<template>
  <div class="home">
    <img
      class="mx-auto my-[4rem] text-center p-2 w-[8%] h-[8%]"
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
