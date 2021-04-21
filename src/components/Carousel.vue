<template>
  <section>
    <b-carousel
      v-model="carousel"
      :animated="animated"
      :has-drag="drag"
      :autoplay="autoPlay"
      :pause-hover="pauseHover"
      :pause-info="pauseInfo"
      :pause-info-type="pauseType"
      :interval="interval"
      :repeat="repeat"
    >
      <b-carousel-item v-for="(news, i) in newss" :key="i">
        <section :class="`hero is-small is-bold`">
          <div class="hero-body p-0">
            <div class="content">
              <div class="columns">
                <div class="column">
                  <a>
                    <img
                      :src="news.image"
                      style="width: 40vw; height: 30vw; object-fit: cover"
                    />
                  </a>
                </div>
                <div class="column">
                  <h1>{{ news.title }}</h1>
                  <h2>{{ news.author }}</h2>
                  <p>
                    {{ news.description }}
                  </p>
                  <b-button @click="openNewTab(news.url)" type="is-text"
                    >more</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  name: "Carousel",
  props: ["newss"],
  data() {
    return {
      carousel: 0,
      animated: "fade",
      drag: false,
      autoPlay: true,
      pauseHover: false,
      pauseInfo: false,
      repeat: false,
      pauseType: "is-primary",
      interval: 3000,
    };
  },
  methods: {
    openNewTab(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style>
</style>
