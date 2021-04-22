<template>
    <div>
    </div>
</template>
<script>
export default {
  name: 'Logout',
  created () {
      localStorage.removeItem('access_token')
      localStorage.removeItem('id')
      localStorage.removeItem('email')
      this.$router.push('/')
  }
}
</script>