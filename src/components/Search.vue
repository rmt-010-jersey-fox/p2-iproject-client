<template>
  <section>
    <h3 class="subtitle">With Material Design Icons</h3>
    <form @submit.prevent="onSubmit">
      <b-field>
        <b-input
          placeholder="Search..."
          type="search"
          icon="magnify"
          icon-clickable
          @icon-click="searchIconClick"
        >
        </b-input>
      </b-field>
    </form>
  </section>
</template>

<script>
export default {
  name: "Search",
  methods: {
    searchIconClick() {
      alert("You wanna make a search?");
    },
    clearIconClick() {
      this.email = "";
      alert("Email cleared!");
    },
  },
};
</script>
