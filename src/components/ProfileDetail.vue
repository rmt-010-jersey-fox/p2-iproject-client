<template>
  <div class="row">
    <!-- <h1>ini masuk profile detail user</h1> -->
    <div class="col-4">
      <h4 class="display-4">Name</h4>
      <h4 class="display-4">Email</h4>
    </div>
    <div class="col-8">
      <h4 class="display-4">: {{memes[0].User.name}}</h4>
      <h4 class="display-4">: {{memes[0].User.email}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDetail",
  methods: {
    getUserProfile() {
      this.$store.dispatch("getUserProfile");
    },
  },
  created() {
    this.getUserProfile();
  },
  computed: {
    memes() {
      return this.$store.state.usermeme;
    },
  },
};
</script>

<style>
</style>