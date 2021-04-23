<template>
<center>
<div class="list-group">
  <a @click.prevent="goToForm(card.id)" class="list-group-item list-group-item-action flex-column align-items-start">
    <span class="mb-1" style="-webkit-text-stroke: 2px white;">----------------------------------------------------------------------------------------------------------------------------------</span>
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ card.name }}</h5>
      <small class="text-muted">Rp.{{ card.price }}</small>
    </div>
    <small class="text-muted">{{ card.description }}.</small>
  </a>
</div>
</center>
</template>

<script>
export default {
  name: 'CartForEach',
  props: ['card'],
  methods: {
    goToForm (id) {
      this.$store.dispatch('formAppointment', id)
    }
  },
  computed: {
    image () {
      return this.cart.image
    }
  }
}
</script>

<style>

</style>
