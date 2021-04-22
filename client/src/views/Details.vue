<template>
   <!-- DETAIL PAGE -->
    <section id="detail-page">
        <div class="container mt-5">
            <h1 class="mb-3">DETAIL</h1>
            <hr>
            <div class="d-flex flex-column justify-content-center align-items-center">
                <img class="mb-3" :src="currentImage.imgUrl" alt="" style="width: 50%;">
                <p class="h3 text-muted mb-3">Description: {{currentImage.description}}</p>
                <p class="h4 text-muted mb-3">{{currentImage.User.username}}</p>
                <div class="d-flex justify-content-center align-items-center">
                    <button v-if="page === 'Home'" @click="handleFavourite(currentImage.id)" class="btn btn-success mb-3 mr-3">ADD TO FAVORITES</button>
                    <button v-if="page === 'Gallery'" @click="handleEdit" class="btn btn-info mb-3 mr-3">EDIT IMAGE</button>
                    <b-button v-if="page === 'Gallery'" v-b-modal="'edit-modal'" class="btn btn-info mb-3 mr-3">EDIT DESCRIPTION</b-button>
                    <b-modal id="edit-modal" @cancel="handleCancel(currentImage.id)" @ok="handleDesc(currentImage.id)">
                        <div class="mb-3">
                          <label for="description" class="form-label">Description</label>
                          <b-form-input v-model="currentImage.description" type="text" class="form-control" placeholder="Enter description..."></b-form-input>
                        </div>
                    </b-modal>
                    <button v-if="page === 'Gallery'" @click="handleDelete(currentImage.id)" class="btn btn-danger mb-3 mr-3">DELETE</button>
                </div>
            </div>

            <!-- COMMENT SECTION -->
        <div class="row d-flex justify-content-center mt-100 mb-100">
            <div class="col-lg-6 ">
                <div class="card" style="background-color: #ff971d;">
                    <div class="card-body text-center">
                        <h4 class="card-title mb-3">Latest Comments</h4>
                        <b-button v-b-modal="'post-comment'" class="btn rounded-pill" style="background-color: blue">POST COMMENT</b-button>
                        <b-modal id="post-comment" @ok="handleComment(currentImage.id)">
                            <div class="mb-3">
                                <label for="comment" class="form-label">Comment</label>
                                <b-form-input v-model="content" type="text" class="form-control" placeholder="Enter content..."></b-form-input>
                            </div>

                        </b-modal>
                    </div>
                    <div class="comment-widgets">
                        <!-- Comment Row -->
                       <Comment
                       v-for="comment in comments"
                       :key="comment.id"
                       :comment="comment"
                       >
                        </Comment>

                    </div> <!-- Card -->
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import Comment from '../components/Comment'
export default {
  name: 'Details',
  data () {
    return {
      content: ''
    }
  },
  components: {
    Comment
  },
  computed: {
    currentImage () {
      return this.$store.state.currentImage
    },
    comments () {
      return this.$store.state.comments
    },
    page () {
      return this.$store.state.page
    }
  },
  methods: {
    handleFavourite (id) {
      this.$store.dispatch('addFavourite', {
        id
      })
    },
    handleEdit () {
      this.$router.push('/edit')
    },
    handleDesc (id) {
      this.$store.dispatch('editDescription', {
        id,
        description: this.currentImage.description
      })
    },
    handleCancel (id) {
      this.$store.dispatch('findImage', {
        id
      })
    },
    handleDelete (id) {
      this.$store.dispatch('deleteImage', {
        id
      })
    },
    handleComment (id) {
      this.$store.dispatch('postComment', {
        imageId: id,
        content: this.content
      })
      this.content = ''
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
