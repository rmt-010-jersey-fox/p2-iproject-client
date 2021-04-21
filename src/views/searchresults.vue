<template>
  <div>
    <nav class="bg-dark navbar-dark">
      <div class="container"></div>
    </nav>
    <section id="header" class="jumbotron text-center">
      <h1
        class="display-3"
        style="font-family:'Bungee Inline', cursive; font-size: 150px; margin-bottom: 30px"
      >
        search results
      </h1>
    </section>
    <section id="gallery" style="margin-top: 20px">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-2 mb-2"
            v-for="(manga, i) in searchResult"
            :key="i"
          >
            <div class="card">
              <img :src="manga.MangaCover" alt="" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title" style="font-family: poppins">
                  {{ manga.MangaTitle }}
                </h5>
                <a
                  href=""
                  class="btn btn-outline-success btn-sm"
                  @click.prevent="mangaDetail(manga.MangaLink)"
                  >Read More</a
                >
                <a
                  href=""
                  class="btn btn-outline-danger btn-sm"
                  @click.prevent="
                    addBookmark(manga.MangaTitle, manga.MangaLink)
                  "
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

<script>
export default {
  name: "searchresult",

  computed: {
    searchResult() {
      return this.$store.state.searchResult;
    },
  },
  methods: {
    mangaDetail(mangaId) {
      this.$store.commit("getMangaId", mangaId);
      this.$router.push("/mangadetail");
    },
    addBookmark(mangaTitle, mangaLink) {
      let payload = {
        mangaTitle,
        mangaLink,
      };
      this.$store.dispatch("addBookmark", payload);
    },
  },
};
</script>

<style></style>
