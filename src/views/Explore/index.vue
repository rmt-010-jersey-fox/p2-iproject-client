<template>
  <div>
    <h1 class="white--text text-center my-3">
      Temukan Inspirasi Untuk Karyamu
    </h1>
    <v-row justify="center">
      <v-col sm="3"> </v-col>
    </v-row>
    <v-container>
      <v-row align="center" justify="space-around">
        <v-card
          v-for="(photo, i) in unsplashPhotos"
          :key="i"
          color="white"
          rounded="xl"
          class="my-5"
        >
          <v-img width="300" height="250" :src="photo.urls.regular"></v-img>
          <v-card-subtitle
            ><v-icon left>mdi-instagram</v-icon
            >{{ photo.user.instagram_username }}</v-card-subtitle
          >
        </v-card>
      </v-row>
    </v-container>
    <v-container fluid class="white">
      <h3 class="primary--text text-center my-6">
        Credit: Photo - Photo diatas diambil dari website unsplash.com
      </h3></v-container
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ExplorePage",
  computed: {
    ...mapState(["unsplashPhotos"]),
  },
  created() {
    this.$store.dispatch("fetchUnsplashPhotos");
  },
};
</script>

<style>
#scrollable {
  margin-top: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 75%;
}
</style>
