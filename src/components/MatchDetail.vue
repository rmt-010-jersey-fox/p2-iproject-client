<template>
  <div class="player-list container mt-5">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Club</th>
          <th scope="col">Position</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, i) in filterPlayers" :key="i">
          <th scope="row">1</th>
          <td>{{player.name}}</td>
          <td>{{player.Club.name}}</td>
          <td>{{player.Player.position}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MatchDetail',
  props: ['chosenClub'],
  computed: {
    filterPlayers () {
      const players = this.$store.state.players
      const result = players.filter(e => e.Club.name === this.chosenClub.homeTeam || e.Club.name === this.chosenClub.awayTeam)
      console.log(result)
      return result
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
