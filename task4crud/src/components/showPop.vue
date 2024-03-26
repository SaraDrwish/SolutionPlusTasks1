<template>
  <div class="showPop">
    <h3><span>title is :</span> {{ this.$store.state.title }}</h3>
    <p>description is : {{ this.$store.state.desc }}</p>
    <p>completed : {{ this.$store.state.completed }}</p>
  </div>
</template>

<script>
export default {
  name: "showPop",
};
</script>

<style lang="scss" scoped>
.showPop {
  width: 95%;
  height: 60%;
  background: rgba(255, 145, 35, 0.978);
  padding: 1rem;
  border-radius: 2rem;
  color: rgb(64, 126, 126);
  position: absolute;
}
</style>
