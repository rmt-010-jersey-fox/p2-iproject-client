<template>
  <div class="event-box">
      <div class="row merged20">
          <div class="col-lg-4 col-md-4 col-sm-5">
              <figure class="event-thumb">
                  <img :src="event.image" alt="">
                  </figure>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-5">
              <div class="event-title">
                  <span><i class="fa fa-clock-o"></i> {{ getTime }}</span>
                  <h4><a href="#" title="">{{ event.title }}</a></h4>
                  <p>{{ event.content }}</p>
              </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2">
              <div class="event-time">
                  <span class="event-date">{{ getDate }}</span>
              </div>	
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: ['event'],
  computed: {
      getTime() {
            return this.event.date.split('T').pop().split('.').shift()
      },
      getDate() {
          return this.event.date.split('T').shift()
      }
  }
}
</script>

<style>

</style>