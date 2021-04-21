<template>
  <div style="width: 50%">
    <div class="card bg-dark" >
      <div class="card-body">
        <h6 style="color: white" class="card-title text-uppercase text-truncate py-2">
          Whats Everyone Talkin About This Tournament??
        </h6>
        <div v-for="(twit, i) in twitt" :key="i" class="items border bg-light border-dark" style="border-radius: 25px; margin-bottom: 1em">
          <!-- CARD HASIL LOOPING TERGANTUNG CATEGORY -->
          <div>
            <div class="card-body p-2" style="text-align: left">
             <img width="30px" :src="avalink(twit.id)" >. {{twit.text}}
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwitterBox',
  props: ['twitt'],
  methods: {
    reloadnewsandtweet() {
      this.$store.dispatch('getTwitterAndNews', { id: this.$route.params.id })
    },
    avalink(number) {
      return `https://avatars.dicebear.com/api/human/${number}.svg`
    }
  },
  computed: {
    
  }
}
</script>

<style>

</style>