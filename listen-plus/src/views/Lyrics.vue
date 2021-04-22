<template>
  <div class="box">
    <!-- playlist detail -->
    <div class="container">
      <div class="rd-flex justify-content-center">
        <div class="col-6 text-center">
        <p>{{ lyrics }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Lyrics',
  computed: mapState(['lyrics']),
  methods: mapActions(['fetchLyrics']),
  created () {
    this.fetchLyrics()
  }
}
</script>
