<template>
  <div class="container">
    <h4 class="display-4 text-center">Your Profile</h4>
    <hr />
    <ProfileDetail />
    <hr />
    <h4 class="display-4 text-center">Your Collections</h4>
    <hr />
    <MemeUser />
  </div>
</template>

<script>
import ProfileDetail from "@/components/ProfileDetail.vue";
import MemeUser from "@/components/MemeUser.vue";
export default {
  name: "Profile",
  components: {
    ProfileDetail,
    MemeUser,
  },
};
</script>

<style>
</style>