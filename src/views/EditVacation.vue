<template>
  <div class="container w-25 border border-3" style="margin-top: 10%; display: flex; justify-content: center;">
    <form class="pt-2 pb-2" @submit.prevent="submitVacation">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Start Date</label>
        <input type="date" class="form-control" id="exampleFormControlInput1" v-model="payload.start_date">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">End Date</label>
        <input type="date" class="form-control" id="exampleFormControlInput1" v-model="payload.end_date">
      </div>
      <div style="display: flex; justify-content: space-between;">
      <button class="btn btn-success">Submit</button>
      <button class="btn btn-danger" @click.prevent="goToHome">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import { getStripDate } from '../helpers/convert'
export default {
  name: 'EditVacation',
  data () {
    return {
      payload: {
        start_date: '',
        end_date: '',
        id: ''
      }
    }
  },
  methods: {
    getOneVacation () {
      this.$store.dispatch('getOneVacation', this.$route.params.id)
        .then(({ data }) => {
          console.log(data, 'dadadada')
          this.payload.start_date = this.convert(data.start_date)
          this.payload.end_date = this.convert(data.end_date)
          this.payload.id = data.id
        })
        .catch(err => {
          console.log(err)
        })
    },
    submitVacation () {
      this.$store.dispatch('editVacation', this.payload)
        .then(data => {
          // console.log(data, 'panah')
          this.$store.dispatch('fetchVacation')
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    goToHome () {
      this.$router.push('/')
    },
    convert (value) {
      return getStripDate(value)
    }
  },
  created () {
    this.getOneVacation()
  },
  computed: {

  }
}

</script>

<style>

</style>
