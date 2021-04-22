<template>
  <div class="notFound">
    <div style="height: 1rem"/>
    <div class="container  is-flex is-align-items-center is-justify-content-center" style="min-height: 100vh">
      <div class="column">
        <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_fi8yfbmc.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop autoplay></lottie-player>
        <h2 class="subtitle is-2">Sorry... Page not found</h2>
        <p class="subtitle is-5">You can back to home by click <router-link class="subtitle is-5 has-text-danger" to="/">here</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style>

</style>
