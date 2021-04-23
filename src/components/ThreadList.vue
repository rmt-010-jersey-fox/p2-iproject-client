<template>
  <div class="col-lg-9">
    <div class="central-meta">
      <div class="title-block">
        <div class="row">
          <div class="col-lg-6">
            <div class="align-left">
              <div class="mt-3">
                <i class="fa fa-fire"></i> <h5>Hot Thread</h5>
              </div> 
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row merged20">
              <div class="col-lg-4 col-md-4 col-sm-4">
              </div>
              <div class="col-lg-8 col-md-7 col-sm-7 ">
                <div class="mt-3 mb-2">
                  <form method="post">
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- title block -->
    <div class="row merged20">
      <ThreadCard
      v-for="(thread, id) in threads"
      :key="id"
      :thread="thread"
      />
    </div>
    <!-- <div class="lodmore">
      <span>Viewing 1-6 of 44 posts</span>
      <button class="btn-view btn-load-more"></button>
    </div> -->
    <!-- <Thread/> -->
  </div><!-- centerl meta -->
</template>

<script>
import { mapState } from 'vuex'
import ThreadCard from '../components/ThreadCard'
export default {
  name: 'Thread',
  components: { ThreadCard },
  computed: {
    ...mapState(['threads'])
  }
}
</script>

<style>

</style>