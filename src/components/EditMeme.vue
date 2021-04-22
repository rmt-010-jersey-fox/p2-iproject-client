<template>
  <div>
    <Navbar />
    <section id="edit-meme" style="overflow-x: hidden; background-color: white">
      <div class="container">
        <div class="col-md-12">
          <div class="edit-meme">
            <form>
              <hr />
              <h1 class="h3 mb-3 fw-normal">Edit memes</h1>
              <br />
              <label for="title">Title</label><br />
              <input
                class="w-100"
                type="text"
                v-model="item.title"
                placeholder="Kamu ketika makan siang"
                required
                autofocus
              /><br /><br />
              <label for="imageURL">Image source</label><br />
              <input
                type="text"
                class="w-100"
                v-model="item.image_url"
                name="image"
                disabled
              /><br />
              <hr />
              <button
                class="w-100 btn btn-lg btn-success"
                @click.prevent="updateMeme(item.id)"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Update",
  components: {
    Navbar,
  },
  computed: {
    item() {
      return this.$store.state.item;
    },
  },
  methods: {
    updateMeme(id) {
      this.$store.dispatch("updateMeme", {
        id: id,
        router: this.$router,
      });
    },
  },
};
</script>

<style>
</style>