<template>
  <div>
    <Navbar/>
      <div class="container-fluid my-3" style="background-color: rgba(245, 245, 245, 0.4);">
        <div class="block-1 my-3">
          <div class = "result">
            <div class = "result-box">
              <a href="#" class="btn btn-primary my-3">Playlists</a><br>
              <a href="#" class="btn btn-primary my-3">Songs</a>
            </div>
          </div>
        </div>
      </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from 'vue-hacktiv-footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.block-1 {
  height: 85vh
}

.footer {
  background-color: white;
}

.result {
    text-align: center;
    position: absolute;
    left: 50%;
    margin-left: -250px;
    top: 50%;
    margin-top: -250px;
}

.result-box {
    position: relative;
    height: 500px;
    width: 500px;
}
</style>
