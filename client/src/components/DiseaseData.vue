<template>
        <tr>
          <td>{{ disease.id }}</td>
          <td>{{ disease.name }}</td>
            <td>{{ disease.level_of_risk }}</td>
          <td>
              <div class="delete-checkout">
                  <br>
                    <button class="btn-sm btn-dark btn-block" @click.prevent="deleteDisease(disease.id)">Delete</button>
              </div>
          </td>
        </tr>
</template>

<script>
export default {
  name: 'PatientData',
  props: ['disease'],
  methods: {
    getDiseaseData () {
      this.$store.dispatch('getPatientsData')
    },
    deleteDisease (id) {
      this.$store.dispatch('deleteDisease', id)
    }
  }
}

</script>

<style>

</style>
