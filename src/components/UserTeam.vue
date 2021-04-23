<template>
  <section class="home-pg">
    <div class="profile-left">
      <div class="squad-container">
        <div class="squad-title">
          <h1>My FPL Squad</h1>
        </div>
        <div class="squad-list text-center">
          <hr>
          <h2>GOALKEEPER</h2>
            <!-- GK list -->
            <Goalkeeper
              :goalkeepers="goalkeepers"
            />
          <hr>
          <h2>DEFENDER</h2>
            <!-- DF list -->
            <Defender
              :defenders="defenders"
            />
          <hr>
          <h2>MIDFIELDER</h2>
            <!-- MF list -->
            <Midfielder
              :midfielders="midfielders"
            />
          <h2>ATTACKER</h2>
            <!-- ST list -->
            <Attacker
              :attackers="attackers"
            />
        </div>

    </div>
    </div>
  </section>
</template>

<script>
import Goalkeeper from '../components/Goalkeeper'
import Defender from '../components/Defender'
import Midfielder from '../components/Midfielder'
import Attacker from '../components/Attacker'
export default {
  name: 'UserTeam',
  components: {
    Goalkeeper, Defender, Midfielder, Attacker
  },
  computed: {
    players () {
      return this.$store.state.players
    },
    goalkeepers () {
      const keepers = []
      this.players.forEach(e => {
        if (e.Player.position === 'Goalkeeper') {
          keepers.push(e)
        }
      })
      return keepers
    },
    defenders () {
      const defenders = []
      this.players.forEach(e => {
        if (e.Player.position === 'Defender') {
          defenders.push(e)
        }
      })
      return defenders
    },
    midfielders () {
      const midfielders = []
      this.players.forEach(e => {
        if (e.Player.position === 'Midfielder') {
          midfielders.push(e)
        }
      })
      return midfielders
    },
    attackers () {
      const attackers = []
      this.players.forEach(e => {
        if (e.Player.position === 'Attacker') {
          attackers.push(e)
        }
      })
      return attackers
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
