<template>
  <b-sidebar id="sidebar-1" title="Sidebar" no-header shadow backdrop backdrop-variant="dark">
    <div class="px-3 py-2">
      <div class="mt-3">
        <h4 id="sidebar-no-header-title">Manage</h4>
      </div>
      <div class="mt-3">
        <router-link class="nav-child" to="/">Home</router-link>
      </div>
      <div class="mt-3">
        <router-link class="nav-child" to="/update">New Airing Anime</router-link>
      </div>
      <div class="mt-3">
        <router-link class="nav-child" to="/complete">Your Complete List</router-link>
      </div>
      <div class="mt-3">
        <router-link class="nav-child" to="/addAnime">Add New Anime</router-link>
      </div>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
a {
  color: #2c3e50;
  text-decoration: none;
}
</style>
