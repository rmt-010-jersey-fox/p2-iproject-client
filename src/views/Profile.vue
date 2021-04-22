<template>
<div>
    <Navbar />
  <div class="container">
    <h4 class="display-4 text-center">Your Profile</h4>
    <hr />
    <ProfileDetail />
    <hr />
    <h4 class="display-4 text-center">Your Collections</h4>
    <hr />
    <MemeUser />
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ProfileDetail from "@/components/ProfileDetail.vue";
import MemeUser from "@/components/MemeUser.vue";
export default {
  name: "Profile",
  components: {
    Navbar,
    ProfileDetail,
    MemeUser,
  },
};
</script>

<style>
</style>