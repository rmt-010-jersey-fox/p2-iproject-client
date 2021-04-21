<template>
  <div class="home">
    <div style="margin-top: 30px">
      <h1 style="font-family: 'Bungee Inline', cursive;">Bookmark list</h1>
    </div>

    <table
      class="table table-striped table-dark"
      style="margin-top: 30px; margin-bottom: 30px"
    >
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">Lang</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody id="td">
        <tr v-for="el in bookmarks" :key="el.id">
          <th scope="row">{{ el.id }}</th>
          <td><a href="#" @click.prevent="mangaDetail(el.mangaLink)">{{ el.title }}</a></td>
          <td>{{ el.lang }}</td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              v-on:click="deleteBookmarks(el.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "bookmarks",
  created() {
    this.$store.dispatch("fetchBookmarks");
  },
  computed: {
    bookmarks() {
      return this.$store.state.bookmarks;
    },
  },
  methods: {
      deleteBookmarks(id){
          let payload = {
              id
          }
          this.$store.dispatch("deleteBookmarks", payload)
      },
      mangaDetail(mangaId) {
      this.$store.commit("getMangaId", mangaId)
      this.$router.push("/mangadetail");
    },
  }
};
</script>

<style scoped>
td, th {
  font-family: poppins;
  color: white 
}


</style>
