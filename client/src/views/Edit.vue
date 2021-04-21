<template>
  <div>
      <section id="add-product">
        <div class="container myForm">
            <form @submit.prevent="editImage">
                <div class="mb-3">
                  <label for="name" class="form-label">Image URL</label>
                  <input v-model="currentImage.imgUrl" type="text" class="form-control" placeholder="Enter image url...">
                </div>

                <div class="mb-3">
                    <label for="img_url" class="form-label">Category</label>
                    <input v-model="currentImage.category" type="text" class="form-control" placeholder="Enter category...">
                </div>

                <div class="mb-3">
                    <label for="price" class="form-label">Description</label>
                    <input v-model="currentImage.description" type="text" class="form-control" placeholder="Enter description...">
                </div>

                <button type="submit" class="btn btn-primary mr-3">Submit</button>
                <button type="button" class="btn btn-danger" @click="returnHome">Cancel</button>
              </form>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  computed: {
    currentImage () {
      return this.$store.state.currentImage
    }
  },
  methods: {
    returnHome () {
      this.$router.push('/')
    },
    editImage () {
      this.$store.dispatch('editImage', {
        id: this.currentImage.id,
        imgUrl: this.currentImage.imgUrl,
        category: this.currentImage.category,
        description: this.currentImage.description
      })
    }
  }
}
</script>

<style scoped>
    .myForm {
        width: 100px;
        min-width: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1rem;
        padding: 3rem;
        background-color: #e1f4f3;
    }

    @media (max-width: 500px) {
        .myForm {
            min-width: 50%;
        }
    }
</style>
