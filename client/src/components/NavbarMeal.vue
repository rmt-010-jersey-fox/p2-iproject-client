<template>
        <!-- Food Navbar -->
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" href="#">Home</router-link>
        <router-link to="/Meals" class="navbar-brand" href="#">Meals</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Categories -->
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <router-link to="/mealsCategory" class="nav-link active" aria-current="page" href="#">Chicken</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/mealsCategory"  class="nav-link active" aria-current="page" href="#">Pork</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/mealsCategory" class="nav-link active" aria-current="page" href="#">Beef</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/mealsCategory" class="nav-link active" aria-current="page" href="#">Veggies</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'NavbarMeal'
}
</script>

<style>

</style>
