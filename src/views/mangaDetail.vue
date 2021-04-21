<template>
  <div class="row">
    <div class="card" style="width: 18rem; margin-left: 10px; col">
      <img :src="mangaDetail.MangaCover" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Manga Descriptions<hr></h5>
        <p class="card-text" style=" text-align: justify;">
          {{ mangaDetail.Summary }}
        </p>
      
      </div>
    </div>
    <div id="mangaChapter" class="col">
        <table class="table table-light" >
          <thead>
            <tr>
              <th scope="col">Chapter Number</th>
            </tr> 
          </thead>
          <tbody>
            <tr v-for="ch in mangaDetail.Chapter" :key="ch.ChapterName">
              
              <td> <a href="#" @click.prevent="readManga(ch.ChapterLink)">{{ ch.ChapterName }}</a> </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchMangaDetail");
  },
  computed: {
    mangaDetail() {
      return this.$store.state.mangaDetail;
    },
  },
    methods: {
      readManga(chapterLink){
        
         this.$router.push('/read')
        this.$store.commit("readManga", chapterLink)
    
      }
    }
};
</script>

<style scoped>
th {
  font-family: poppins;
  color: black 
}
td {
  font-family: poppins;
  color: white 
}

</style>
