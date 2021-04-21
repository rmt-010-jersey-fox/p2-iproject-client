<template>
  <div>
    <v-container class="my-6" id="users-page">
      <h1 class="white--text text-center mb-6">Teman-Teman di Sekitarmu</h1>
      <v-row justify="center">
        <v-col sm="7">
          <v-text-field
            label="Cari User"
            type="text"
            prepend-inner-icon="mdi-magnify"
            solo
            rounded
            flat
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <div id="scrollable">
        <v-row
          justify="center"
          class="my-4"
          v-for="(user, i) in allUsers"
          :key="i"
        >
          <v-col sm="8">
            <v-card rounded="xl" flat>
              <v-row align="center" justify="center">
                <v-col sm="3">
                  <v-avatar color="primary" size="100" class="ml-6">
                    <v-img :src="user.avatar"></v-img>
                  </v-avatar>
                </v-col>
                <v-col>
                  <h2 class="primary--text">@{{ user.username }}</h2>
                </v-col>
                <v-col>
                  <v-btn rounded depressed class="mr-2 success">
                    <v-icon></v-icon>
                    <b class="primary--text">Tambah Teman</b>
                  </v-btn>
                  <v-btn rounded depressed class="mr-2 prmary">
                    <b>Profil</b>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UsersPage",
  computed: {
    ...mapState(["allUsers"]),
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style>
#users-page {
  height: 90vh;
  position: relative;
}
#scrollable {
  margin-top: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 75%;
}
</style>
