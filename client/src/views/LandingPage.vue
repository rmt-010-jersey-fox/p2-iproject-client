<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row g-0" style="height: 10vh">
        <div class="col-6 d-flex justify-content-start align-items-center">
          <img
            src="https://cdn.discordapp.com/attachments/826319487266717706/834614133612871691/cat.png"
            alt="mb-1"
            style="width:7vh"
          />
          <h2 class="text-white p-0 m-0 font-monospace">koecheng</h2>
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
