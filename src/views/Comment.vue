<template>
  <div class="card" style="width: 18rem;">
    <div
    v-for="comment in comments"
    :key="comment.id"
    >
    <img src="" class="card-img-top" alt="">
        <div class="card-body">
            <input type="hidden" 
            class="form-control" 
            v-model="id"
            name="id"
            >
            <h5 class="card-title">{{comment.articleTitle}}</h5>
            <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{comment.comment}}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
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
    addComment() {
        console.log('masuk comment')
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
    // console.log(this.$store.state.carts, "di computed")
    return this.$store.state.comments
  },
  articles () {
    return this.$store.state.articles
  }
 },
 created() {
  this.$store.dispatch('fetchComments')
 }
}
</script>

<style>

</style>