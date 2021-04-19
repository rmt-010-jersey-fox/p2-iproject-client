<template>
  <div id="edit-page" class="page form-page">
    <h2>Card Edit</h2>
    <a class="delete-option" href="">Delete This Card</a>
    <br><br>
    <CardForm />
  </div>
</template>

<script>
import CardForm from '../components/CardForm'

export default {
  name: 'CardEdit',
  components: { CardForm }
}
</script>

<style>

</style>
