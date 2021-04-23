<template>
  <div class="container">
    <div class="row justify-content-center">
      <!-- <h1>ini masuk list meme user</h1> -->
      <div class="card mb-3 mt-3 mr-3 ml-3" style="width: 18rem;" v-for="list in memes" :key="list.id">
        <img :src="list.image_url" style="height: 300px" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{list.title}}</h5>
          <h5 class="card-subtitle mb-2">
            <small><i>Posted on {{changeToString(list.createdAt)}}</i></small>
          </h5>
          <button class="btn btn-danger" @click.prevent="deleteMeme(list.id)">Delete</button>
          <button class="btn btn-info" @click.prevent="getMemeById(list.id)">Edit</button>
          <p class="card-text">
            <small class="text-muted">like : 10</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemeUser",
  methods: {
    getUserProfile() {
      this.$store.dispatch("getUserProfile");
    },
    deleteMeme(id) {
      this.$store.dispatch("deleteMeme", {
        id: id,
        router: this.$router,
      });
    },
    getMemeById(id) {
      this.$store.dispatch("getMemeById", {
        id: id,
        router: this.$router,
      });
    },
    changeToString(date) {
      const dataDate = new Date(date)
      return dataDate.toDateString()
    }
  },
  mounted() {
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