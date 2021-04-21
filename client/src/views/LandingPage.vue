<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row" style="height: 10vh">
        <div class="col-6 d-flex justify-content-start align-items-center">
          <h2 class="text-white font-monospace">@koecheng</h2>
        </div>
        <div class="col-6 d-flex justify-content-end align-items-center"></div>
      </div>
      <div
        class="d-flex justify-content-center align-items-center"
        style="height: 90vh"
      >
        <div>
          <div class="text-center mb-5">
            <h1 class="text-white" style="font-size: 64px">
              "Cat for all, All for Cat"
            </h1>
            <button
              @click="SignInPage"
              class="btn btn-outline-white text-white fs-6 font-monospace py-2 px-4 m-2"
              style="border-radius: 30px; background-color: #d00000;"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {
    SignInPage () {
      this.$router.push({ name: 'SignIn' }).catch(() => {})
    }
  }
}
</script>
<style>
.home {
  background-image: url("../assets/landing-page.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>
