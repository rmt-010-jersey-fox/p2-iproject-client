<template>
  <div class="goalkeeper my-3">
    <div v-for="(goalkeeper, i) in goalkeepers" :key="i" class="card card-player">
      <h5 class="card-header">Goalkeeper</h5>
      <div class="card-body">
        <h5 class="card-title">{{ goalkeeper.name }}</h5>
        <p class="card-text">{{ goalkeeper.Club.name }}</p>
        <a @click.prevent="changePlayer(goalkeeper.PlayerId)" href="#" class="btn btn-primary">Change Player</a>
      </div>
    </div>

    <div v-if="goalkeepers.length <= 1" class="card card-player">
      <h5 class="card-header">Goalkeeper</h5>
      <div class="card-body">
        <h5 class="card-title">Kosong</h5>
        <p class="card-text">Kosong</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-primary">Add Player</a>
      </div>
    </div>
    <div v-if="goalkeepers.length < 1" class="card card-player">
      <h5 class="card-header">Goalkeeper</h5>
      <div class="card-body">
        <h5 class="card-title">Kosong</h5>
        <p class="card-text">Kosong</p>
        <a @click.prevent="addPlayer" href="#" class="btn btn-primary">Add Player</a>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Goalkeeper',
  props: ['goalkeepers'],
  data () {
    return {
      addPlayerPayload: {
        newPlayerId: ''
      },
      goalkeeperChangePayload: {
        oldPlayerId: '',
        newPlayerId: ''
      }
    }
  },
  computed: {
    goalkeeperOpt () {
      return this.$store.state.playersOptions.goalkeeperOptions
    }
  },
  methods: {
    addPlayer () {
      const objGK = {}
      this.goalkeeperOpt.forEach(e => {
        objGK[e.id] = e.name + ' - ' + e.Club.name
      })
      Swal.fire({
        title: 'Select Player',
        input: 'select',
        inputOptions: objGK,
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
      const objGK = {}
      this.goalkeeperOpt.forEach(e => {
        objGK[e.id] = e.name + ' - ' + e.Club.name
      })
      Swal.fire({
        title: 'Select Player',
        input: 'select',
        inputOptions: objGK,
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
            this.goalkeeperChangePayload.newPlayerId = res.value
            this.goalkeeperChangePayload.oldPlayerId = oldPlayerId
            return this.$store.dispatch('changePlayer', this.goalkeeperChangePayload)
          }
        })
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
