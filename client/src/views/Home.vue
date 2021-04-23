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
          <div class="container border border-primary rounded ">
            <form>
            <div class="form-group">
              <input 
              v-model="status"
              type="email" class="form-control" style="height:100px" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Post it!!">
            </div>
            <button 
            @click.prevent="addTimeline()"
            type="submit" class="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
        <div class="col-6 border border-primary" >
            <h4>
            <b>Anonymous Timeline</b>
            <button
            @click.prevent="listBookmarks"
            type="button" class="btn btn-primary float-right btn-sm text-light">Bookmarks</button>
            </h4>
            <ul class="list-unstyled" v-for="timeline in timelines.status" :key="timeline.id">
            <li class="media d-flex align-items-center bg-white rounded p-2 shadow mt-3">
                <div class="media-body p-1">
                <div class="text-left">
                  <!-- {{timeline}} -->
                    <h5 class="mt-0 mb-0 text-pink">{{timeline.status}}</h5>
                </div>
                <div class="text-left mt-2">
                    <span class="text-muted">{{timeline.UserId}}</span>
                    <button
                    @click.prevent="addFavorites(timeline.id)"
                    class="mt-2 btn btn btn-outline-success float-right p-2 rounded" style="font-size:10px">Add To Favorite</button>
                    <button
                    @click.prevent="deleteTimeline(timeline.id)"
                    class="mt-2 btn btn btn-outline-success float-right p-2 rounded" style="font-size:10px">Delete</button>
                    <button
                    @click.prevent="patchLike(likes + 1)"
                    class="mt-2 btn btn btn-outline-success float-right p-2 rounded" style="font-size:10px">Likes</button>
                </div>
                <div class="text-left">
                  <span class="text">Likes: {{timeline.likes}}</span>
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
  name: 'Home',
  data() {
    return {
      status: '',
      likes: 0
    }
  },
  computed: {
    timelines () {
      return this.$store.state.timelines
    }
  },
  created () {
    this.$store.dispatch('fetchTimeline')
  },
  methods: {
    addTimeline() {
      let payload = this.status
      this.$store.dispatch('addTimeline', payload)
    },
    deleteTimeline (id) {
      console.log(id)
      this.$store.dispatch('deleteTimeline', id)
      this.$store.dispatch('fetchTimeline')
    },
    addFavorites (TimelineId) {
      console.log(TimelineId, '<<< plantId')
      this.$store.dispatch('addFavorite', { TimelineId: TimelineId })
    },
    listBookmarks () {
      this.$router.push({ name: 'Favorites' })
    },
    feedsPage () {
      this.$router.push({ name: 'Feeds' })
    },
    logout () {
      this.$store.dispatch('logout')
    },
    patchLike() {
      const payload = this.likes
      console.log(payload);
    }
  }
}
</script>
<style scoped>
</style>
