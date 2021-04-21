<template>
  <!-- Drink Navbar -->
  <nav class="container navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#"><b>Home</b></router-link>
      <router-link to="/drinks" class="navbar-brand" href="#">Drinks</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

        <!-- Categories -->
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;"
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
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarDrink',
  props: ['drinksCategories'],
  methods: {
    goToDrinkCategoryPage (category) {
      console.log(category + 'di methods drink navbar')
      this.$store.dispatch('fetchDrinksByCategory', category)
      this.$store.commit('currentDrinkCategory', category)
      this.$router.push({ name: 'DrinksCategory' })
    }
  }
}
</script>

<style>

</style>
