<template>
  <div class="container" style="">
      <form @submit.prevent="AddTeam" class="border border-1 container bg-dark">
        <h2>Add Team Page</h2>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input v-model="name" type="text" class="form-control"/>
        </div>
        <div class="mb-3">
          <label class="form-label">Description</label>
          <textarea v-model="description" type="text" class="form-control"/>
        </div>
          <button type="submit" class="btn btn-primary">
            Add Team
          </button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'AddTeam',
  data () {
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    AddTeam() {
      let input = {
        name: this.name,
        description: this.description
      }
      this.$store.dispatch('AddTeam', input)
    }
  }
}
</script>

<style>
h2 {
  padding-top: 20px;
  padding-bottom: 20px;
  color: whitesmoke
}
label {
  color: whitesmoke
}
.mb-3 {
  padding-left:30px;
  padding-right:30px
}
form {
  padding-bottom:30px;
}
</style>