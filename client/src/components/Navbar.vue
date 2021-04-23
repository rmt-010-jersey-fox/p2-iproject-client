<template>
  <div>
        <nav class="navbar navbar-expand-sm navbar-light" style="background-color: lightgreen">
          <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav ml-auto">
                  <a class="navbar-brand" href="#">Menu</a>
                  <a class="nav-item nav-link active" href="#" id="getProduct" @click.prevent="showHomepage">Patient List</a>
                  <a class="nav-item nav-link active" href="#" id="getProduct" @click.prevent="toShowDiseasePage">Disease List</a>
                  <a href="#" class="nav-item nav-link active" @click.prevent="toDiseaseData">Add Disease</a>
                  <a href="#" class="nav-item nav-link active" @click.prevent="toAddPatientPage">Add Patient Data</a>
                  <a class="nav-item nav-link active" href="#" id="logoutUser" @click.prevent="logout" >Logout</a>
                  </div>
              </div>
          </div>
        </nav>
    </div>
</template>
<script>

export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    toAddPatientPage () {
      this.$store.dispatch('toAddPatientPage')
    },
    toDiseaseData () {
      this.$store.dispatch('toDiseaseData')
    },
    toShowDiseasePage () {
      this.$store.dispatch('toShowDiseasePage')
    },
    showHomepage () {
      this.$store.dispatch('showHomepage')
    }

  }
}
</script>

<style>

</style>
