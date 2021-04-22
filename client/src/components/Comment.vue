<template>
  <!-- Comment Row -->
    <div class="d-flex flex-row comment-row m-t-0">
        <div class="p-2"><img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="user" width="50" class="rounded-circle"></div>
        <div class="comment-text w-100">
            <h6 class="font-medium">{{comment.User.username}}</h6> <span class="m-b-15 d-block">{{comment.content}}</span>
            <div class="comment-footer">
                <b-button v-b-modal="'patch-modal' + comment.id" type="button" class="btn btn-info btn-sm rounded-pill mr-2">Edit</b-button>
                 <b-modal @ok="handlePatch(comment.id)" @cancel="handleCancel(comment.id)" :id="'patch-modal' + comment.id">
                    <label for="content" class="form-label">Edit Comment</label>
                    <b-form-input v-model="content" lazy type="text" class="form-control" placeholder="Enter content..."></b-form-input>
                 </b-modal>
                <button type="button" @click="handleDelete(comment.id)" class="btn btn-danger btn-sm rounded-pill">Delete</button>
            </div>
        </div>
    </div> <!-- Comment Row -->
</template>

<script>
export default {
  name: 'Comment',
  props: ['comment'],
  data () {
    return {
      content: this.comment.content
    }
  },
  methods: {
    handleDelete (id) {
      this.$store.dispatch('deleteComment', {
        id,
        imageId: this.comment.Image.id
      })
    },
    handlePatch (id) {
      this.$store.dispatch('editContent', {
        id,
        content: this.content,
        imageId: this.comment.Image.id
      })
    },
    handleCancel (id) {
      this.content = this.comment.content
    }
  }

}
</script>

<style scoped>
/* COMMENT SECTION */

.mt-100 {
    margin-top: 70px
}

.mb-100 {
    margin-bottom: 100px
}

.card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0px solid transparent;
    border-radius: 0px
}

.card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem
}

.card .card-title {
    position: relative;
    font-weight: 600;
    margin-bottom: 10px
}

.comment-widgets {
    position: relative;
    margin-bottom: 10px
}

.comment-widgets .comment-row {
    border-bottom: 1px solid transparent;
    padding: 14px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 10px 0
}

.p-2 {
    padding: 0.5rem !important
}

.comment-text {
    padding-left: 15px
}

.w-100 {
    width: 100% !important
}

.m-b-15 {
    margin-bottom: 15px
}

.btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.76563rem;
    line-height: 1.5;
    border-radius: 1px
}

.btn-cyan {
    color: #fff;
    background-color: #27a9e3;
    border-color: #27a9e3
}

.btn-cyan:hover {
    color: #fff;
    background-color: #1a93ca;
    border-color: #198bbe
}

.comment-widgets .comment-row:hover {
    background: rgba(0, 0, 0, 0.05)
}

</style>
