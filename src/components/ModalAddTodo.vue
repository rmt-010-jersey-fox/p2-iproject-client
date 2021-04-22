<template>
  <div>
    <b-button pill variant="outline-secondary" @click="modalShow = !modalShow" style="padding: 1px; margin: 5px;">add todo</b-button>
    <b-modal v-model="modalShow">add todo
    <b-form>
      title <b-form-input type="text" v-model="todoTitle"></b-form-input>
      description <b-form-input type="text" v-model="todoDescription"></b-form-input>
      <b-button pill variant="outline-secondary" @click="addTodo(tripId)" style="padding: 1px; margin: 5px;">add todo</b-button>
    </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ['tripId'],
  data () {
    return {
      modalShow: false,
      todoTitle: '',
      todoDescription: ''
    }
  },

  methods: {
    addTodo (id) {
      this.$store.dispatch('addTodo', { title: this.todoTitle, description: this.todoDescription, id })
    }
  }
}
</script>
