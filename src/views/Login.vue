<template>
  <div>
      <Navbar />
      <formLogin />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import formLogin from '@/components/Login.vue'
export default {
    components: {
        Navbar,
        formLogin
    }
}
</script>

<style>

</style>