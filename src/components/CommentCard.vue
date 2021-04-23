<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">Username : {{comment.username}}</div>
    <div class="card-body" v-if="!bukaEditor">
      <h5 class="card-title">{{comment.comment}}</h5>
    </div>
    <div class="input-group" v-if="bukaEditor">
      <textarea v-model="commentInEditor" class="form-control text-center" aria-label="With textarea"></textarea>
    </div>
    <div class="card-footer"  v-if="comment.username==username">
      <button v-if="!bukaEditor" @click.prevent="openEditor()" class="btn-warning">Edit My Comment</button>
      <button v-if="!bukaEditor" @click.prevent="deleteComment()" class="btn-danger ms-4">Delete My Comment</button>
      <button v-if="bukaEditor" @click.prevent="editComment()" class="btn-warning">Submit</button>
      <button v-if="bukaEditor" @click.prevent="closeEditor()" class="btn-info ms-4">Cancel Edit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentCard',
  props: ['comment'],
  data () {
    return {
      commentInEditor: this.comment.comment,
      bukaEditor: false
    }
  },
  computed: {
    username () {
      return this.$store.state.username
    }
  },
  methods: {
    deleteComment () {
      this.$store.dispatch('deleteComment', this.$route.params.isbn)
    },
    editComment () {
      this.bukaEditor = false
      const payload = {
        isbn: this.$route.params.isbn,
        comment: this.commentInEditor
      }
      this.$store.dispatch('editComment', payload)
    },
    openEditor () {
      this.bukaEditor = true
    },
    closeEditor () {
      this.bukaEditor = false
    }
  }
}
</script>

<style>

</style>
