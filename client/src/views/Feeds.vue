<template>
  <section id="home-page" class="container">
    <button
        @click.prevent="logout"
        class="btn btn-danger" style="position: absolute; top: 10px; right: 10px;">logout</button>
        <button
        @click.prevent="feedsPage"
        class="btn btn-primary" style="position: absolute; top: 10px; right: 90px;">Feeds</button>
    <div class="row justify-content-center mt-5 pt-5">
      <div class="col-4 mt-5">
        <img src="../assets/feeds.svg" alt="music" class="img-fluid mt-5">
      </div>
      <div class="col-6">
        <h4>
          <b>Feeds</b>
          <button
          @click.prevent="home"
          type="button" class="btn btn-primary float-right btn-sm text-light">Back Home</button>
        </h4>
        <ul class="list-unstyled" v-for="feed in feeds" :key="feed.id">
          <li class="media d-flex align-items-center bg-white rounded p-2 shadow mt-3">
            <div class="media-body p-1">
              <div class="text-left">
                  <h5 class="mt-0 mb-0 text-pink">{{feed.title}}</h5>
              </div>
              <div class="text-left mt-2">
                <span class="text-muted">{{feed.section}}</span>
              </div>
              <div class="text-left mt-2">
                  <a :href="feed.url">{{feed.url}}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Feeds',
  created () {
    this.$store.dispatch('fetchFeeds')
  },
  computed: {
    feeds () {
      return this.$store.state.feeds
    }
  },
  methods: {
    feedsPage () {
      this.$router.push({ name: 'Feeds' })
    },
    logout () {
      this.$store.dispatch('logout')
    },
    home () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>

</style>
