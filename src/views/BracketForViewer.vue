<template>
<div style="overflow:auto">
  <div v-if="bracket.length !== 0" class="tournament-container container">
    <br><h1>Bracket for Tournament {{tournament.name}}</h1><br>
    <div class="tournament-headers">
      <h3>Quarter-Finals</h3>
      <h3>Semi-Finals</h3>
      <h3>Finals</h3>
      <h3>Winner</h3>
    </div>

    <div class="tournament-brackets">
      <ul class="bracket bracket-1">
        <div class="1">
          <li class="team-item"> {{ bracket[0].score }} | {{ bracket[0].Team.name }}
          </li>
        </div>
        <div class="1">
          <li class="team-item"> {{ bracket[1].score }} | {{ bracket[1].Team.name }}
          </li>
        </div>
        <div class="1">
          <li class="team-item"> {{ bracket[2].score }} | {{ bracket[2].Team.name }}
          </li>
        </div>
        <div class="1">
          <li class="team-item"> {{ bracket[3].score }} | {{ bracket[3].Team.name }}
          </li>
        </div>
        <div class="1">
          <li class="team-item"> {{ bracket[4].score }} | {{ bracket[4].Team.name }}
          </li>
        </div>
        <div class="1">
          <li class="team-item"> {{ bracket[5].score }} | {{ bracket[5].Team.name }}
          </li>
        </div>
        <div class="1">
          <li class="team-item"> {{ bracket[6].score }} | {{ bracket[6].Team.name }}
          </li>
        </div>
        <div class="1">
          <li class="team-item"> {{ bracket[7].score }} | {{ bracket[7].Team.name }}
          </li>
        </div>
      </ul>  
      <ul class="bracket bracket-2">
        <div class="1">
          <li class="team-item"> {{ bracket9.score }} | {{ bracket9.Team.name }}
          </li>
        </div>
        <div class="1">
          <li class="team-item"> {{ bracket10.score }} | {{ bracket10.Team.name }}
          </li>
        </div>
        <div class="1">
          <li class="team-item"> {{ bracket11.score }} | {{ bracket11.Team.name }}
          </li>
        </div>
        <div class="1">
          <li class="team-item"> {{ bracket12.score }} | {{ bracket12.Team.name }}
          </li>
        </div>
      </ul>  
      <ul class="bracket bracket-3">
        <div class="1">
          <li class="team-item"> {{ bracket13.score }} | {{ bracket13.Team.name }}
          </li>
        </div>
        <div class="1">
          <li class="team-item"> {{ bracket14.score }} | {{ bracket14.Team.name }}
          </li>
        </div>
      </ul>  
      <ul class="bracket bracket-4">
        <li class="team-item">{{ bracket15.Team.name }}</li>
      </ul>  
    </div>
  </div>
  <div v-if="bracket.length !== 0" class="container row justify-content-evenly" style="margin:auto">
    <TwitterBox
      :twitt="newsandtweet.data.twitter.data"
    />
    <NewsBox
      :news="newsandtweet.data.steamnews.appnews.newsitems"
    />
    <button @click.prevent="reloadnewsandtweet()" type="button" class="btn btn-primary">Reload Tweet and News</button>
  </div>
</div>
</template>

<script>
import TwitterBox from '../components/Twitter'
import NewsBox from '../components/NewsBox'
export default {
  name: "BracketForViewer",
  components: {
    TwitterBox,
    NewsBox
  },
  computed: {
    bracket () {
      return this.$store.state.bracketforviewers
    },
    bracket9 () {
      let found
      this.bracket.forEach(el => { if (el.position == 9 && el.Team !== null) { found = el }})
      if (!found) {
        found = { Team: { name: 'Not Advanced Yet' }, score: 0 }
      }
      return found
    },
    bracket10 () {
      let found
      this.bracket.forEach(el => { if (el.position == 10 && el.Team !== null) { found = el }})
      if (!found) {
        found = { Team: { name: 'Not Advanced Yet' }, score: 0 }
      }
      return found
    },
    bracket11 () {
      let found
      this.bracket.forEach(el => { if (el.position == 11 && el.Team !== null) { found = el }})
      if (!found) {
        found = { Team: { name: 'Not Advanced Yet' }, score: 0 }
      }
      return found
    },
    bracket12 () {
      let found
      this.bracket.forEach(el => { if (el.position == 12 && el.Team !== null) { found = el }})
      if (!found) {
        found = { Team: { name: 'Not Advanced Yet' }, score: 0 }
      }
      return found
    },
    bracket13 () {
      let found
      this.bracket.forEach(el => { if (el.position == 13 && el.Team !== null) { found = el }})
      if (!found) {
        found = { Team: { name: 'Not Advanced Yet' }, score: 0 }
      }
      return found
    },
    bracket14 () {
      let found
      this.bracket.forEach(el => { if (el.position == 14 && el.Team !== null) { found = el }})
      if (!found) {
        found = { Team: { name: 'Not Advanced Yet' }, score: 0 }
      }
      return found
    },
    bracket15 () {
      let found
      this.bracket.forEach(el => { if (el.position == 15 && el.Team !== null) { found = el }})
      if (!found) {
        found = { Team: { name: 'Not Advanced Yet' } }
      }
      return found
    },

    tournament () {
      let Tournaments = this.$store.state.Tournament
      let Found = 'notournament'
      Tournaments.forEach(el => {
        if(el.id == this.$route.params.id) {
          Found = {
            name: el.name,
            game: el.game,
            id: el.id
          }
        }
      }) 
      return Found
    },

    newsandtweet () {
      return this.$store.state.NewsAndTwitt
    }
  },
  methods: {
    reloadnewsandtweet() {
      this.$store.dispatch('getTwitterAndNews', { id: this.$route.params.id })
    }
  },
  created () {
    this.$store.dispatch('FetchBracketForViewers', { TournamentId: this.$route.params.id })
    this.$store.dispatch('getTwitterAndNews', { id: this.$route.params.id })
  }
};
</script>

<style scoped>
html {
  height: 100%;
  width: 100%;
}

body {
  font-family: sans-serif;
  margin: 0;
  height: 100%;
}

h3,h1,li {
  color: whitesmoke;
}

.buttonaddtour {
  margin-bottom: 2em;
}

.tournament-headers {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
}

.tournament-brackets {
  display: flex;
  flex-direction: row; 
  list-style-type: none;
  background: #b8a7a777;
  margin-bottom: 50px;
}

.bracket {
  padding-left: 0;
  display: flex;
  margin: 0;
  padding: 30px 0;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-around;
  list-style-type: none;
  border-right: 1px dashed #ccc;
  flex: 1;
}

.team-item {
  background-color: #000000b6;
  padding: .5rem;
  display: block;
  margin: .5rem 10px;
  position: relative;
  line-height: 2;
  text-align: center;
}

.team-item:after {
  content:'';
  border-color: #ffffff;
  border-width: 2px;
  position: absolute;
  display: block;
  width: 10px;
  right: -11px;
}

.team-item:nth-of-type(odd):after {
  border-right-style: solid;
  border-top-style: solid;
  height: 100%;
  top: 50%;
}

.team-item:nth-of-type(even):after {
  border-right-style: solid;
  border-bottom-style: solid;
  height: 100%;
  top: -50%;
}

.team-item:before {
  content:'';
  border-top: 2px solid #ffffff;
  position: absolute;
  height: 2px;
  width: 10px;
  left: -10px;
  top: 50%;
}


.team-item time {
  display: inline-block;
  background-color: #ca83839f;
  font-size: .8rem;
  padding: 0 .6rem;
}
</style>