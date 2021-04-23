<template>
  <div class="columns">
    <div class="column is-narrow">
      <div class="box" style="width: 200px">
        <img :src= "image" alt="" class="image is-fullwidth">
      </div>
    </div>
    <div class="column">
      <div class="box">
        <div class="columns">
          <div class="column is-8">
            <p class="title is-4 pb-1">{{list.title}}</p>
            <ol class="subtitle" style="list-style-type: none" >
              <li class="is-size-6"><b>status :</b> <b>{{list.status}}</b></li>
              <li class="is-size-6"><b>duration :</b> <b>{{list.duration}}</b></li>
              <li class="is-size-6"><b>score :</b> <b>{{list.score}}</b></li>
            </ol>
          </div>
          <div class="column is-4 is-flex is-align-items-center is-justify-content-center">
            <p class="buttons">
              <button class="button is-medium" @click.prevent= "getEdit">
                <span class="icon is-large">
                  <i class="fas fa-edit"></i>
                </span>
              </button>
              <button class="button is-medium" @click.prevent= "getDelete">
                <span class="icon is-large">
                  <i class="fas fa-trash-alt"></i>
                </span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListAnime',
  data () {
    return {
      image: `${this.list.image_url}`.replace(/'/g, '')
    }
  },
  methods: {
    getEdit () {
      const id = this.list.id
      this.$store.dispatch('getAnime', id)
      this.$router.push(`/editAnime/${id}`)
    },
    getDelete () {
      const id = this.list.id
      this.$swal.fire({
        title: 'Are you sure to delete this anime?',
        text: "Once delete, you can't restore this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'DELETE'
      })
        .then((res) => {
          if (res.isConfirmed) {
            this.$store.dispatch('destroyAnime', id)
              .then(res => {
                this.$swal.fire({
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  icon: 'success'
                })
                this.$store.dispatch('fetchAnime')
              })
              .catch(err => {
                this.$swal.fire({
                  icon: 'error',
                  title: `${err.response.status} ${err.response.statusText}`,
                  text: `${err.response.message}`,
                  timer: 5000
                })
              })
          }
        })
    }
  },
  props: ['list']
}
</script>

<style>
.columns {
  background-position: center center;
}
</style>
