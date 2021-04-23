<template>
  <section class="home-pg">
    <div class="home-left">
      <div class="matches-container">
        <div class="gw-setter mt-5">
          <div>
            <a @click.prevent="decrement" href="#"><chevron-left-icon size="2.5x" class="custom-class"></chevron-left-icon></a>
          </div>
          <div>
            <h1>GAMEWEEK {{count}}</h1>
          </div>
          <div>
            <a @click.prevent="increment" href="#"><chevron-right-icon size="2.5x" class="custom-class"></chevron-right-icon></a>
          </div>
        </div>
        <!-- Match-card -->
        <Match
          v-for="match in matches"
          :key="match.id"
          :match="match"
          @setChosenClubs="setChosenClubs"
        />
      </div>
    </div>
    <div class="home-right">
      <MatchDetail
        v-if="chosenClub.homeTeam && chosenClub.awayTeam"
        :chosenClub="chosenClub"
        class="detail-table"
      />
      <Highlights />
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import { ChevronLeftIcon, ChevronRightIcon } from 'vue-feather-icons'
import Match from '../components/Match'
import Highlights from '../components/Highlights'
import MatchDetail from '../components/MatchDetail'
export default {
  name: 'Home',
  components: {
    Match, Highlights, ChevronLeftIcon, ChevronRightIcon, MatchDetail
  },
  data () {
    return {
      chosenClub: {
        homeTeam: '',
        awayTeam: ''
      }
    }
  },
  computed: {
    matches () {
      let i = 1
      const allMatches = this.$store.state.matches
      allMatches.forEach(e => {
        e.id = i++
        e.date = moment(String(e.date)).format('MM/DD/YYYY hh:mm A')
      })
      return allMatches
    },
    highlights () {
      return this.$store.state.highlights
    },
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
        .then(res => {
          this.$store.dispatch('getMatches')
        })
        .catch(err => {
          console.log(err)
        })
    },
    decrement () {
      this.$store.dispatch('decrement')
        .then(res => {
          this.$store.dispatch('getMatches')
        })
        .catch(err => {
          console.log(err)
        })
    },
    setChosenClubs (home, away) {
      this.chosenClub = {
        homeTeam: home,
        awayTeam: away
      }
      console.log(this.chosenClub, 'chosenClub')
    }
  }
}
</script>
