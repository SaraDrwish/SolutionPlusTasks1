<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
  color: #503c2c;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #50422c;

    &.router-link-exact-active {
      color: #9f7fb1;
    }
  }
}
</style>
