<template>
  <div id="profile-page" class="page form-page">

    <h2>{{ profile.username }} Profile</h2>
    <hr>

    <table id="profile-table">
      <tr>
        <td>Level:</td>
        <td>{{ profile.level }}</td>
      </tr>
      <tr>
        <td>EXP:</td>
        <td>{{ profile.exp }}</td>
      </tr>
      <tr>
        <td>Next Level:</td>
        <td>{{ profile.nextLevel }}</td>
      </tr>
      <tr>
        <td>Cards Cleared:</td>
        <td>{{ profile.cardsCleared }}</td>
      </tr>
      <tr>
        <td>Description:</td>
        <td>{{ profile.desc }}</td>
      </tr>
    </table>

    <router-link :to="{ name: 'Home' }"><button class ="standalone-button btn btn-success">Return to My Collection</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'User',

  computed: {
    profile () {
      return this.$store.state.profile
    }
  },

  created () {
    this.$store.dispatch('getUserProfile', { id: this.$route.params.id })
  }
}
</script>

<style scoped>
  h2 {
    font-size: 1.9em;
    font-weight: bolder;
  }

  td:nth-child(odd) {
    font-weight: bold;
  }
</style>
