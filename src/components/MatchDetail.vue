<template>
  <div class="player-list container mt-5">
    <table class="table table-dark">
      <thead>
        <tr v-if="filterPlayers.length > 0">
          <th scope="col">Name</th>
          <th scope="col">Club</th>
          <th scope="col">Position</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, i) in filterPlayers" :key="i">
          <td>{{player.name}}</td>
          <td>{{player.Club.name}}</td>
          <td>{{player.Player.position}}</td>
        </tr>
      </tbody>
    </table>
      <div v-if="filterPlayers.length > 0" class="close-tabel-btn text-center">
        <a @click.prevent="closeTable" href="#"><x-circle-icon size="1.5x" class="custom-class"></x-circle-icon></a>
      </div>
  </div>
</template>

<script>
import { XCircleIcon } from 'vue-feather-icons'
export default {
  name: 'MatchDetail',
  props: ['chosenClub'],
  components: {
    XCircleIcon
  },
  computed: {
    filterPlayers () {
      const players = this.$store.state.players
      const result = players.filter(e => e.Club.name === this.chosenClub.homeTeam || e.Club.name === this.chosenClub.awayTeam)
      console.log(result)
      return result
    }
  },
  methods: {
    closeTable () {
      this.chosenClub.homeTeam = ''
      this.chosenClub.awayTeam = ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
