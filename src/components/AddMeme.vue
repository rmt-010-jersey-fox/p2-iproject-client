<template>
<div>
<Navbar />
  <section id="add-meme" style="overflow-x: hidden; background-color: white">
    <div class="container">
      <div class="col-md-12">
        <div class="add-meme">
          <form>
            <hr />
            <h1 class="h3 mb-3 fw-normal">Add memes</h1>
            <br />
            <label for="title">Title</label><br />
            <input
              class="w-100"
              type="text"
              v-model="title"
              placeholder="Kamu ketika makan siang"
              required
              autofocus
            /><br /><br />
            <label for="imageURL">Image source</label><br />
            <input class="w-100" type="text" v-model="image" /><br />
            <hr />
            <button
              class="w-100 btn btn-lg btn-success"
              id="btn-add"
              type="submit"
            >
              Add
            </button>
          </form>
          <hr />
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        Navbar
    }
};
</script>

<style>
</style>