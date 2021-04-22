<template>
  <div>
    <div class="">
      <div class="two">
        <div class="d-flex justify-content-end px-3 pt-1">
          <i class="mdi mdi-star-outline pr-1 star"></i
          ><i class="mdi mdi-dots-horizontal dot"></i>
        </div>
        <div class="px-3">
          <div class="round">
            <img
              src="https://img.icons8.com/bubbles/100/000000/girl-with-glasses-art-palette.png"
              width="23"
            />
          </div>
        </div>
        <div class="px-3 pt-3">
          <h3 class="name">{{ trip.title }}</h3>
          <p class="quote2">
            {{ trip.description }}
          </p>
        </div>
        <div class="d-flex justify-content-start px-3 align-items-center">
          <i class="mdi mdi-view-comfy task"></i>
          <span class="quote2 pl-2">Origin: {{ trip.origin }}</span>
          <span class="quote2 pl-2">Destination: {{ trip.destination }}</span>
        </div>
        <div
          class="d-flex justify-content-between px-3 align-items-center pb-3"
        >
          <div class="d-flex justify-content-start align-items-center">
            <i class="mdi mdi-calendar-clock date"></i>
            <span class="quote2 pl-2">Depature date: {{ new Date(trip.depatureDate).toISOString().split('T')[0] }}</span>
          </div>
          <div class="d-flex justify-content-end">
            <img
              src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-musical-notes.png"
              width="20"
              class="img1"
            />
            <img
              src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png"
              width="20"
              class="img2"
            />
            <img
              src="https://img.icons8.com/bubbles/50/000000/short-hair-girl-question-mark.png"
              width="20"
              class="img3"
            />
          </div>
        </div>
      </div>
        <ModalAddTodo :tripId="trip.id"/>
    </div>
    <div class="pt-2">
      <TripTodos v-for="todos in trip.Todos" :key="todos.id"
      :todos="todos"/>
    </div>
  </div>
</template>

<script>
import ModalAddTodo from '@/components/ModalAddTodo.vue'
import TripTodos from '@/components/TripTodos.vue'
export default {
  props: ['trip'],
  methods: {
    addTodo (id) {
      this.$store.dispatch('addTodo', id)
    }
  },
  components: {
    ModalAddTodo,
    TripTodos
  },
  data () {
    return {
      modalShow: false
    }
  }
}
</script>

<style>
</style>
