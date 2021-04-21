<template>
  <div>

    <div v-for="(Image, i) in page" :key="i">
      <img :src="Image.Image" alt="" class="card-img-top" style="width: 50%;" />
    </div>
    
  </div>
</template>

<script>
export default {
  name: "read",
  data(){
    return {
      ChapterLink: ""
    }
  },
  created() {
    this.$store.dispatch("readManga");
  },
  computed: {
    page() {
      return this.$store.state.page;
    },
    mangaDetail(){
      return this.$store.state.mangaDetail;
    }
  },
  
};
</script>

<style></style>
