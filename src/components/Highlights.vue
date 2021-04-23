<template>
  <div class="highlights-container my-5">
    <h1>Highlights</h1>
    <div v-for="(highlight, i) in highlights" :key="i" class="text-center mt-5">
      <div style="width: 300px; height: 200px" v-html="highlight.link"></div>
      <p>{{highlight.title}}</p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Highlights',
  computed: {
    highlights () {
      return this.$store.state.highlights
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
