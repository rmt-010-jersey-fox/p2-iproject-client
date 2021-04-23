<template>
  <div class="col-lg-9">
    <div class="central-meta">
        <div class="title-block">
            <div class="row">
                <div class="col-lg-6">
                    <div class="align-left mt-3">
                       <i class="fa fa-calendar-day"></i>   <h5>Games Events</h5>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row mt-3">
                        <div class="col-lg-4 col-md-4 col-sm-4">
                        </div>
                        <div class="col-lg-8 col-md-7 col-sm-7">
                            <form method="post">
                                <!-- <input type="text" placeholder="Search.."> -->
                                <!-- <button type="submit"><i class="fa fa-search"></i></button> -->
                                <a class="addnewforum" data-bs-toggle="modal" data-bs-target="#exampleModal" title=""><i class="fa fa-plus"></i> Add New</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- title block -->
    <!-- <a class="addnewforum" data-bs-toggle="modal" data-bs-target="#exampleModal" title=""><i class="fa fa-plus"></i> Add New</a> -->
    <div class="central-meta">
        <div class="row">
            <div class="col-lg-12">
                <EventCard
                v-for="(event, id) in events"
                :key="id"
                :event="event"
                />
            </div>
        </div>
        <!-- <div class="lodmore">
            <button class="btn-view btn-load-more"></button>
        </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from './EventCard'
export default {
  name: 'Events',
  components: { EventCard },
  computed: {
      ...mapState(['events'])
  }
}
</script>

<style>

</style>