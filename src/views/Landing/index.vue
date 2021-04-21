<template>
  <div>
    <v-container class="mt-6">
      <v-row align="center" justify="center" class="mt-6">
        <v-col>
          <v-img src="@/assets/illustration-1.png"></v-img>
        </v-col>
        <v-col>
          <h1 class="white--text text-center">Ekspresikan Dirimu Disini !</h1>
          <h3 class="warning--text text-center">
            Bergabunglah Bersama Yang Lainnya
          </h3>
          <v-col sm="6" offset-sm="3">
            <v-btn rounded depressed large block color="warning" class="my-6">
              <v-icon left class="black--text">mdi-information</v-icon>
              <strong class="black--text">Tentang Aplikasi Ini</strong>
            </v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="mt-6 white">
      <v-row align="center" justify="center" class="mt-6">
        <v-col>
          <h1 class="primary--text text-center">Kabari Orang-Orang Terdekat</h1>
          <h3 class="black--text text-center">Jarak Bukanlah Halangan</h3>
          <v-col sm="6" offset-sm="3">
            <v-btn rounded depressed large block color="primary" class="my-6">
              <v-icon left class="white--text">mdi-chat</v-icon>
              <strong class="white--text">Chat Dengan Temanmu</strong>
            </v-btn>
          </v-col>
        </v-col>
        <v-col>
          <v-img height="500" width="500" src="@/assets/chat.svg"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-footer dark padless>
      <v-card flat tile class="primary white--text text-center">
        <v-card-text> </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Made With <v-icon>mdi-heart</v-icon> By Indrafrds</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv-footer";
export default {
  name: "LandingPage",
  components: {
    HFooter,
  },
};
</script>

<style></style>
