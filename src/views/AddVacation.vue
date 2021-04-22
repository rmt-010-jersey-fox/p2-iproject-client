<template>
  <div class="container w-25 border border-3" style="margin-top: 10%; display: flex; justify-content: center;">
    <form class="pt-2 pb-2" @submit.prevent="submitVacation">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Start Date</label>
        <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="payload.start_date">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">End Date</label>
        <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="payload.end_date">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Destination City</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Type City" v-model="payload.city">
      </div>
      <div style="display: flex; justify-content: space-between;">
      <button class="btn btn-success">Submit</button>
      <button class="btn btn-danger" @click.prevent="goToHome">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'AddVacation',
  data () {
    return {
      payload: {
        start_date: '',
        end_date: '',
        city: ''
      }
    }
  },
  methods: {
    goToHome () {
      this.$router.push('/')
    },
    submitVacation () {
      this.$store.dispatch('addVacation', this.payload)
        .then(data => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
