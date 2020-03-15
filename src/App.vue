<template>
  <article id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </article>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  background-color: #a7b7c7;
  position: sticky;
  top: 0;
}

#nav a {
  font-weight: bold;
  font-size: 22px;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 5px;
}

#nav a.router-link-exact-active {
  color: #137448;
}

/* Hier is style voor about pagina */
.about{
    background-color: #d3b4f5;
}





</style>
