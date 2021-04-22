<template>

  <div class="col-lg-6 col-md-6">
    <div class="central-meta">
      <div class="blog-post">
        <div class="friend-info">
          <figure>
            <img alt="" :src="thread.User.image" v-if="thread.User.image">
            <img src="https://mediate.co.id/wp-content/uploads/2021/01/user-icon-600x600.jpg" v-if="!thread.User.image" alt="">
          </figure>
          <!-- <figure v-if="!user.image"> -->
          <!-- </figure> -->
          <div class="friend-name">
            <!-- <div class="more">
              <div class="more-post-optns"><i class="fa fa-ellipsis-v"></i>
                <ul>
                  <li><i class="fa fa-pencil-square-o"></i>Edit Post</li>
                  <li><i class="fa fa-trash"></i>Delete Post</li>
                </ul>
              </div>
            </div> -->
            <ins><a title="">{{ thread.User.fullname }}</a></ins>
            <span><i class="fa fa-globe"></i> {{ getDate }} </span>
          </div>
          <div class="post-meta">
            <figure>
              <a title="" data-bs-toggle="modal" data-bs-target="#threadModal">
                <img alt="" :src="thread.image">	
              </a>
            </figure>												
            <div class="description">
              <a data-ripple="" class="learnmore" data-bs-toggle="modal" data-bs-target="#threadModal" @click.prevent="getThread(thread.id)">View Thread</a>
              <h2><a  title=""></a>
              {{ thread.title }}
              </h2>
              <p class="content">
                {{ thread.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import Thread from '../views/Thread'
export default {
  name: 'ThreadCard',
  props: ['thread'],
  // components: { Thread },
  methods: {
    getThread(id) {
      // console.log(id)
        this.$store.dispatch('getThread', id)
    }
  },
  computed: {
    getDate() {
        return this.thread.createdAt.split('T').shift()
    },
    getContent () {
        
    }
  }
}
</script>

<style>
.content{
overflow: hidden;
white-space: nowrap;
-o-text-overflow: ellipsis;
-ms-text-overflow: ellipsis;
text-overflow: ellipsis;
width: 350px;
 }
</style>