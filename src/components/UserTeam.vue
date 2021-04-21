<template>
  <section class="home-pg">
    <div class="profile-left">
      <h1>Profile-1</h1>
      <div class="squad-container">
        <div class="squad-title">
          <h1>My FPL Squad</h1>
        </div>
        <div class="squad-list text-center">
          <hr>
          <h2>Goalkeeper</h2>
            <!-- GK list -->
            <Goalkeeper
              :goalkeepers="goalkeepers"
            />
          <hr>
          <h2>Defender</h2>
            <!-- DF list -->
            <Defender
              :defenders="defenders"
            />
          <hr>
          <h2>Midfielder</h2>
            <!-- MF list -->
            <Midfielder
              :midfielders="midfielders"
            />
          <h2>Attacker</h2>
            <!-- ST list -->
            <Attacker
              :attackers="attackers"
            />
        </div>
      </div>
    </div>
    <div class="profile-right">
      <h1>Profile-2</h1>
      <div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/607e0c8139c28/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>
      <hr>
      <div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/607d15c623434/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>
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
