<template>
  <section>
    <form class="myForm">
      
        <h1 style="color:#8167a9;">Add Comment</h1><br>
        <input type="hidden" 
          class="form-control" 
          v-model="articleTitle"
          name="articleTitle"
        >
        <div class="form-group text-light">
          <label for="comment">Comment</label>
          <input type="comment" 
          class="form-control" 
          v-model="comment"
          >
        </div>
        <button type="button" @click.prevent="addComment" class="btn btn-dark">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
 name: 'AddComment',
 data: () => ({
      articleTitle: '',
      comment: '',
    }),
    methods: {
        updatedData() {
        // console.log(this.showComment, "<<title updated data")
        this.articleTitle = this.showComment
        // console.log(this.articleTitle, "<<<this.article title")
        },
        addComment() {
            // console.log('masuk comment')
            this.$store.dispatch('addComment', {
                articleTitle: this.articleTitle,
                comment: this.comment,
            })
        }
    },
    computed: {
        showComment () {
            // console.log(this.$store.state.comments, "<<di computed add")
            return this.$store.state.comments
        }
    },
    created () {
      this.updatedData()
      this.$store.dispatch('fetchComments')
    }
}
</script>

<style>
 .myForm {
  min-width: 500px;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  margin-top: 50px;
}
@media (max-width: 500px) {
  .myForm {
    min-width: 90%;
    }
}
</style>