<template>
    <div class="section full-height">
      <div class="absolute-center">
        <div class="section">
          <div class="container"
          >
           	<ul class="list-unstyled" 
             v-for="article in articles" 
            :key="article.id"
             >
              <li class="media">
                <img :src="article.urlToImage" class="mr-3" alt="">
                
                
                <div class="media-body">
                  <h4 class="mt-0 mb-1">{{article.title}}</h4>
                  <h6>{{article.description}}</h6>
                  <a style="color:#8167a9;" :href="article.url" target="_blank">Read Full Article</a>
                </div>
              </li>
                  <button type="button" @click.prevent="addComment(article.title)" class="btn btn-dark">Discuss This Article Here</button>
            </ul>
          </div>		
        </div>
      </div>
    </div>
</template>
<script>

export default {
  name: 'Home',
  methods: {
    addComment(title) {
      console.log(title, "di home comment")
      this.$store.commit('showComment', title)
    }
  },
  computed: {
    articles() {
      // console.log(this.$store.state.articles, "computed")
      return this.$store.state.articles
    }
  },
  created() {
    this.$store.dispatch('fetchArticles')
  }
}
</script>

<style scoped>
  img {
    width: 400px;
    height: auto;
  }
  .btn {
    padding-inline: 104px;
  }
</style>
