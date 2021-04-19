<template>
  <div class="home">
    <h2 style="padding-top: 2em"> Team List </h2>
    <div class="row">
      <div class="container col-7 table-wrapper-scroll-y my-custom-scrollbar">
        <button @click.prevent="changePage('AddTeam')" class="btn btn-dark" style="margin-bottom: 1em">Add Team</button>
        <table class="table table-striped table-hover">
          <thead class="table-dark">
            <tr>
              <th class="col-3" scope="col-3">Name</th>
              <th class="col-6" scope="col-6">Description</th>
            </tr>
          </thead>
          <!-- <ListProduct
            v-for="product in product" :key="product.id"
            :product="product"
          >
          </ListProduct> -->
        </table>
      </div>
      <div class="container col-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    changePage (name) {
      this.$router.push({ name })
    }
  }
}
</script>
