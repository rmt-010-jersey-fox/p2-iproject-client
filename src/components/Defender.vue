<template>
  <div class="defender my-3">
    <div v-for="(defender, i) in defenders" :key="i" class="card card-player">
      <h5 class="card-header">Defender</h5>
      <div class="card-body">
        <h5 class="card-title">{{ defender.name }}</h5>
        <p class="card-text">{{ defender.Club.name }}</p>
        <div class="btn-container">
          <a @click.prevent="changePlayer(defender.PlayerId)" href="#" class="btn btn-primary">Change</a>
          <a @click.prevent="deletePlayer(defender.PlayerId)" href="#" class="btn btn-primary">Delete</a>
        </div>
      </div>
    </div>

    <div v-if="defenders.length < 1" class="card card-player">
      <h5 class="card-header">Defender</h5>
      <div class="card-body">
        <h5 class="card-title">Kosong</h5>
        <p class="card-text">Kosong</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-primary">Add Player</a>
      </div>
    </div>
    <div v-if="defenders.length < 2" class="card card-player">
      <h5 class="card-header">Defender</h5>
      <div class="card-body">
        <h5 class="card-title">Kosong</h5>
        <p class="card-text">Ksosong</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-primary">Add Player</a>
      </div>
    </div>
    <div v-if="defenders.length < 3" class="card card-player">
      <h5 class="card-header">Defender</h5>
      <div class="card-body">
        <h5 class="card-title">Kosong</h5>
        <p class="card-text">Kosong</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-primary">Add Player</a>
      </div>
    </div>
    <div v-if="defenders.length < 4" class="card card-player">
      <h5 class="card-header">Defender</h5>
      <div class="card-body">
        <h5 class="card-title">Kosong</h5>
        <p class="card-text">Ksosong</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-primary">Add Player</a>
      </div>
    </div>
    <div v-if="defenders.length < 5" class="card card-player">
      <h5 class="card-header">Defender</h5>
      <div class="card-body">
        <h5 class="card-title">Kosong</h5>
        <p class="card-text">Ksosong</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-primary">Add Player</a>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Defender',
  props: ['defenders'],
  data () {
    return {
      addPlayerPayload: {
        newPlayerId: ''
      },
      defenderChangePayload: {
        oldPlayerId: '',
        newPlayerId: ''
      }
    }
  },
  computed: {
    defenderOpt () {
      return this.$store.state.playersOptions.defenderOptions
    }
  },
  methods: {
    addPlayer () {
      const objDF = {}
      this.defenderOpt.forEach(e => {
        objDF[e.id] = e.name + ' - ' + e.Club.name
      })
      Swal.fire({
        title: 'Select Player',
        input: 'select',
        inputOptions: objDF,
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
      const objDF = {}
      this.defenderOpt.forEach(e => {
        objDF[e.id] = e.name + ' - ' + e.Club.name
      })
      Swal.fire({
        title: 'Select Player',
        input: 'select',
        inputOptions: objDF,
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
            this.defenderChangePayload.newPlayerId = res.value
            this.defenderChangePayload.oldPlayerId = oldPlayerId
            return this.$store.dispatch('changePlayer', this.defenderChangePayload)
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
