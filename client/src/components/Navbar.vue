<template>
   <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" role="navigation" aria-label="main navigation">
            <div class="container d-flex justify-content-between">
                <router-link
                    class="navbar-brand d-flex align-items-center"
                    to="/">
                <a class="navbar-brand" href="#">Anonymous App</a>
                </router-link>
            </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                        <router-link to="/favorites" class="nav-link" ><i class="fa fa-shopping-cart mr-2"  aria-hidden="true" ></i>Bookmarks
                  </router-link>
                </li>
                <li class="nav-item">
                        <router-link to="/feeds" class="nav-link" ><i class="fa fa-shopping-cart mr-2"  aria-hidden="true" ></i>Feeds
                  </router-link>
                </li>
                <li class="nav-item">
                        <router-link to="/sentim" class="nav-link" ><i class="fa fa-shopping-cart mr-2"  aria-hidden="true" ></i>Sentim
                  </router-link>
                </li>
                <li>
                  <a @click.prevent="logout" class="btn btn-danger" href="#">Logout</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    feedsPage () {
      this.$router.push('Feeds')
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>
