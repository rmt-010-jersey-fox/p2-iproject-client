<template>
  <div>
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-avatar color="white" size="150">
          <v-img :src="currentFriend.avatar"></v-img>
        </v-avatar>
      </v-row>
      <v-row justify="center">
        <h1 class="warning--text">@{{ currentFriend.username }}</h1>
      </v-row>
      <v-row justify="center" align="center">
        <v-col>
          <h2 class="text-center white--text">Post</h2>
          <h3 class="text-center white--text">
            {{ currentFriend.Posts.length }}
          </h3>
        </v-col>
        <v-col @click.prevent="friendsDialog = true" style="cursor: pointer">
          <h2 class="text-center white--text">Teman</h2>
          <h3 class="text-center white--text">
            {{ currentFriend.Friends.length }}
          </h3>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col sm="3" v-for="(post, i) in currentFriend.Posts" :key="i">
          <v-card color="white" rounded="xl">
            <v-img
              width="300"
              height="250"
              :src="'http://localhost:4321/' + post.filePath"
            ></v-img>
            <v-row class="mt-1" justify="center" align="center">
              <v-card-subtitle>{{ post.caption }}</v-card-subtitle>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <FriendsDialog
      :friendsDialog="friendsDialog"
      @closeDialog="friendsDialog = false"
    ></FriendsDialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FriendsDialog from "./components/FriendsDialog";
export default {
  name: "FriendDashboard",
  data: () => ({
    friendsDialog: false,
  }),
  components: {
    FriendsDialog,
  },
  computed: {
    ...mapState(["currentFriend"]),
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("changeCurrentFriend", { id });
  },
};
</script>

<style></style>
