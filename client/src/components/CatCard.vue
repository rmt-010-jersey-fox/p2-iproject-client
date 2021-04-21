<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="card m-2 border-0 text-center"
    style="width: 6rem; position:relative"
  >
    <button
      v-show="hover"
      @click.prevent="deleteCat"
      class="btn btn-close btn-outline-danger delete-btn p-0 m-0 rounded-pill border-0"
    >
      x
    </button>
    <div class="">
      <img
        class="rounded-circle b-avatar"
        :src="cat.avatarUrl"
        alt="Card image cap"
      />
    </div>
    <div class="card-body p-1">
      <p class="card-text" style="font-size:12px">{{ cat.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatCard",
  data() {
    return {
      hover: false
    };
  },
  props: ["cat"],
  methods: {
    async deleteCat() {
      try {
        let { data } = this.$store.dispatch("deleteCat", { id: this.cat.id });
        const username = this.$route.params.username;
        this.$store.dispatch("fetchUser", { username });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
.delete-btn {
  position: absolute;
  top: 0;
  right: 10%;
  z-index: 100;
}
</style>
