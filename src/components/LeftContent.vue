<template>
  <div class="container">
    <div class="row">
      <div
        class="card mb-3 mt-3 mr-3 ml-3"
        style="width: 700px; height: 700px"
        v-for="list in memes"
        :key="list.id"
      >
        <div class="card-header">
          <h4>{{list.User.name}}</h4>
        </div>
        <img :src="list.image_url" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{list.title}}</h5>
          <h5 class="card-subtitle mb-2">
            <small><i>Posted on {{changeToString(list.createdAt)}}</i></small>
          </h5>
          <button class="btn btn-outline-success" @click.prevent="like(list.id)">
             Love it
          </button>
          <!-- <button class="btn btn-success" v-if="like">
             Love it
          </button> -->
          <button class="btn btn-outline-danger" @click.prevent="dislike(list.id)">
             Hate it
          </button>
          <!-- <button class="btn btn-danger">
             Hate it
          </button> -->
          <button class="btn btn-outline-info" @click.prevent="report(list.id)">
             Report
          </button>
          <!-- <button class="btn btn-info">
             Report
          </button> -->
          <p class="card-text">
            <small class="text-muted"
              >{{list.likes}} People loved this</small
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getMeme() {
      this.$store.dispatch("getMemes");
    },
    getMemeById(id) {
      this.$store.dispatch("getMemeById", {
        id: id,
        router: this.$router,
      });
    },
    changeToString(date) {
      const dataDate = new Date(date);
      return dataDate.toDateString();
    },
    like(id) {
      this.$store.dispatch("like", {
        id: id,
        router: this.$router,
      });
    },
    dislike(id) {
      this.$store.dispatch("dislike", {
        id: id,
        router: this.$router,
      });
    },
    report(id) {
      this.$store.dispatch("report", {
        id: id,
        router: this.$router,
      });
    },
  },
  mounted() {
    this.getMeme();
  },
  computed: {
    memes() {
      return this.$store.state.memes;
    },
  },
};
</script>

<style>
</style>