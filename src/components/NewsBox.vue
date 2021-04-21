<template>
  <div style="width: 50%">
    <div class="card bg-dark" >
      <div class="card-body">
        <h6 style="color: white" class="card-title text-uppercase text-truncate py-2">
          Here's News About This Game
        </h6>
        <div v-for="(newss, i) in news" :key="i" class="items border bg-light border-dark" style="border-radius: 25px; margin-bottom: 1em">
          <!-- CARD HASIL LOOPING TERGANTUNG CATEGORY -->
          <div>
            <div class="card-body p-2">
              <a :href="newss.url">{{newss.title}}</a>
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
  name: 'NewsBox',
  props: ['news'],
  methods: {
    reloadnewsandtweet() {
      this.$store.dispatch('getTwitterAndNews', { id: this.$route.params.id })
    }
  },
}
</script>

<style>

</style>