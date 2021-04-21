<template>
  <div class="container tournament_add">
    <h2>Register Tournament</h2>
    <form class="col-md-auto col-sm-auto">
      <div class="row">
        <div class="col-6 form-group">
            <label for="Name">Name</label>
            <input type="text" class="form-control" v-model="name" placeholder="Tournament's name">
        </div>
        <div class="form-group col-6">
            <label for="inputPassword">Game</label>
            <select class="form-select" v-model="selected">
              <option selected disabled>Open this select menu</option>
              <option value="R6">Rainbow 6 Siege</option>
              <option value="PUBG">Player Unknown BattleGround</option>
              <option value="DOTA2">Dota 2</option>
              <option value="APEX">Apex Legend</option>
            </select>
        </div>
      </div>
      <div class="form-group">
          <label for="inputPassword">Description</label>
          <textarea type="text" class="form-control" v-model="description" placeholder="Tournament's description"></textarea>
      </div>
      <button @click.prevent="AddTournament" type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'TournamentAdd',
  data () {
    return {
      name: '',
      selected: '',
      description: '',
    }
  },
  methods: {
    AddTournament () {
      let payload = {
        name: this.name,
        selected: this.selected,
        description: this.description
      }
      this.$store.dispatch('AddTournament', payload)
    }
  }
}
</script>

<style>
h2,
label {
  color: whitesmoke
}
.form-group {
  padding-top: 2em
}
.tournament_add {
  padding-top: 5em
}

button {
  margin-top: 2em;
}
</style>