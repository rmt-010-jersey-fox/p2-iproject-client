<template>
  <v-dialog v-model="friendsDialog" max-width="120vh" persistent>
    <v-container class="white pa-6" scrollable>
      <v-row justify="space-around" align="center" class="my-4">
        <h2>Daftar Teman</h2>
        <v-btn rounded text depressed @click.prevent="$emit('closeDialog')">
          Tutup</v-btn
        >
      </v-row>
      <!-- for starts here -->
      <v-card
        rounded="xl"
        class="my-4"
        flat
        v-for="(user, i) in currentFriend.Friends"
        :key="i"
      >
        <v-row align="center" justify="space-around" class="pa-5">
          <v-avatar color="success" size="70">
            <v-img :src="user.friend.avatar"></v-img>
          </v-avatar>
          <v-card-title>@{{ user.friend.username }}</v-card-title>
        </v-row>
      </v-card>
      <!-- ends here -->
    </v-container>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["friendsDialog"],
  computed: {
    ...mapState(["currentFriend"]),
  },
};
</script>

<style></style>
