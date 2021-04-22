<template>
  <div>
  <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    :title="trip.title"
    sub-title="Subtitle"
  >
    <b-card-text>
      {{ trip.description }}
    </b-card-text>
    <b-card-text>
      {{ trip.origin }} {{ trip.destination }} {{ trip.depatureDate }}
    </b-card-text>
  </b-card>
  <div class="d-flex justify-content-center">
  <b-button variant="outline-light">Edit</b-button> <b-button variant="outline-warning">Delete</b-button>
  </div>
</div>
</template>

<script>
export default {
  props: ['trip']
}
</script>

<style>
</style>
