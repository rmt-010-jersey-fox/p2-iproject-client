<template>
        <!-- Food Navbar -->
    <nav class="container-fluid navbar navbar-expand-lg navbar-dark" style="background-color:#540b0e" >
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" href="#">Home</router-link>
        <router-link to="/meals" class="navbar-brand" href="#">Meals</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Categories -->
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav"
          v-for="(category, i) in mealsCategories"
          :key="i"
          :category="category"
          >
            <li class="nav-item">
              <a @click.prevent="goToMealCategoryPage(category.strCategory)" class="nav-link active" aria-current="page" href="#">{{category.strCategory}}</a>
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
  name: 'NavbarMeal',
  props: ['mealsCategories'],
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    goToMealCategoryPage (category) {
      console.log(category + ' di methods navbar')
      this.$store.dispatch('fetchMealsByCategory', category)
      this.$store.commit('currentMealCategory', category)
      this.$router.push({ name: 'MealsCategory' })
    },
    logout () {

    }
  }
}
</script>

<style>

</style>
