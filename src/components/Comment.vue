<template>
  <div class="card text-white bg-dark m-1 col">
    <div class="card-body d-flex">
      <div class="col md-11">
      {{ com.comment }}
      </div>
      <div v-if="UserId == com.UserId" class="col-md-1 align-self-center text-end">
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
      this.$store.dispatch('removeComment', input)
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
