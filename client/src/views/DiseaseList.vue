<template>
  <div class="home">
    <div id="navbar">
      <Navbar/>
    </div>
    <div>
        <div class="container-fluid d-flex justify-content-md-center bg-light" id="disease-page1">
            <div class="row justify-content-md-center">
                <h1 style="text-align: center;">Disease List</h1>
                <table class="table-light table-bordered">
                    <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Risk</th>
                          <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody id="product-list">
                       <DiseaseData
                        v-for="disease in diseases"
                        :key="disease.id"
                        :disease="disease"
                        />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import DiseaseData from '@/components/DiseaseData.vue'

export default {
  name: 'DiseaseList',
  components: {
    Navbar, DiseaseData
  },
  created () {
    this.$store.dispatch('getDiseaseData')
  },
  computed: {
    diseases () {
      return this.$store.state.diseases
    }
  }
}
</script>
<style scoped>
#disease-page1 {
    margin: 50px;
    width: 100%;
    height: 50%;
    display: inline-flex;
    align-content: center;
    background-color:lightcoral;
}
.table-light {
   text-align: center;
}
</style>
