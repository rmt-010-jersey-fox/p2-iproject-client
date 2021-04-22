<template>
  <div class="container">
    <div class="col-4 card mt-5 text-center">
      <img src="https://ui-avatars.com/api/?size=128" alt="John" style="width:100%">
      <h1>{{ currentUser.username }}</h1>
      <p class="title">{{ currentUser.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser () {
      return this.$store.state.currentUser
    }
  }
}
</script>

<style scoped>
  .card {
    margin: auto  ;
  }
</style>
