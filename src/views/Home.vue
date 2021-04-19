<template>
  <div class="home">
    <nav class="bg-dark navbar-dark">
      <div class="container"></div>
    </nav>
    <section id="header" class="jumbotron text-center">
      <h1 class="display-3">MangAPP</h1>
      <p class="lead">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <a href="" class="btn btn-primary">EN</a>
      <a href="" class="btn btn-secondary">ID</a>
    </section>

    <section id="gallery">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 mb-2" v-for="(manga, i) in mangaList" :key="i">
            <div class="card">
              <img :src="manga.MangaCover" alt="" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{ manga.MangaTitle }}</h5>
                <a
                  href=""
                  class="btn btn-outline-success btn-sm"
                  @click.prevent="mangaDetail(manga.MangaLink)"
                  >Read More</a
                >
                <a href="" class="btn btn-outline-danger btn-sm"
                  ><i class="far fa-heart"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#header {
  background: url(https://images.unsplash.com/photo-1415795854641-f4a487a0fdc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)
    center center / cover no-repeat;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  created() {
    this.$store.dispatch("fetchManga");
  },
  computed: {
    mangaList() {
      return this.$store.state.mangaList;
    },
  },
  methods: {
    mangaDetail(mangaId) {
      console.log(mangaId)
      this.$store.commit("getMangaId", mangaId)
      this.$router.push("/mangadetail");
      
    },
  },
};
</script>
