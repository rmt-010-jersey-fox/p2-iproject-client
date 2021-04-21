<template>
  <CardNutrient/>
</template>

<script>
import CardNutrient from '../components/CardNutrient'

export default {
  name: 'Nutrient',
  component: {
    CardNutrient
  },
  methods: {
    nutrient () {
      this.$store.dispatch('fetchNutrient')
    }
  },
  computed: {
    nutrientMeal () {
      // console.log();
    }
  }
}
</script>

<style>

</style>