<template>
  <div class="hero is-fullheight">
    <div class="hero is-fullheight is-light p-5">
      <h1 class="title">Search</h1>
      <div class="columns is-multiline">
        <Card v-for="(news, i) in searchList" :key="i" :news="news"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "SearchPage",
  components: { Card },
  computed: {
    searchList() {
      return this.$store.state.searchList;
    },
  },
};
</script>

<style>
</style>
