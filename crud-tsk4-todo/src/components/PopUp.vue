<template>
  <div class="PopUp">
    <h3><span>title is :</span> {{ this.$store.state.title }}</h3>
    <p>description is : {{ this.$store.state.desc }}</p>
    <p>completed : {{ this.$store.state.completed }}</p>
    <button>update</button>
  </div>
</template>

<script>
export default {
  name: "PopUp",
};
</script>

<style lang="scss" scoped>
.PopUp {
  width: 60%;
  height: 40%;
  padding: 1rem;
  background-color: rgb(147, 195, 159);
  color: rgb(108, 108, 131);
  border-radius: 2rem;
  position: absolute;
  top: 38%;
  left: 20%;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
}
</style>
