<template>
  <section>
    <form class="myForm">
      
        <h1 style="color:#8167a9;">Edit Comment</h1><br>
        <input type="hidden" 
          class="form-control" 
          v-model="id"
          name="id"
        >
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
        <button type="button" @click.prevent="editComment" class="btn btn-dark">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
    name:'EditComment',
    data: () => ({
        id: '',
        articleTitle: '',
        comment: '',
    }),
    methods: {
      updatedData() {
        this.id = this.specificComment.id
        this.articleTitle = this.specificComment.articleTitle
      },
        editComment() {
            // console.log('masuk comment')
            this.$store.dispatch('editComment', {
                id: this.id,
                articleTitle: this.articleTitle,
                comment: this.comment,
            })
        }
    },
    computed: {
      specificComment() {
        console.log(this.$store.state.specificComment, "<<<computed")
        return this.$store.state.specificComment
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