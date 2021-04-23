<template>
  <div class="hero is-fullheight is-light p-5">
    <div class="tile is-ancestor">
      <div class="tile is-full is-vertical is-parent">
        <h1 class="title">Readlists</h1>
        <Box
          v-for="readlist in readlists"
          :key="readlist.id"
          :idParams="readlist.id"
          :News="readlist.News"
        >
        </Box>
      </div>
    </div>
  </div>
</template>

<script>
import Box from "../components/Box";
export default {
  name: "Readlists",
  components: { Box },
  computed: {
    readlists() {
      this.$store.state.readlists.forEach((el) => {
        el.News.statusColor =
          el.status === "done"
            ? "has-background-success-light"
            : "has-background-info-light";
      });
      return this.$store.state.readlists;
    },
  },
  created() {
    this.$store.dispatch("getReadlists");
  },
};
</script>

<style>
</style>
