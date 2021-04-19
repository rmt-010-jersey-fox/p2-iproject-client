<template>
  <form>
    <label for="username-reg">Username:</label><br>
    <input type="text" id="username-reg" required><br><br>

    <label for="email-reg">Email:</label><br>
    <input type="email" id="email-reg" placeholder="example@mail.com" required><br><br>

    <label for="password-reg">Password:</label><br>
    <input type="password" id="password-reg" required><br><br><br>

    <input type="submit" value="Submit">
  </form>
</template>

<script>
export default {
  name: 'UserForm'
}
</script>

<style>

</style>
