<template>
  <div class="hero is-fullheight is-light p-5">
    <Box v-for="(news, i) in newss" :key="i">{{ news }}</Box>
  </div>
</template>

<script>
import Box from "../components/Box";
export default {
  name: "NewsCategory",
  components: { Box },
  computed: {
    newss() {
      return this.$store.state.news.general;
    },
  },
  created() {},
};
</script>

<style>
</style>
