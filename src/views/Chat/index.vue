<template>
  <div>
    <v-container>
      <v-row class="mt-6">
        <v-col sm="4" offset-sm="1">
          <v-card rounded="l-xl" height="70vh" class="success" flat>
            <v-card-title class="ml-6 primary--text"
              ><b>Available Chats</b></v-card-title
            >
            <v-card
              rounded="xl"
              width="45vh"
              height="10vh"
              flat
              class="white ml-6 my-6"
            >
              <v-row align="center">
                <v-col sm="4">
                  <v-avatar color="primary" size="50" class="ml-3">
                    <v-img
                      src="https://avatars.dicebear.com/api/micah/userrr.svg"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col>
                  <h3 class="primary--text">@indra</h3>
                </v-col>
              </v-row>
            </v-card>
            <v-card
              rounded="xl"
              width="45vh"
              height="10vh"
              flat
              class="white ml-6 my-6"
            >
              <v-row align="center">
                <v-col sm="4">
                  <v-avatar color="primary" size="50" class="ml-3">
                    <v-img
                      src="https://avatars.dicebear.com/api/micah/soid.svg"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col>
                  <h3 class="primary--text">@indralagi</h3>
                </v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            rounded="r-xl"
            height="70vh"
            class="white"
            flat
            style="margin-left: -30px"
          >
            <v-container>
              <!-- Chat Row-->
              <v-row id="scrollable">
                <v-col sm="12">
                  <v-card
                    color="grey lighten-2"
                    width="50vh"
                    flat
                    rounded="l"
                    class="my-6"
                  >
                    <v-row align="center">
                      <v-avatar color="primary" size="40" class="ml-6">
                        <v-img
                          src="https://avatars.dicebear.com/api/micah/userrr.svg"
                        ></v-img>
                      </v-avatar>
                      <v-card-subtitle><b>Halo</b></v-card-subtitle>
                    </v-row>
                  </v-card>
                  <v-card
                    color="primary"
                    width="50vh"
                    flat
                    dark
                    align="end"
                    rounded="l"
                    class="my-3"
                    style="margin-left: 45vh"
                  >
                    <v-card-subtitle><b>Halo Jugaa</b></v-card-subtitle>
                  </v-card>
                  <v-card
                    color="primary"
                    width="50vh"
                    flat
                    dark
                    align="end"
                    rounded="l"
                    class="my-3"
                    style="margin-left: 45vh"
                  >
                    <v-card-subtitle><b>Salam Kenal yakk</b></v-card-subtitle>
                  </v-card>
                </v-col>
              </v-row>
              <!-- Chat Row - end -->
              <!-- Chat Text field -->
              <v-row>
                <v-col sm="10" offset-sm="1">
                  <v-row>
                    <v-text-field
                      outlined
                      class="mx-4"
                      dense
                      rounded
                      type="text"
                      placeholder="Sapa Temanmu..."
                    ></v-text-field>
                    <v-btn rounded icon large class="primary">
                      <v-icon class="white--text">mdi-send</v-icon>
                    </v-btn>
                  </v-row>
                </v-col>
              </v-row>
              <!-- Chat Text field - end -->
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
#scrollable {
  height: 58vh;
  position: relative;
  overflow-y: scroll;
}
</style>
