<template>
  <div>
      <Navbar />

      <Favorite />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Favorite from '@/components/Favorite.vue'
export default {
    components: {
        Navbar,
        Favorite
    }
}
</script>

<style>

</style>