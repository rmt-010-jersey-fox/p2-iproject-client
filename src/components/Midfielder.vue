<template>
  <div class="midfielder my-3">
    <div v-for="(midfielder, i) in midfielders" :key="i" class="card card-player">
      <h5 class="card-header">Midfielder</h5>
      <div class="card-body">
        <h5 class="card-title">{{ midfielder.name }}</h5>
        <p class="card-text">{{ midfielder.Club.name }}</p>
        <div class="btn-container">
          <a @click.prevent="changePlayer(midfielder.PlayerId)" href="#" class="btn btn-primary">Change</a>
          <a @click.prevent="deletePlayer(midfielder.PlayerId)" href="#" class="btn btn-primary">Delete</a>
        </div>
      </div>
    </div>

    <div v-if="midfielders.length < 1" class="card card-player">
      <h5 class="card-header">Midfielder</h5>
      <div class="card-body">
        <h5 class="card-title">Kosong</h5>
        <p class="card-text">Kosong</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-primary">Add Player</a>
      </div>
    </div>
    <div v-if="midfielders.length < 2" class="card card-player">
      <h5 class="card-header">Midfielder</h5>
      <div class="card-body">
        <h5 class="card-title">Kosong</h5>
        <p class="card-text">Ksosong</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-primary">Add Player</a>
      </div>
    </div>
    <div v-if="midfielders.length < 3" class="card card-player">
      <h5 class="card-header">Midfielder</h5>
      <div class="card-body">
        <h5 class="card-title">Kosong</h5>
        <p class="card-text">Kosong</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-primary">Add Player</a>
      </div>
    </div>
    <div v-if="midfielders.length < 4" class="card card-player">
      <h5 class="card-header">Midfielder</h5>
      <div class="card-body">
        <h5 class="card-title">Kosong</h5>
        <p class="card-text">Ksosong</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-primary">Add Player</a>
      </div>
    </div>
    <div v-if="midfielders.length < 5" class="card card-player">
      <h5 class="card-header">Midfielder</h5>
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
  name: 'Midfielder',
  props: ['midfielders'],
  data () {
    return {
      addPlayerPayload: {
        newPlayerId: ''
      },
      midfielderChangePayload: {
        oldPlayerId: '',
        newPlayerId: ''
      }
    }
  },
  computed: {
    midfielderOpt () {
      return this.$store.state.playersOptions.midfielderOptions
    }
  },
  methods: {
    addPlayer () {
      const objMF = {}
      this.midfielderOpt.forEach(e => {
        objMF[e.id] = e.name + ' - ' + e.Club.name
      })
      Swal.fire({
        title: 'Select Player',
        input: 'select',
        inputOptions: objMF,
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
      const objMF = {}
      this.midfielderOpt.forEach(e => {
        objMF[e.id] = e.name + ' - ' + e.Club.name
      })
      Swal.fire({
        title: 'Select Player',
        input: 'select',
        inputOptions: objMF,
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
            this.midfielderChangePayload.newPlayerId = res.value
            this.midfielderChangePayload.oldPlayerId = oldPlayerId
            return this.$store.dispatch('changePlayer', this.midfielderChangePayload)
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
