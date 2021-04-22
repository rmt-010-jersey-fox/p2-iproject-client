<template>
  <div>
      <section id="add-product">
        <div class="container myForm">
            <form @submit.prevent="addImage">
                <div class="mb-3">
                  <label for="name" class="form-label">Image URL</label>
                  <input v-model="imageUrl" type="text" class="form-control" placeholder="Enter image url...">
                </div>

                <div class="mb-3">
                    <label for="img_url" class="form-label">Category</label>
                    <input v-model="category" type="text" class="form-control" placeholder="Enter category...">
                </div>

                <div class="mb-3">
                    <label for="price" class="form-label">Description</label>
                    <input v-model="description" type="text" class="form-control" placeholder="Enter description...">
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
  name: 'Add',
  data () {
    return {
      imageUrl: '',
      category: '',
      description: ''
    }
  },
  methods: {
    addImage () {
      this.$store.dispatch('addImage', {
        imageUrl: this.imageUrl,
        category: this.category,
        description: this.description
      })
    },
    returnHome () {
      this.$router.push('/')
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
