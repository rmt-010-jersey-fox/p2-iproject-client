<template>
      <!-- Navbar -->
    <header class="sticky-top">
      <nav
        class="navbar navbar-expand-lg navbar-light shadow"
        style="background-color: #ebf9f8"
      >
        <div class="container">
          <a
            class="navbar-brand"
            href="#"
            style="font-weight: bold; color: #3e9ca5"
            >Qurantara</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle primer-color"
                  style="color: #3e9ca5"
                  href=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Al-Quran
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item primer-color" href="#quran"
                      >Baca Al-Quran</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link primer-color" style="color: #3e9ca5" href="#hadist"
                  >Hadist</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link primer-color" style="color: #3e9ca5" href="#jadwal-solat"
                  >Jadwal Solat</a
                >
              </li>
            </ul>
            <div>
              <button class="btn btn-outline-primer" @click.prevent="logout">Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    toCartItemPage () {
      this.$router.push('/cart').catch(() => {})
    }
  }
}
</script>

<style>

</style>
