<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    Start: {}
  }
}
</script>

<style>
.end{
	color:aliceblue;
	font-size: 10rem;
	text-decoration: none;
	align-content: center;
	justify-content: center;
	text-align: center;


}
.start{
	color:aliceblue;
	font-size: 20rem;
	text-decoration: none;
	align-content: center;
	justify-content: center;
	text-align: center;
}
body {
	background: black;
	font-family: Consolas;
}

audio {
	display: none;
}

.clear {
	/* clear: both; */
}

#game {
	
	text-align: center;
}

#top {
	/* width: 960px; */
	margin: 0 auto;
}

#levels {
	float: right;
	list-style: none;
	margin: 0;
	padding: 0;
	color: white;
	text-align: right;
	/* margin-top: 40px; */
	font-size: 1.5rem;
}

.active {
	color: green !important;
	font-weight: bold;
	text-decoration: underline;
}

#options {
	/* width: 960px; */
	height: 70px;
	margin: 0 auto;
}

#question-box {
	background: #ddd;
	/* width: 960px; */
	margin: 0 auto;
	padding: 10px;
	font-size: 1.5em;
}

.big-text {
	color: #FF7E00;
	font-size: 1.2em;
	margin-right: 15px;
}
.answer-active{

	color: #FF7E00 !important;
	font-weight: bold;
	text-decoration: underline;
}
.answer-true{
	color: green !important;
	font-weight: bold;
	text-decoration: underline;
}
.answer-text{
	color:white
}
#money {
	font-size: 1.9em;
	font-weight: bold;
	color: green;
	float: right;
	display: block;
	height: 50px;
	padding-top: 20px;
}

#logo {
	height: 54vh;
	margin:auto;
	
	/* margin-left: 240px; */
	/* margin-top: 60px; */
}

#game-over {
	display: none;
	font-size: 8em;
	font-weight: bold;
	color: white;
	width: 980px;
	margin-top: 300px;
	margin: 0 auto;
	text-align: center;
}

#fifty {
	background: url('./assets/img/50-50.png') no-repeat 0 0;
}

#phone-friend {
	background: url('./assets/img/phone-friend.png') no-repeat 0 0;
}

#audience {
	background: url('./assets/img/audience.png') no-repeat 0 0;
}

#answer-box {
	color: white;
	font-size: 1.6em;
	text-align: left;
	width: 960px;
	
	margin-left: 18%;
	display:grid;
	grid-template-columns: 40vw 40vw
}

#pre-start {
	display: none;
}
.answer{
	display:table-column;
	margin-top:1em
}
.answer:hover {
	text-decoration: underline;
	cursor: pointer;
}

.options-button {
	width: 64px;
	height: 64px;
	margin-left: 12px;
	float: left;
	background-position: 0 0;
	cursor: pointer;
}
.options-button-used {
	width: 64px;
	height: 64px;
	margin-left: 12px;
	float: left;
	background-position: 0 -64px !important;
	cursor: pointer;
}

.options-button:hover {
	background-position: 0 -64px !important;
}
</style>
