<template>
  <div class="card" style="width: 18rem;">
    <div
    v-for="comm in comments"
    :key="comm.id"
    >
    <img src="" class="card-img-top" alt="">
        <div class="card-body">
            <input type="hidden" 
            class="form-control" 
            v-model="id"
            name="id"
            >
            <h5 class="card-title">{{comm.articleTitle}}</h5>
            <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{comm.User.username}} :</li>
            <li class="list-group-item">{{comm.comment}}</li>
        </ul>
        <div class="card-footer col text-center">
          <button type="button" @click.prevent="getEditComment(comm.id)" class="btn btn-light mr-3">Edit</button>
          <button type="button" @click.prevent="deleteComment(comm.id)" class="btn btn-light">Delete</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'Comment',
 data: () => ({
        id: '',
        UserId: '',
        comment: '',
        articleTitle: ''
 }),
 methods: {
   currentData() {
     const {id, UserId, comment, articleTitle} = this.comments
     this.id = id,
     this.UserId = UserId,
     this.comment = comment,
     this.articleTitle = articleTitle
   },
    addComment() {
        console.log('masuk add comment')
        this.$store.dispatch('addComment', {
            id: this.id,
            UserId: this.UserId,
            comment: this.comment,
            articleTitle: this.articleTitle
        })
    },
  deleteComment(id) {
     this.$store.dispatch('deleteComment', id)
   },
   getEditComment(id) {
     this.$store.dispatch('getEditComment', id)
   }
},
 computed: {
  comments () {
    console.log(this.$store.state.comments, "di computed")
    return this.$store.state.comments
  },
  articles () {
    return this.$store.state.articles
  }
 },
 created() {
  this.$store.dispatch('comments')
 }
}
</script>

<style>
.card{
  margin-top: 200px
}
</style>