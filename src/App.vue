<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/allsurah">Surah</router-link> |
      <router-link to="/surah">One Surah</router-link> |
      <router-link to="/hadist">Hadist</router-link> |
      <router-link to="/favoritesurah">Favorite Surah</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
body {
  font-family: "Nunito", sans-serif;
}

.primer-color {
  color: #3e9ca5;
}

.primer-color:hover {
  background-color: rgba(84, 189, 199, 0.164);
  color: #3e9ca5;
  border-radius: 5px;
}

.border-radius {
  border-radius: 10px;
}

.garis {
  border: 2px solid #ffffff;
  border-radius: 3px;
}

.garis-gelap {
  border: 2px solid #3e9ca5;
  border-radius: 3px;
}

q {
  quotes:"\201C" "\201D";
 font-family:Droid Arabic Naskh, san-serif;
 font-size:26px;
}

.btn-primer {
  background-color: #3e9ca5;
  color: #fff;
  border: 1px solid #3e9ca5;
}

.btn-primer:hover {
  background-color: #317f86;
  color: #fff;
  border: 1px solid #317f86;
}

.btn-outline-primer {
  color: #3e9ca5;
  background-color: none;
  border: 1px solid #3e9ca5;
}

.btn-outline-primer:hover {
  background-color: #3e9ca5;
  color: #fff;
  border: 1px solid #3e9ca5;
}

.title-slide h1 {
  font-weight: bold;
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
