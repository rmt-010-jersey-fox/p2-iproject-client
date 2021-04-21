<template>
        <!-- Food Navbar -->
    <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" href="#">Home</router-link>
        <router-link to="/meals" class="navbar-brand" href="#">Meals</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Categories -->
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;"
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
      </div>
    </nav>
</template>

<script>
export default {
  name: 'NavbarMeal',
  props: ['mealsCategories'],
  methods: {
    goToMealCategoryPage (category) {
      console.log(category + ' di methods navbar')
      this.$store.dispatch('fetchMealsByCategory', category)
      this.$store.commit('currentMealCategory', category)
      this.$router.push({ name: 'MealsCategory' })
    }
  }
}
</script>

<style>

</style>
