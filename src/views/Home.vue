<template>
  <section class="home-pg">
    <div class="home-left">
      <h1>Home-1</h1>
      <div style="width: 300px; height: 200px" v-html="highlights[1].link"></div>
      <div class="matches-container">
        <h1>GAMEWEEK 33</h1>
        <!-- Match-card -->
        <Match
          v-for="match in matches"
          :key="match.id"
          :match="match"
        />
      </div>
    </div>
    <div class="home-right">
      <h1>Home-2</h1>
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
            <tr>
              <th scope="row">1</th>
              <td>N'Golo Kanté</td>
              <td>Chelsea FC</td>
              <td>Midfielder</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Timo Werner</td>
              <td>Chelsea FC</td>
              <td>Attacker</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Declan Rice</td>
              <td>West Ham United</td>
              <td>Midfielder</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import Match from '../components/Match'
export default {
  name: 'Home',
  components: {
    Match
  },
  computed: {
    matches () {
      let i = 1
      const allMatches = this.$store.state.matches
      allMatches.forEach(e => {
        e.id = i++
      })
      return allMatches
    },
    highlights () {
      return this.$store.state.highlights
    }
  }
}
</script>
