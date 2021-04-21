<template>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Cat Name</label>
      <input class="form-control" v-model="name" />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Cat avatar</label>
      <input class="form-control" v-model="avatarUrl" />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Upload your cat's image</label>
      <input v-model="imageUrl" class="form-control" />
      <a @click.prevent="fetchCatImage" class="btn btn-secondary m-1 p-1"
        >Generate image</a
      >
    </div>
    <button type="submit" @click.prevent="addCat" class="btn btn-primary">
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: 'AddCatModal',
  data () {
    return {
      name: '',
      avatarUrl: '',
      imageUrl: ''
    }
  },
  methods: {
    async fetchCatImage () {
      try {
        const { data } = await this.$store.dispatch('fetchCatImage')
        this.imageUrl = data.image_url
        console.log(data)
      } catch (error) {
        const msg = error.response.data.message
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: msg
        })
        console.log(error)
      }
    },
    async addCat () {
      try {
        const { data } = await this.$store.dispatch('addCat', {
          name: this.name,
          avatarUrl: this.avatarUrl,
          imageUrl: this.imageUrl
        })
        this.$emit('closeModal', 'add-modal')
        console.log(data)
      } catch (error) {
        const msg = error.response.data.message
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: msg
        })
        console.log(error)
      }
    }
  }
}
</script>

<style></style>
