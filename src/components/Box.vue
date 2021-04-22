<template>
  <div class="tile is-child box" :class="News.statusColor">
    <article class="media">
      <div class="media-left">
        <figure class="image is-128x128">
          <img :src="News.image" alt="Image" />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p class="title">{{ News.title }}</p>
          <p>
            <small>{{ News.author }}</small>
            <small>31m</small>
            <br />
            {{ News.description }}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a
              @click.prevent="erased"
              class="level-item clickable"
              aria-label="reply"
            >
              <span class="icon is-small">
                <i class="fas fa-trash" aria-hidden="true"></i>
              </span>
            </a>
            <a
              @click.prevent="check"
              class="level-item clickable"
              aria-label="retweet"
            >
              <span class="icon is-small">
                <i class="fas fa-check" aria-hidden="true"></i>
              </span>
            </a>
            <b-button @click="openNewTab(News.url)" type="is-text"
              >read</b-button
            >
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Box",
  props: ["News", "idParams"],
  methods: {
    erased() {
      this.$store.dispatch("erasedNews", this.idParams);
    },
    check() {
      this.$store.dispatch("updateNews", this.idParams);
    },
    openNewTab(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style>
</style>
