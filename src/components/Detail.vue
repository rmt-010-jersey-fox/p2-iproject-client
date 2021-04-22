<template>
  <div>
      <div class="flex h-64 p-8 gap-x-12">
          <img class="h-full rounded-lg shadow-2xl" :src="detail.preview" alt="">
          <div class="space-y-3">
            <p class="text-3xl text-gray-800 font-semibold underline dark:text-gray-300">{{detail.title}}</p>
            <div>
                <p class="text-gray-800 italic dark:text-gray-300">by <span class="font-semibold text-gray-500 dark:text-gray-200">{{detail.author}}</span></p>
                <p class="text-gray-800 dark:text-gray-300">Publisher: {{detail.publisher}}</p>
            </div>
            <p class="text-gray-800 italic dark:text-gray-300">{{detail.description}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  computed: {
      detail () {
          return this.$store.state.recommendDetail
      }
  }
}
</script>

<style>

</style>