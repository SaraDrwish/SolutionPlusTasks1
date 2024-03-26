<template>
  <div id="app">
    <nav>
      |
      <router-link to="/"> | Home | </router-link>
      <router-link to="/note"> | Note | </router-link>
      |
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(102, 75, 86);
}

nav {
  padding: 30px;
  font-size: 22px;

  a {
    font-weight: bold;
    color: rgb(156, 125, 137);
    text-decoration: none;

    &.router-link-exact-active {
      color: rgb(70, 35, 48);
    }
  }
}
</style>
