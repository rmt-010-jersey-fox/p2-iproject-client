<template>
  <v-dialog v-model="FriendsDialog" max-width="120vh" persistent>
    <v-container class="white pa-6" scrollable>
      <v-row justify="space-around" align="center" class="my-4">
        <h2>Daftar Teman</h2>
        <v-btn
          class="success black--text"
          rounded
          depressed
          @click.prevent="$router.push('/users')"
        >
          <v-icon left>mdi-account-search</v-icon>
          Temukan
        </v-btn>
        <v-btn rounded text depressed @click.prevent="$emit('closeDialog')">
          Tutup</v-btn
        >
      </v-row>
      <!-- for starts here -->
      <v-card
        rounded="xl"
        class="my-4"
        flat
        v-for="(user, i) in currentUser.Friends"
        :key="i"
      >
        <v-row align="center" justify="center" class="pa-5">
          <v-avatar color="success" size="70">
            <v-img :src="user.friend.avatar"></v-img>
          </v-avatar>
          <v-card-title>@{{ user.friend.username }}</v-card-title>
          <v-spacer></v-spacer>
          <v-btn
            rounded
            depressed
            class="mr-2"
            @click.prevent="
              $router.push(`/user/${user.friend.id}`).catch(() => {})
            "
          >
            <b>Profil</b>
          </v-btn>
          <v-btn
            rounded
            depressed
            dark
            class="mr-2 danger"
            @click.prevent="
              $store.dispatch('deleteFriend', { id: user.friend.id })
            "
          >
            <b>Hapus</b>
          </v-btn>
        </v-row>
      </v-card>
      <!-- ends here -->
    </v-container>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["FriendsDialog"],
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style></style>
