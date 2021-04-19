<template>
<header>
  <div>
    <h1>Flashero</h1>
    <!-- img icon -->
  </div>

  <nav>
    <ul>
      <!-- Hide Home, username, logout kalau selain login/register -->

      <router-link :to="{ name: 'Home'}"><li>About</li></router-link>
      <router-link :to="{ name: 'Home'}"><li>Home</li></router-link>
      <router-link :to="{ name: 'User', params: { id: 1 }}"><li>lilynano</li></router-link>
      <router-link :to="{ name: 'Login'}"><li>Logout</li></router-link>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
