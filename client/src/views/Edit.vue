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
  name: 'Edit',
  computed: {

  }
}
</script>

<style>

</style>
