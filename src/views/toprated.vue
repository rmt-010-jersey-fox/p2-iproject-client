<template>
  <div>
    <nav class="bg-dark navbar-dark">
      <div class="container"></div>
    </nav>
    <section id="header" class="jumbotron text-center">
      <h1
        class="display-3"
        style="font-family:'Bungee Inline', cursive; font-size: 80px; margin-bottom: 30px"
      >
        here are the list of current highest rated manga!
      </h1>
    </section>
    <section id="gallery" style="margin-top: 20px">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-2 mb-2"
            v-for="(manga, i) in topRated"
            :key="i"
          >
            <div class="card">
              <img :src="manga.image_url" alt="" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title" style="font-family: poppins;">
                  {{ manga.title }}
                </h5>
                 <h5 class="card-title" style="font-family: poppins; font-size: 15px">
                  score: {{ manga.score }}
                </h5>
                <a
                 :href="manga.url"
                  class="btn btn-outline-success btn-sm"
                  >Read More</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "toprated",
  created() {
    this.$store.dispatch("topRated");
  },
  computed: {
    topRated() {
      return this.$store.state.topRated;
    },
  },
};
</script>

<style></style>
