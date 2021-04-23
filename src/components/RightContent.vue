<template>
  <div>
    <div class="btn-group-vertical btn-group-lg">
    <h1>Arrange by: </h1>
      <button class="btn btn-success" @click.prevent="getMeme">Default</button>
      <button class="btn btn-success" @click.prevent="getMemesHot">Populer</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getMeme() {
      this.$store.dispatch("getMemes");
    },
    getMemesHot() {
      this.$store.dispatch("getMemesHot");
    }
  }
};
</script>

<style>
</style>
