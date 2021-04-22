<template>
    <div class="container d-flex justify-content-center" style="width: 600px">
      <form @submit.prevent="addTrip">
          title
          <b-form-input
            v-model="formAdd.title"
            required
          ></b-form-input>
          description
          <b-form-input
            v-model="formAdd.description"
            required
          ></b-form-input>
          origin
          <b-form-input
            v-model="formAdd.origin"
            required
          ></b-form-input>
          destination
          <b-form-input
            v-model="formAdd.destination"
            required
          ></b-form-input>
           Depature Date
          <b-form-input
            v-model="formAdd.depatureDate"
            required
          ></b-form-input>
        <div>
            <b-button type="submit">Save</b-button>
          <router-link to="/">Cancel</router-link>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formAdd: {
        title: '',
        description: '',
        origin: '',
        destination: '',
        depatureDate: ''
      }
    }
  },
  methods: {
    addTrip () {
      this.$store.dispatch('goAddTrip', this.formAdd)
      this.$nextTick(() => {
        this.$router.push('/').catch(() => {})
      })
    }
  }
}
</script>

<style>

</style>
