<template>
  <div class="match-card">
    <div class="date">
      <p>{{ match.date }}</p>
    </div>
    <div class="detail">
      <div class="detail-match">
        <p class="team">{{ match.homeTeam }}</p>
      </div>
      <div class="score-board">
        <p class="score">{{ match.homeTeamScore }}</p>
      </div>
      <div class="score-board">
        <p class="score">{{ match.awayTeamScore }}</p>
      </div>
      <div class="detail-match">
        <p class="team">{{ match.awayTeam }}</p>
      </div>
    </div>
    <div>
      <div class="text-center">
        <a @click.prevent="setDetails" href="#" class="btn btn-warning" style="width: 70%">Details</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Match',
  props: ['match'],
  methods: {
    setDetails () {
      this.$emit('setChosenClubs', this.match.homeTeam, this.match.awayTeam)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
