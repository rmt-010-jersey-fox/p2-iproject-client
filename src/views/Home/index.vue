<template>
  <section>
    <Banner />
    <div class="container mb-6">
      <!-- BANNER -->
      <!-- COVID -->
      <Covid />
      <!-- Main Action -->
      <div class="box">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child">
              <p class="title">RS. H-8</p>
              <p class="subtitle">Melayani sepenuh hati</p>
            </article>
          </div>
          <HospitalAction />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import HospitalAction from "./components/HospitalAction.vue";
  import Covid from "./components/Covid.vue";
  import Banner from "./components/Banner.vue";
  export default {
    name: "Home",
    components: {
      HospitalAction,
      Covid,
      Banner,
    },
  };
</script>
