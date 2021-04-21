<template>
   <!-- DETAIL PAGE -->
    <section id="detail-page">
        <div class="container mt-5">
            <h1 class="mb-3">DETAIL</h1>
            <hr>
            <div class="d-flex flex-column justify-content-center align-items-center">
                <img class="mb-3" :src="currentImage.imgUrl" alt="" style="width: 50%;">
                <p class="h3 text-muted mb-3">{{currentImage.description}}</p>
                <div>
                    <button @click="handleFavourite(currentImage.id)" class="btn btn-success mb-3 mr-3">ADD TO FAVORITES</button>
                    <button @click="handleEdit(currentImage.id)" class="btn btn-info mb-3 mr-3">EDIT IMAGE</button>
                    <button @click="handleDesc(currentImage.id)" class="btn btn-info mb-3 mr-3">EDIT DESCRIPTION</button>
                    <button @click="handleDelete(currentImage.id)" class="btn btn-danger mb-3 mr-3">DELETE</button>
                </div>
            </div>

            <CommentSection />
        </div>
    </section>
</template>

<script>
import CommentSection from '../components/CommentSection'
export default {
  name: 'Details',
  components: {
    CommentSection
  },
  computed: {
    currentImage () {
      return this.$store.state.currentImage
    }
  },
  methods: {
    handleFavourite (id) {

    },
    handleEdit (id) {
      console.log(id)
    },
    handleDesc (id) {
      console.log(id)
    },
    handleDelete (id) {
      this.$store.dispatch('deleteImage', {
        id
      })
    }
  }
}
</script>

<style scoped>

</style>
