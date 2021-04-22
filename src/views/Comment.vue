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
        <div class="card-body">
            <a class="card-link">Add Comment</a>
            <div class="add-comment">
            <input type="hidden" 
            class="form-control" 
            v-model="id"
            name="id"
            >
            <input type="hidden" 
            class="form-control" 
            v-model="UserId"
            name="UserId"
            >
            <input type="text" 
            class="form-control" 
            v-model="comment"
            name="comment"
            >
            <input type="hidden" 
            class="form-control" 
            v-model="articleTitle"
            name="articleTitle"
            >
            </div>
            <button type="button" @click.prevent="addComment" class="btn btn-dark">Submit</button>
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
    }
},
 computed: {
  comments () {
    // console.log(this.$store.state.comments, "di computed")
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