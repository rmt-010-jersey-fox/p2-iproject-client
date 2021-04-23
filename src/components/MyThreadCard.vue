<template>
  <div class="col-lg-6 col-md-6">
    <div class="central-meta">
      <div class="blog-post">
        <div class="friend-info">
          <figure>
            <img alt="" :src="myThread.User.image" v-if="myThread.User.image">
            <img src="https://mediate.co.id/wp-content/uploads/2021/01/user-icon-600x600.jpg" v-if="!myThread.User.image" alt="">
          </figure>
          <div class="friend-name">
            <div class="more">
              <div class="more-post-optns"><i class="fa fa-ellipsis-v"></i>
                <ul>
                  <li @click.prevent="editThread(myThread.id)" data-bs-toggle="modal" data-bs-target="#editThreadModal"><i class="fa fa-pencil-square-o"></i>Edit Post</li>
                  <li @click.prevent="deleteThread(myThread.id)"><i class="fa fa-trash"></i>Delete Post</li>
                </ul>
              </div>
            </div>
            <ins><a title="" >{{ myThread.User.fullname }}</a></ins>
            <span><i class="fa fa-globe"></i> {{ getDate }} </span>
          </div>
          <div class="post-meta">
            <figure>
              <a title="" data-bs-toggle="modal" data-bs-target="#threadModal">
                <img alt="" :src="myThread.image">	
              </a>
            </figure>												
            <div class="description">
              <a data-ripple="" class="learnmore" @click.prevent="getThread(myThread.id)">View Thread</a>
              <h2><a  title=""></a>
              {{ myThread.title }}
              </h2>
              <p class="content">
                {{ myThread.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'MyThreadCard',
  props: ['myThread'],
  methods: {
    getThread(id) {
      this.$store.dispatch('getThread', id)
      setTimeout(() => { 
        this.$router.push({ name: 'Thread'})
      }, 500);
    },
    editThread(id) {
      this.$store.dispatch('getEditThread', id)
    },
    deleteThread(id) {
       
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteThread', id)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Thread has been deleted',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      
    }
  },
  computed: {
    getDate() {
        return this.myThread.createdAt.split('T').shift()
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