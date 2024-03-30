<template>
  <div class="NotesPageRoute">
    <NotesPage />
  </div>
</template>

<script>
import NotesPage from "../components/NotesPage.vue";
export default {
  name: "NotesPageRoute",
  components: { NotesPage },
};
</script>

<style lang="scss" scoped>
.NotesPageRoute {
  padding: 1rem;
  // background: chocolate;
}
</style>
