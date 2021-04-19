<template>
  <div class="columns">
    <div class="column is-narrow">
    </div>
    <div class="column">
      <div class="box">
        <div class="columns">
          <div class="column is-8">
            <p class="title is-4 pb-1">{{anime}}</p>
            <ol class="subtitle" style="list-style-type: none" >
              <li class="is-size-6"><b>Character :</b> <b>{{character}}</b></li>
              <li class="is-size-6"><b>Quotes :</b> <b>{{quote}}</b></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'QuotesAnime',
  data () {
    return {
      image: `${this.list.image_url}`.replace(/'/g, '')
    }
  },
}
</script>

<style>

</style>