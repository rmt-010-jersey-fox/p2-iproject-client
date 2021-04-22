<template>
<!-- <div> -->
  <!-- <Navbar /> -->

  <div class="container">
      <div class="row">
          <ProfileDetail />
      </div>
      <div class="row">
          <MemeUser />
      </div>
  </div>
<!-- </div> -->
</template>

<script>
// import Navbar from '@/components/Navbar.vue'
import ProfileDetail from '@/components/ProfileDetail.vue'
import MemeUser from '@/components/MemeUser.vue'
export default {
    name: 'Profile',
    component: {
        // Navbar,
        ProfileDetail,
        MemeUser
    }
}
</script>

<style>

</style>