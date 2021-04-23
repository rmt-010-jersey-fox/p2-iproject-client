<template>
  <div>
    <v-container class="mt-6">
      <v-row align="center" justify="center" class="mt-6">
        <v-col>
          <v-img src="@/assets/illustration-1.png"></v-img>
        </v-col>
        <v-col>
          <h1 class="white--text text-center">
            Beragam Inspirasi Ada Disini !
          </h1>
          <h3 class="warning--text text-center">
            Bergabunglah Bersama Yang Lainnya
          </h3>
          <v-col sm="6" offset-sm="2">
            <v-btn
              rounded
              depressed
              large
              block
              color="warning"
              class="my-6"
              @click.prevent="$router.push('/explore').catch(() => {})"
            >
              <v-icon left class="black--text">mdi-earth</v-icon>
              <strong class="black--text">Explore Karya-Karya Terbaik</strong>
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
            <v-btn
              rounded
              depressed
              large
              block
              color="primary"
              class="my-6"
              @click.prevent="$router.push('/chat').catch(() => {})"
            >
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
    <v-footer padless>
      <v-col class="text-center" cols="12">
        <v-icon>mdi-copyright</v-icon> MaiPren App |
        <strong> by Indrafrds</strong> - {{ new Date().getFullYear() }}
      </v-col>
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
