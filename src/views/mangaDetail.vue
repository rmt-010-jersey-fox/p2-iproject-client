<template>
  <div class="row">
    <div class="card" style="width: 18rem; margin-left: 10px; col">
      <img :src="mangaDetail.MangaCover" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ mangaDetail.MangaTitle }}</h5>
        <p class="card-text">
          {{ mangaDetail.Summary }}
        </p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
      </div>
    </div>
    <div id="mangaChapter" class="col">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Chapter Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ch in mangaDetail.Chapter" :key="ch.ChapterName">
              
              <td @click.prevent="readManga(ch.ChapterLink)">{{ ch.ChapterName }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("m,asuk");
    this.$store.dispatch("fetchMangaDetail");
  },
  computed: {
    mangaDetail() {
      return this.$store.state.mangaDetail;
    },
    methods: {
      readManga(chapterLink){
        this.$store.commit("readManga", chapterLink)
        this.$router.push("/read")
      }
    }
  },
};
</script>

<style></style>
