<template>
<div>
<div id="navbar">
<Navbar/>
</div>
  <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <form @submit.prevent="addDiseaseData" class="row g-3">
                        <h4>Add Patient Data</h4>
                        <div class="col-12">
                            <label>Name</label>
                            <input type="text" name="name" v-model="diseaseData.name" class="form-control" placeholder="Name">
                        </div>
                        <div class="col-12">
                            <label>Level of Risk</label>
                            <select v-model="diseaseData.level_of_risk" class="form-select" aria-label="Default select example">
                            <option selected>Select Level Of Risk</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary float-center">Submit Data</button>
                        </div>
                    </form>
                    <hr class="mt-4">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'AddDiseaseData',
  data () {
    return {
      diseaseData: {
        name: '',
        level_of_risk: ''
      }
    }
  },
  methods: {
    addDiseaseData () {
      this.$store.dispatch('addDiseaseData', this.diseaseData)
    }
  },
  components: { Navbar }
}
</script>

<style>

</style>
