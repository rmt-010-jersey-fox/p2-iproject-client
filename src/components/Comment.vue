<template>
  <div class="card pe-0 text-white bg-dark m-1 col">
    <div class="mb-1 pt-1">
        <img style="width:25px" :src="`https://avatars.dicebear.com/api/micah/${com.UserId}.svg`" alt="">
    </div>
    <div class="card-body p-0 pb-1 d-flex">
      <div class="col md-11">
      {{ com.comment }}
      </div>
      <div v-if="UserId == com.UserId" class="col-md-1 align-self-center text-center">
        <i @click.prevent="removeComment(com.id)" class="far fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Comment',
  props: ['com'],
  computed: {
    ...mapState(['UserId'])
  },
  methods: {
    removeComment (id) {
      const MovieId = this.com.imdbId
      const input = { MovieId, id }
      this.$swal({
        title: 'Delete this comment?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => { // <--
        if (result.value) { // <-- if confirmed
          this.$store.dispatch('removeComment', input)
        }
      })
    }
  }
}
</script>

<style>
.comments {
  border-radius: 10px;
  background: #333;
  color: antiquewhite;
}

i {
  cursor: pointer;
}
</style>
