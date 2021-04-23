<template>
  <div class="column">
    <div class="card" style="width: 30vw">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="news.image" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ news.title }}</p>
            <p class="subtitle is-6">{{ news.author }}</p>
          </div>
        </div>

        <div class="content">
          {{ news.description }}
          <br />
        </div>

        <b-button @click="openNewTab(news.url)" type="is-text">more</b-button>
        <br />
        <b-button
          @click="addReadlist(news)"
          type="is-light"
          icon-right="plus-thick"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["news"],
  methods: {
    addReadlist(news) {
      this.$store.dispatch("addReadlist", news);
    },
    openNewTab(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style>
</style>
