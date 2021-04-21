<template>
  <div class="home">
    <!-- Banner -->
    <div class="text-center container mt-5" style="background-image: url(http://www.gofishguard.co.uk/wp-content/uploads/2017/03/food-and-drink.png); width: 120vh; height: 60vh; margin-bottom: 20vh;">
    </div>
      <!-- Home -->
      <h1 style="color:cornsilk ;" class="text-center">Recipes world!</h1>
      <div class="container text-center justify-content-md-center" style="padding: 18vh;">
        <div class="row">
          <div class="col-md-6">
            <router-link to="/meals">
              <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" width="500" height="630">
            </router-link>
          </div>

          <div class="col-md-6">
            <router-link to="/drinks">
              <img src="https://images.303magazine.com/uploads/2020/03/00000PORTRAIT_00000_BURST20200316143240908-1-1.jpg" width="500" height="630">
            </router-link>
          </div>
        </div>
      </div>
      <h3 @click="toRegister" style="color:red ;" class="text-center mb-5"> Register to get a recipe sent to your email everyday!!</h3>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  methods: {
    toRegister () {
      this.$router.push({ name: 'Register' })
    }
  }
}
</script>
