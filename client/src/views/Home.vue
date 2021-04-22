<template>
  <div class="container">
    <div class="row row-cols-12">
    <div class="col-6 text-light">
      <div class="getWellSoon">
        <h2 class="text-center">Get Well Soon, Earth!</h2>
      </div>
      <div class="main-left pt-4">
        <h2 class="lh-sm">Let's Help The Earth. <br><span>Starts From Us!</span></h2>
        <p>how do you fight something you can't see? That's the question when it comes to the Covid-19 crisis which currently has many of us holed up at home.</p>
        <button class="getWellSoonButton" @click="getNews">News</button>
      </div>
    </div>
    <div class="col-6 text-light">
      <img src="https://media1.giphy.com/media/ieJMJGqJWIoyuCzdDj/giphy.gif" alt="" width="490px" style="position:relative;left:50px;bottom:52px">
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    getNews () {
      this.$router.push('/news')
      this.$store.dispatch('showNews')
    }
  }
}
</script>

<style scoped>
.container{
  position: relative;
  width: 100%;
  height: 100%;
}

.getWellSoon {
  padding: 4px;
  width: 350px;
  background-color: #2BA5F6;
  border-radius: 12px;
}

.main-left h2{
  color: #E968C5;
}

.main-left p{
  color: #71747D;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
}

.getWellSoon h2{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  color: white;
  position: relative;
  top: 3px;
}

.getWellSoonButton{
  border-radius: 10px;
  padding: 12px 32px;
  background: #2BA5F6;
  border:none;
  color: white;
  font-size: 20px;
  font-weight: 600;
  transition: 0.8s;
}

.getWellSoonButton:hover{
  cursor: pointer;
  transform: scale(1.15);
  transition: 1s;
}
</style>
