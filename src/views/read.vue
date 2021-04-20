<template>
  <div>
      <!-- <h1>{{page}}</h1> -->
    <div v-for="(Image,i) in page" :key="i">
      <img :src="Image.Image" alt="" class="card-img-top" style="width: 50%"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "read",
  created() {
    this.$store.dispatch("readManga");
  },
  computed: {
    page() {
      return this.$store.state.page;
    },
  },
};
</script>

<style></style>
