<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/todo">Todo</router-link>
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
  color: #796460;
}

nav {
  padding: 1rem;
  font-size: 1.5rem;
  a {
    font-weight: bold;
    color: #87625f;
    text-decoration: none;

    &.router-link-exact-active {
      color: #588798;
    }
  }
}
</style>
