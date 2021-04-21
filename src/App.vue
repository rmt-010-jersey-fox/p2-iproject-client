<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

body {
    background-image: url('./assets/background.png');
    background-attachment: fixed;
    background-size: cover;
    color: white;
    overflow-x: hidden;
}
</style>
