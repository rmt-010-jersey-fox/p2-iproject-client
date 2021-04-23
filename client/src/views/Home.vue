<template>
  <div class="home">
    <div id="navbar">
      <Navbar/>
    </div>
    <div>
        <div class="container-fluid d-flex justify-content-md-center bg-light" id="patient-page1">
            <div class="row d-flex justify-content-md-center">
                <h1 style="text-align: center;">Patient List</h1>
                <table class="table-light table-bordered">
                    <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Birth Date</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Disease</th>
                          <th scope="col">Risk</th>
                          <th scope="col">Status</th>
                          <th scope="col">Department</th>
                          <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody id="product-list">
                       <PatientData
                        v-for="patient in patients"
                        :key="patient.id"
                        :patient="patient"
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
import PatientData from '@/components/PatientData.vue'

export default {
  name: 'Home',
  components: {
    Navbar, PatientData
  },
  created () {
    this.$store.dispatch('getPatientsData')
  },
  computed: {
    patients () {
      return this.$store.state.patients
    }
  }
}
</script>
<style scoped>
#patient-page1 {
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
