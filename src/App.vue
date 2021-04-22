<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
html,body {
background-image: url(https://media.istockphoto.com/vectors/pattern-with-lines-background-seamless-pattern-vector-id1138949343?b=1&k=6&m=1138949343&s=612x612&w=0&h=1BVboj0gz70Yvj6i77ngiM6jughWlabbwoPJ6JkmLrs=);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
