<template>
  <div class="home">
    <Navbar></Navbar>
    <Carousel></Carousel>
    <FormSurah></FormSurah>
    <JadwalSolat></JadwalSolat>
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
  components: {
    Navbar,
    Carousel,
    FormSurah,
    JadwalSolat,
    FormHadist,
    HFooter
  }
}
</script>
