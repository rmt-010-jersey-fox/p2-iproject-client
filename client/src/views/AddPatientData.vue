<template>
<div>
<div id="navbar">
<Navbar/>
</div>
  <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <form @submit.prevent="addPatientData" class="row g-3">
                        <h4>Add Patient Data</h4>
                        <div class="col-12">
                            <label>Name</label>
                            <input type="text" name="name" v-model="patientData.name" class="form-control" placeholder="Name">
                        </div>
                        <div class="col-12">
                            <label>Birth Date</label>
                            <input type="date" name="date_of_birth" v-model="patientData.date_of_birth" class="form-control" placeholder="Birth Date">
                        </div>
                        <div class="col-12">
                            <label>Gender</label>
                            <input type="text" name="gender" v-model="patientData.gender" class="form-control" placeholder="Gender">
                        </div>
                        <div class="col-12">
                            <label>Id Disease</label>
                            <input type="text" name="DiseaseId" v-model="patientData.DiseaseId" class="form-control" placeholder="Id Disease">
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
  name: 'AddPatientData',
  data () {
    return {
      patientData: {
        name: '',
        date_of_birth: '',
        gender: '',
        DiseaseId: ''
      }
    }
  },
  methods: {
    addPatientData () {
      this.$store.dispatch('addPatientData', this.patientData)
    }
  },
  components: { Navbar }
}
</script>

<style>

</style>
