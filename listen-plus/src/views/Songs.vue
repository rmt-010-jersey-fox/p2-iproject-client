<template>
  <div class="home">
    <Navbar />
    <!-- Page Contents -->
    <section>
      <div class="container">
        <div class="row page-title border-bottom">
          <h4>Songs</h4>
        </div>
      </div>
      <!-- Content -->
      <div class="container" id="table-data" style="overflow-y: auto;">
        <CardToAdd v-for="song in songs"
        :key="song.id"
        :song="song"
        />
      </div>
    </section>
    <HFooter></HFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import CardToAdd from '@/components/CardToAdd'
import Navbar from '@/components/Navbar'
import HFooter from 'vue-hacktiv-footer'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Songs',
  components: {
    CardToAdd,
    Navbar,
    HFooter
  },
  computed: mapState(['songs']),
  methods: mapActions(['fetchData']),
  created () {
    this.fetchData()
  }
}
</script>
