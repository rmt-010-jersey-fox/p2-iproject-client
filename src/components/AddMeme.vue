<template>
<div>
<Navbar />
  <section id="add-meme" style="overflow-x: hidden; background-color: white">
    <div class="container">
      <div class="col-md-12">
        <div class="add-meme">
          <form >
            <h1 class="h3 mb-3 fw-normal">Add memes</h1>
            <br />
            <div class="row">
              <div class="col-6">
              <button class="btn btn-outline-success" @click.prevent="getGacha">
                Gacha Image
              </button><br>
              <img :src="memegacha.url" alt="" width="300px"><br>

              </div>
              <div class="col-6">
                <label for="imageURL">Image Name</label><br />
            <input class="w-100" type="text" v-model="memegacha.name" /><br />
            <label for="title">Title</label><br />
            <input
              class="w-100"
              type="text"
              v-model="title"
              placeholder="Kamu ketika makan siang"
              required
              autofocus
            /><br />
            
            <label for="title">Top Text</label><br />
            <input
              class="w-100"
              type="text"
              v-model="top"
              placeholder="Kamu ketika makan siang"
              required
              autofocus
            /><br />
            <label for="title">Bottom Text</label><br />
            <input
              class="w-100"
              type="text"
              v-model="bottom"
              placeholder="Kamu ketika makan siang"
              required
              autofocus
            /><br />
            <br />
              </div>
            </div>
           
            <button
              class="w-100 btn btn-lg btn-success"
              id="btn-add"
              type="submit"
              @click.prevent="submitMeme"
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
  name: "addMeme",
    components: {
        Navbar
    },
    data() {
      return {
        title: "",
        top: "",
        bottom: "",
      }
    },
    methods: {
      getGacha() {
        this.$store.dispatch("getMemeGacha");
        },
      submitMeme() {
        this.$store.dispatch('addMeme', {
          title: this.title, 
          top: this.top, 
          bottom: this.bottom, 
          name: this.memegacha.name, 
          router: this.$router
        })
      }
    },
    computed: {
      memegacha() {
        return this.$store.state.memegacha
      }
    }
};
</script>

<style>
</style>