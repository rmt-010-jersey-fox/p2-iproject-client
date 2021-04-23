<template>
  <div class="attacker my-3">
    <div v-for="(attacker, i) in attackers" :key="i" class="card card-player">
      <h5 class="card-header">Attacker</h5>
      <div class="card-body">
        <h5 class="card-title">{{ attacker.name }}</h5>
        <p class="card-text">{{ attacker.Club.name }}</p>
        <div class="btn-container">
          <a @click.prevent="changePlayer(attacker.PlayerId)" href="#" class="btn btn-warning">Change</a>
          <a @click.prevent="deletePlayer(attacker.PlayerId)" href="#" class="btn btn-warning">Delete</a>
        </div>
      </div>
    </div>

    <div v-if="attackers.length < 1" class="card card-noPlayer">
      <h5 class="card-header">Attacker</h5>
      <div class="card-body">
        <h5 class="card-title">No Player</h5>
        <p class="card-text">-</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-warning">Add Player</a>
      </div>
    </div>
    <div v-if="attackers.length < 2" class="card card-noPlayer">
      <h5 class="card-header">Attacker</h5>
      <div class="card-body">
        <h5 class="card-title">No Player</h5>
        <p class="card-text">-</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-warning">Add Player</a>
      </div>
    </div>
    <div v-if="attackers.length < 3" class="card card-noPlayer">
      <h5 class="card-header">Attacker</h5>
      <div class="card-body">
        <h5 class="card-title">No Player</h5>
        <p class="card-text">-</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-warning">Add Player</a>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Attacker',
  props: ['attackers'],
  data () {
    return {
      addPlayerPayload: {
        newPlayerId: ''
      },
      attackerChangePayload: {
        oldPlayerId: '',
        newPlayerId: ''
      }
    }
  },
  computed: {
    attackerOpt () {
      return this.$store.state.playersOptions.attackerOptions
    }
  },
  methods: {
    addPlayer () {
      const objAT = {}
      this.attackerOpt.forEach(e => {
        objAT[e.id] = e.name + ' - ' + e.Club.name
      })
      Swal.fire({
        title: 'Select Player',
        input: 'select',
        inputOptions: objAT,
        inputPlaceholder: 'Select a player',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (!value) {
              resolve('You need to select a player')
            } else {
              resolve()
            }
          })
        }
      })
        .then(res => {
          if (res.isConfirmed) {
            this.addPlayerPayload.newPlayerId = res.value
            return this.$store.dispatch('addPlayer', this.addPlayerPayload)
          }
        })
        .then(res => {
          this.$store.dispatch('getSquad')
        })
        .catch(err => {
          console.log(err)
        })
    },
    changePlayer (oldPlayerId) {
      const objAT = {}
      this.attackerOpt.forEach(e => {
        objAT[e.id] = e.name + ' - ' + e.Club.name
      })
      Swal.fire({
        title: 'Select Player',
        input: 'select',
        inputOptions: objAT,
        inputPlaceholder: 'Select a player',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (!value) {
              resolve('You need to select a player')
            } else {
              resolve()
            }
          })
        }
      })
        .then(res => {
          if (res.isConfirmed) {
            this.attackerChangePayload.newPlayerId = res.value
            this.attackerChangePayload.oldPlayerId = oldPlayerId
            return this.$store.dispatch('changePlayer', this.attackerChangePayload)
          }
        })
        .then(res => {
          this.$store.dispatch('getSquad')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deletePlayer (PlayerId) {
      this.$store.dispatch('deletePlayer', { PlayerId })
        .then(res => {
          this.$store.dispatch('getSquad')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
