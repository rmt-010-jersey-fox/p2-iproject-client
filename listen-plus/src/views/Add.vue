<template>
  <div class="add">
    <section>
      <Navbar />
      <div class="container d-flex justify-content-center">
        <div class="add-form col-5 text-center pt-3">
            <h2>Add Playlist</h2>
           <form id="update-form" @submit.prevent="addPlaylist">
            <div class="form-group">
              <label for="name">Name :</label>
              <input v-model="name" type="text" class="form-control" id="add-name">
              <label for="cover">Image URL :</label>
              <input v-model="cover" type="text" class="form-control" id="add-cover">
            </div><br>
            <button type="submit" class="btn btn-secondary" value="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'

export default {
  name: 'Add',
  components: {
    Navbar
  },
  data () {
    return {
      name: '',
      cover: ''
    }
  },
  methods: {
    addPlaylist () {
      this.$store.dispatch('addPlaylist', {
        name: this.name,
        cover: this.cover
      })
    }
  }
}
</script>

<style>
.add-form {
  background-color: #808080;
  padding: 1rem;
  box-shadow: 2px 2px;
}
</style>
