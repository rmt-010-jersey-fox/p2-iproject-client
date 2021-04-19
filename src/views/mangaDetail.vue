<template>
  <div>
    <div class="card" style="width: 18rem; display: flex">
      <img :src="mangaDetail.MangaCover" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ mangaDetail.MangaTitle }}</h5>
        <p class="card-text">
          {{ mangaDetail.Summary }}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
      <!-- <div id="mangaChapter">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Chapter Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{{manga.Chapter[0].ChapterName}}</td>
            </tr>
          </tbody>
        </table>
      </div> -->
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
  },
};
</script>

<style></style>
