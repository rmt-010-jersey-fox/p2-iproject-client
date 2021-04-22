<template>
  <div>
    <div class="container">
      <h1 class="animate__animated animate__heartBeat">Nutrient by Meal (Daily Needs)</h1>
      <div class="row">
      <CardNutrient
        v-for="(nutrition, i) in nutrientMeal"
        :key='i'
        :nutrition='nutrition'
      />
      </div>
    </div>
  </div>
</template>

<script>
import CardNutrient from '../components/CardNutrient'

export default {
  name: 'Nutrient',
  components: {
    CardNutrient
  },
  methods: {
  },
  computed: {
    nutrientMeal () {
      return this.$store.state.nutrient
    }
  },
  created () {
    this.$store.dispatch('fetchNutrient')
  }
}
</script>

<style>

</style>