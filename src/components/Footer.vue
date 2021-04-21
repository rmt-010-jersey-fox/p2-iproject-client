<template>
  <footer style="background-color: #fafafa">
    <div class="container py-6">
      <div class="columns">
        <div class="column" style="margin-right: -200px; margin-left: -50px">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qjKai74V_KnI6dkHI6wAswAAAA%26pid%3DApi&f=1"
            alt="logo"
          />
        </div>

        <div class="column">
          <h3 class="has-text-weight-semibold is-size-5 pb-2"><u>About</u></h3>
          <div class="columns">
            <div class="column">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <span class="pl-3">Jl. Jalan-jalan aja, No.1</span>
              </span>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-phone"></i>
                </span>
                <span class="pl-3">021-120201</span>
              </span>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="pl-3">rsh-8@mail.com</span>
              </span>
            </div>
          </div>
        </div>

        <div class="column">
          <img
            width="150"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fdownload-app-icon-for-android-11.png&f=1&nofb=1"
            alt=""
          />
          <p>©️<strong>2021 RS. H-8</strong></p>
        </div>
      </div>
    </div>
    <HFooter></HFooter>
  </footer>
</template>

<script>
  import HFooter from "vue-hacktiv-footer";
  export default {
    components: { HFooter },
  };
</script>

<style></style>
