<template>
<div></div>
</template>
<script>
export default {
  name: 'Logout',
  created () {
    localStorage.removeItem('access_token')
    localStorage.removeItem('email')
    localStorage.removeItem('reloaded')
    localStorage.removeItem('id')
    this.$router.push('/login')
  }
}
</script>
<style scoped>

</style>
