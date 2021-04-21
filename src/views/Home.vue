<template>
  <div class="home">
    <Navbar></Navbar>
    <Carousel></Carousel>
    <FormSurah></FormSurah>
    <JadwalSolat :jadwalSolat="jadwalSolat"></JadwalSolat>
    <FormHadist></FormHadist>
    <HFooter></HFooter>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import FormSurah from '@/components/FormSurah'
import JadwalSolat from '@/components/JadwalSolat'
import FormHadist from '@/components/FormHadist'
import HFooter from 'vue-hacktiv-footer'

export default {
  name: 'Home',
  data () {
    return {
      place: '',
      date: ''
    }
  },
  components: {
    Navbar,
    Carousel,
    FormSurah,
    JadwalSolat,
    FormHadist,
    HFooter
  },
  created () {
    this.getJadwalSolatUp()
  },
  methods: {
    getJadwalSolatUp () {
      this.$store.dispatch('fetchJadwalSolat')
    }
  },
  computed: {
    jadwalSolat () {
      return this.$store.state.jadwalSolat
    }
  }
}
</script>
