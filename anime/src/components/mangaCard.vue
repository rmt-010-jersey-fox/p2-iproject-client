<template>
  <div class="columns">
    <div class="column is-narrow">
    </div>
    <div class="column">
    <div class="column is-12 is-flex is-align-items-center is-justify-content-center">
      <div class="box" style="width: 200px">
        <img :src= "image" alt="" class="image is-fullwidth">
      </div>
    </div>
      <div class="box">
        <div class="columns">
          <div class="column is-12" >
            <p class="title is-4 pb-1">{{manga.attributes.canonicalTitle}}</p>
            <ol class="subtitle" style="list-style-type: none" >
              <li class="is-size-6"><b>Status :</b> <b>"{{manga.attributes.status}}"</b></li>
              <li class="is-size-6"><b>Description :</b> <b>"{{manga.attributes.description}}"</b></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mangas',
  data () {
    return {
      image: `${this.manga.attributes.posterImage.medium}`.replace(/'/g, '')
    }
  },
  props: ['manga']
}
</script>

<style>

</style>
