<template>
  <!-- Modal -->
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Plan a Trip"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Add Task"
          label-for="Task-input"
          invalid-feedback="All field is required"
          :state="allState"
        >
          title
          <b-form-input
            v-model="title"
            :state="allState"
            required
          ></b-form-input>
          origin
          <b-form-input
            v-model="origin"
            :state="allState"
            required
          ></b-form-input>
          destination
          <b-form-input
            v-model="destination"
            :state="allState"
            required
          ></b-form-input>
          description
          <b-form-input
            label="description"
            id="description-input"
            v-model="description"
            :state="allState"
            required
          ></b-form-input>
          depature date
          <b-form-input
            label="depature"
            type="date"
            id="deptdate-input"
            v-model="depatureDate"
            :state="allState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
// import axios from "../API/BaseURL";
export default {
  data () {
    return {
      title: '',
      description: '',
      origin: '',
      destination: '',
      depatureDate: '',
      allState: null
    }
  },
  methods: {
    checkFormValidity () {
      const valid = this.$refs.form.checkValidity()
      this.allState = valid
      return valid
    },
    resetModal () {
      this.allState = null
    },
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      this.$store.dispatch('goAddTrip', {
        title: this.title,
        description: this.description,
        origin: this.origin,
        destination: this.destination,
        depatureDate: this.depatureDate
      })
      this.handleSubmit()
    },
    handleSubmit () {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      // this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }
}
</script>

<style></style>
