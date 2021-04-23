<template>
  <div class="hero is-fullheight">
    <div class="hero is-fullheight is-light p-5">
      <h1 class="title">{{ category.toUpperCase() }}</h1>
      <div class="columns is-multiline">
        <Card v-for="(news, i) in newss" :key="i" :news="news"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "NewsCategory",
  components: { Card },
  computed: {
    newss() {
      const category = this.$route.params.category;
      return this.$store.state.news[category];
    },
    category() {
      const category = this.$route.params.category;
      return category;
    },
  },
  methods: {
    getNewsCategory() {
      const category = this.$route.params.category;
      this.$store
        .dispatch("getNews", { category: category })
        .then((r) => r.json())
        .then((data) => {
          const news = {};
          Object.defineProperty(news, category, {
            value: data.news,
            writable: true,
          });
          this.$store.commit("SET_NEWS_ALL", news);
        });
    },
  },
  beforeRouteUpdate(to, from, next) {
    const category = to.params.category;
    this.$store
      .dispatch("getNews", { category: category })
      .then((r) => r.json())
      .then((data) => {
        const news = {};
        Object.defineProperty(news, category, {
          value: data.news,
          writable: true,
        });
        this.$store.commit("SET_NEWS_ALL", news);
      });
    next();
  },
  created() {
    this.getNewsCategory();
  },
};
</script>

<style>
</style>
