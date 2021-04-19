<template>
  <div id="add-page" class="page form-page">
    <h2>Add a New Card</h2>
    <CardForm />
  </div>
</template>

<script>
import CardForm from '../components/CardForm'

export default {
  name: 'CardAdd',
  components: { CardForm }
}
</script>

<style>

</style>
