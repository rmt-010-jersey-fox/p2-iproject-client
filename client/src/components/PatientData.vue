<template>
        <tr>
          <td>{{ patient.id }}</td>
          <td>{{ patient.name }}</td>
          <td>{{ patient.date_of_birth }}</td>
          <td>{{ patient.gender }}</td>
          <td>{{ patient.Disease.name }}</td>
          <td>{{ patient.Disease.level_of_risk }}</td>
          <td>
              <div class="submit-checkout" v-if="patient.status == false">
                    <button type="submit" class="btn-sm btn-danger btn-block" @click.prevent="changeStatusToTrue(patient.id)">Under Surveillance</button>
              </div>
              <div class="submit-checkout" v-if="patient.status == true">
                    <button type="submit" class="btn-sm btn-success btn-block" @click.prevent="changeStatusToFalse(patient.id)">Ready to be dispatched</button>
              </div>
          <td>
             <div class="submit-checkout">
                  <br>
                    <button type="submit" class="btn-sm btn-warning btn-block" @click.prevent="toEditPatientPage(patient.id)">Edit</button>
              </div>
              <div class="delete-checkout">
                  <br>
                    <button class="btn-sm btn-dark btn-block" @click.prevent="deletePatient(patient.id)">Delete</button>
              </div>
          </td>
        </tr>
</template>

<script>
export default {
  name: 'PatientData',
  props: ['patient'],
  methods: {
    getPatientsData () {
      this.$store.dispatch('getPatientsData')
    },
    changeStatusToTrue (id) {
      this.$store.dispatch('changeStatusToTrue', id)
    },
    changeStatusToFalse (id) {
      this.$store.dispatch('changeStatusToFalse', id)
    },
    deletePatient (id) {
      this.$store.dispatch('deletePatient', id)
    },
    toEditPatientPage (id) {
      this.$store.dispatch('toEditPatientPage', id)
      this.$store.commit('toEditPatientPage', this.patient)
    }
  }
}

</script>

<style>

</style>
