<template>
<div>
  <div class="tournament-container container">
    <h1>Bracket for Game</h1>
    <div class="tournament-headers">
      <h3>Quarter-Finals</h3>
      <h3>Semi-Finals</h3>
      <h3>Finals</h3>
      <h3>Winner</h3>
    </div>

    <div class="tournament-brackets">
      <ul class="bracket bracket-1">
        <div class="1">
          <li class="team-item"> 0 | Nama Tim 
            <button>+Score</button>
            <button>Advanced</button>
          </li>
        </div>
        <div class="1">
          <li class="team-item"> 0 | Nama Tim 
            <button>+Score</button>
            <button>Advanced</button>
          </li>
        </div>
        <div class="1">
          <li class="team-item"> 0 | Nama Tim 
            <button>+Score</button>
            <button>Advanced</button>
          </li>
        </div>
        <div class="1">
          <li class="team-item"> 0 | Nama Tim 
            <button>+Score</button>
            <button>Advanced</button>
          </li>
        </div>
        <div class="1">
          <li class="team-item"> 0 | Nama Tim 
            <button>+Score</button>
            <button>Advanced</button>
          </li>
        </div>
        <div class="1">
          <li class="team-item"> 0 | Nama Tim 
            <button>+Score</button>
            <button>Advanced</button>
          </li>
        </div>
        <div class="1">
          <li class="team-item"> 0 | Nama Tim 
            <button>+Score</button>
            <button>Advanced</button>
          </li>
        </div>
      </ul>  
      <ul class="bracket bracket-2">
        <div class="1">
          <li class="team-item"> 0 | Nama Tim 
            <button>+Score</button>
            <button>Advanced</button>
          </li>
        </div>
        <div class="1">
          <li class="team-item"> 0 | Nama Tim 
            <button>+Score</button>
            <button>Advanced</button>
          </li>
        </div>
        <div class="1">
          <li class="team-item"> 0 | Nama Tim 
            <button>+Score</button>
            <button>Advanced</button>
          </li>
        </div>
        <div class="1">
          <li class="team-item"> 0 | Nama Tim 
            <button>+Score</button>
            <button>Advanced</button>
          </li>
        </div>
      </ul>  
      <ul class="bracket bracket-3">
        <div class="1">
          <li class="team-item"> 0 | Nama Tim 
            <button>+Score</button>
            <button>Advanced</button>
          </li>
        </div>
        <div class="1">
          <li class="team-item"> 0 | Nama Tim 
            <button>+Score</button>
            <button>Advanced</button>
          </li>
        </div>
      </ul>  
      <ul class="bracket bracket-4">
        <li class="team-item">Nama Tim</li>
      </ul>  
    </div>
  </div>
  <div class="container row justify-content-evenly" style="margin:auto">
    <TwitterBox/>
  </div>
</div>
</template>

<script>
import TwitterBox from '../components/Twitter'
export default {
  name: "Tournament",
  components: {
    TwitterBox
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