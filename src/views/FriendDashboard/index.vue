<template>
  <div>
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-avatar color="white" size="150">
          <v-img
            src="https://avatars.dicebear.com/api/micah/kienpvm.svg"
          ></v-img>
        </v-avatar>
      </v-row>
      <v-row justify="center">
        <h1 class="warning--text">@FriendUsername</h1>
      </v-row>
      <v-row justify="center" align="center">
        <v-col>
          <h2 class="text-center white--text">Post</h2>
          <h3 class="text-center white--text">2</h3>
        </v-col>
        <v-col>
          <h2 class="text-center white--text">Teman</h2>
          <h3 class="text-center white--text">0</h3>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col sm="3">
          <v-card color="white" rounded="xl">
            <v-img
              width="300"
              height="250"
              src="https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></v-img>
            <v-row class="mt-1" justify="center" align="center">
              <v-card-subtitle>Caption Goes Here</v-card-subtitle>
            </v-row>
          </v-card>
        </v-col>
        <v-col sm="3">
          <v-card color="white" rounded="xl">
            <v-img
              width="300"
              height="250"
              src="https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></v-img>
            <v-row class="mt-1" justify="center" align="center">
              <v-card-subtitle>Caption Goes Here</v-card-subtitle>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FriendDashboard",
  components: {},
};
</script>

<style></style>
