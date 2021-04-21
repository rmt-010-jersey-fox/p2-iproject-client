<template>
  <div class="column">
    <div class="card pt-4" style="background-color: #fcc7ce">
      <div class="card-image" style="margin: 0 25vh 0 25vh">
        <figure class="image is-64x64">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YmeQKwm1FBGxiX5z2PlXKAHaHa%26pid%3DApi&f=1"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="card-header-title is-centered">
            <div>
              <p class="title is-4">{{ doctor.full_name }}</p>
              <p class="subtitle is-6">
                Sesi <strong> {{ doctor.session }} </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: ["doctor"],
  };
</script>

<style></style>
