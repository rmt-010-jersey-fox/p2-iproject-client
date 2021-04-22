<template>
  <nav>
      <button
        @click.prevent="logout"
        class="btn btn-danger" style="position: absolute; top: 10px; right: 10px;">logout</button>
        <button
        @click.prevent="feedsPage"
        class="btn btn-primary" style="position: absolute; top: 10px; right: 90px;">Feeds</button>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    feedsPage () {
      this.$router.push('Feeds')
    }
  }
}
</script>

<style>

</style>
