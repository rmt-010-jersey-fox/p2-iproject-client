<template>
  <div class="add">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-6">
          </div>
          <div class="col-6" id="form-add">
            <div class="title-add text-center pt-3">
              <h2>Add Playlist</h2>
            </div>
            <form id="update-form" @submit.prevent="addData">
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
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Add',
  data () {
    return {
      name: '',
      cover: ''
    }
  },
  methods: {
    addData () {
      this.$store.dispatch('addData', {
        name: this.name,
        cover: this.cover
      })
    }
  }
}
</script>
