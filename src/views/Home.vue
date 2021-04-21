<template>
  <div class="home">
    <nav class="bg-dark navbar-dark">
      <div class="container"></div>
    </nav>
    <section id="header" class="jumbotron text-center">
      <h1 class="display-3" style="font-family:'Bungee Inline', cursive; font-size: 150px; margin-bottom: 30px">MangAPP</h1>
      <p class="lead" style="font-family:'Bungee Inline', cursive;">
       here are the most popular manga for you!
      </p>
      <!-- <a href="" class="btn btn-primary">EN</a>
      <a href="" class="btn btn-secondary">ID</a> -->
    </section>

    <section id="gallery" style="margin-top: 20px">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 mb-2" v-for="(manga, i) in mangaList" :key="i">
            <div class="card">
              <img :src="manga.MangaCover" alt="" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title" style="font-family: poppins">{{ manga.MangaTitle }}</h5>
                <a
                  href=""
                  class="btn btn-outline-success btn-sm"
                  @click.prevent="mangaDetail(manga.MangaLink)"
                  >Read More</a
                >
                <a href="" class="btn btn-outline-danger btn-sm"
                   @click.prevent="addBookmark(manga.MangaTitle, manga.MangaLink)"><i class="far fa-heart"></i
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
/* #header {
  background: url(http://amli-lptk.org/amli/wp-content/uploads/2017/09/KO-background-header.jpg)
    center center / cover no-repeat;
} */
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
    addBookmark(mangaTitle, mangaLink){
      let payload = {
        mangaTitle,
        mangaLink
      }
      this.$store.dispatch("addBookmark", payload)
    }
  },
};
</script>
