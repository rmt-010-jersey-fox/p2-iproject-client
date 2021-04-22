<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100;300;500&display=swap');

* {
    margin: 0;
    padding: 0;
    font-family: 'Antonio', sans-serif;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

body {
    background-image: url('./assets/background.png');
    background-attachment: fixed;
    background-size: cover;
    overflow-x: hidden;
}
</style>
