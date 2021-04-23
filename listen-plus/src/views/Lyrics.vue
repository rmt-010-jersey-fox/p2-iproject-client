<template>
  <div class="box">
    <section>
      <div id="nav">
        <router-link to="/playlist">Back To Playlist</router-link>
      </div>
      <!-- lyrics -->
      <div class="container d-flex justify-content-center">
        <div class="lyrics-box col-6 text-center" style="overflow-y: auto; height: 500px;">
          <h2>Lyrics</h2>
          <p>{{ lyrics }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Lyrics',
  computed: mapState(['lyrics'])
}
</script>

<style>
#nav a {
  font-weight: bold;
  color: #000000;
}
</style>
