<template>
  <section>
    <form @submit.prevent="onSubmit">
      <b-field>
        <b-input
          placeholder="Search..."
          type="search"
          icon="magnify"
          v-model="keywords"
          icon-clickable
          @icon-click="searchIconClick"
        >
        </b-input>
        <b-button native-type="submit">search</b-button>
      </b-field>
    </form>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keywords: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("getSearchList", this.keywords);
    },
    searchIconClick() {
      this.onSubmit();
    },
    clearIconClick() {
      this.email = "";
      alert("Email cleared!");
    },
  },
};
</script>
