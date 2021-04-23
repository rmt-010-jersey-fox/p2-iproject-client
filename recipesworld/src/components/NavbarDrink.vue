<template>
  <!-- Drink Navbar -->
  <nav class="container-fluid navbar navbar-expand-lg navbar-dark" style="background-color:#540b0e">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#">Home</router-link>
      <router-link to="/drinks" class="navbar-brand" href="#">Drinks</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

        <!-- Categories -->
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav"
        v-for="(category, i) in drinksCategories"
        :key="i"
        :category="category"
        >
          <li class="nav-item">
            <a @click.prevent="goToDrinkCategoryPage(category.strCategory)" class="nav-link active" aria-current="page" href="#">{{category.strCategory}}</a>
          </li>
        </ul>
        <!-- <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/login" class="nav-link active" aria-current="page" href="#" v-if="!isLogin">Login</router-link>
              <a @click="logout" class="nav-link active" aria-current="page" href="#" v-else-if="isLogin">Logout</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarDrink',
  props: ['drinksCategories'],
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    goToDrinkCategoryPage (category) {
      console.log(category + 'di methods drink navbar')
      this.$store.dispatch('fetchDrinksByCategory', category)
      this.$store.commit('currentDrinkCategory', category)
      this.$router.push({ name: 'DrinksCategory' })
    },
    logout () {

    }
  }
}
</script>

<style>

</style>
