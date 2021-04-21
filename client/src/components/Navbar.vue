<template>
  <nav class="navbar navbar-dark bg-dark" style="height: 6rem;">
    <div class="container-fluid">
      <div class="col-4">
        <a class="navbar-brand">gammingDB</a>
      </div>
      <div class="col-4">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </div>
      <div class="col-4">
        <div class="container">
          <div class="item">
            <button class="btn btn-outline-light item">SignIn</button>
          </div>
          <!-- User Icon -->
          <div class="item pt-1 dropstart">
            <i class="fas fa-user-circle" data-bs-toggle="dropdown"></i>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <div>
                  <a class="dropdown-item" href="#"><i class="fas fa-user-circle icon"></i> Profile</a>
                </div>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="fas fa-heart icon"></i> Wishlist</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="fas fa-sign-in-alt icon"></i>SignOut</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  beforeCreate () {
    if (localStorage.access_token) this.$store.commit('setLogin', true)
    else this.$store.commit('setLogin', false)
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>
