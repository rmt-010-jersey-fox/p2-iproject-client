<template>
  <section id="home-page" class="container">
    <Navbar></Navbar>
    <div class="row justify-content-center mt-5 pt-5">
      <div class="col-4 mt-5">
        <img src="../assets/feeds.svg" alt="music" class="img-fluid mt-5">
      </div>
      <div class="col-6">
        <h4>
          <b>Feeds</b>
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
import Navbar from '../components/Navbar'
export default {
  name: 'Feeds',
  components: {
    Navbar
  },
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
