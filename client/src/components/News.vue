<template>
  <div class="flex flex-wrap -m-4">
    <div class="xl:w-1/4 md:w-1/2 p-4" v-for="(item, i) in news" :key="i">
      <a :href="item.url">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img
            class="h-40 rounded w-full object-cover object-center mb-6"
            :src="item.urlToImage"
            alt="content"
          />
          <h3
            class="tracking-widest text-indigo-500 text-xs font-medium title-font"
          >
            {{ item.source.name }}
          </h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
            {{ item.title }}
          </h2>
          <p class="leading-relaxed text-base">
            {{ item.description }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "News",
  computed: {
    ...mapState(["news"]),
  },
};
</script>

<style>
</style>