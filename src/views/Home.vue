<template>
  <div class="hero is-fullheight">
    <div class="hero is-fullheight is-light p-5">
      <div class="tile is-ancestor">
        <div class="tile is-full is-vertical is-parent">
          <div class="container mx-auto">
            <vue-weather
              api-key="b714bb0f85eac336ce1fde1c10a80738"
              units="uk"
            />
          </div>
          <div class="tile is-child box">
            <p class="title">General</p>
            <Carousel :newss="general"> </Carousel>
          </div>
          <div class="tile is-child box">
            <p class="title">Sports</p>
            <Carousel :newss="sports"> </Carousel>
          </div>
          <div class="tile is-child box">
            <p class="title">Business</p>
            <Carousel :newss="business"> </Carousel>
          </div>
          <div class="tile is-child box">
            <p class="title">Entertaiment</p>
            <Carousel :newss="entertainment"> </Carousel>
          </div>
          <div class="tile is-child box">
            <p class="title">Health</p>
            <Carousel :newss="health"> </Carousel>
          </div>
          <div class="tile is-child box">
            <p class="title">Science</p>
            <Carousel :newss="science"> </Carousel>
          </div>
          <div class="tile is-child box">
            <p class="title">Technology</p>
            <Carousel :newss="technology"> </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import VueWeather from "vue-weather-widget";
export default {
  name: "Home",
  components: { Carousel, VueWeather },
  computed: {
    general() {
      return this.$store.state.news.general;
    },
    sports() {
      return this.$store.state.news.sports;
    },
    business() {
      return this.$store.state.news.business;
    },
    entertainment() {
      return this.$store.state.news.entertainment;
    },
    health() {
      return this.$store.state.news.health;
    },
    science() {
      return this.$store.state.news.science;
    },
    technology() {
      return this.$store.state.news.technology;
    },
  },
  /*methods: {*/
  /*getAllCategoriesNews() {*/
  /*const */
  /*const categories = [*/
  /*"general",*/
  /*"sports",*/
  /*"entertainment",*/
  /*"business",*/
  /*"entertainment",*/
  /*"health",*/
  /*"science",*/
  /*"technology",*/
  /*];*/
  /*Promise.all()*/
  /*},*/
  /*},*/
  created() {
    this.$store.dispatch("getNews", { category: "general" });
    this.$store.dispatch("getNews", { category: "sports" });
    this.$store.dispatch("getNews", { category: "business" });
    this.$store.dispatch("getNews", { category: "entertainment" });
    this.$store.dispatch("getNews", { category: "health" });
    this.$store.dispatch("getNews", { category: "science" });
    this.$store.dispatch("getNews", { category: "technology" });
  },
};
</script>

<style scoped></style>
