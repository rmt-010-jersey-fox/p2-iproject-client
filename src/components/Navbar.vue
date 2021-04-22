<template>
    <nav class="navbar navbar-light bg-warning">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">FindBuddy</span>
        <!-- <div class="row"> -->
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
              <router-link to="/login">Login  |</router-link>
              <router-link to="/about">  Logout  |</router-link>
              <router-link to="/homepage">  Home  |</router-link>
              <router-link to="/schedule">  My Schedule</router-link>
          </div>
          <div class="col-sm-4"></div>
        </div>
      <!-- </div> -->
    </nav>
</template>

<script>
export default {
    name : "Navbar"
}
</script>

<style>

</style>