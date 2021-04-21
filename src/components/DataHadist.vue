<template>
      <!-- Card Hadist -->
    <div class="col mb-3">
      <div class="text-center mb-2">
        <button class="btn btn-danger" @click.prevent='toHomePage'>Back</button>
      </div>
      <div class="card">
        <div class="card-header">
          {{hadist.result.data.name}} No. {{hadist.result.data.contents.number}}
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p><q>
              {{hadist.result.data.contents.arab}}
            </q></p>
            <p>Artinya:
              {{hadist.result.data.contents.id}}
            </p>
            <footer class="blockquote-footer">{{hadist.result.data.name}} No. {{hadist.result.data.contents.number}}</footer>
          </blockquote>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DataHadist',
  props: ['hadist'],
  methods: {
    toHomePage () {
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>

<style>

</style>
