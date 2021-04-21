<template>
  <div>
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-avatar color="white" size="150">
          <v-img :src="currentUser.avatar"></v-img>
        </v-avatar>
      </v-row>
      <v-row justify="center">
        <h1 class="warning--text">@{{ currentUser.username }}</h1>
        <v-btn icon class="mt-2 ml-3">
          <v-icon class="white--text" @click.prevent="UserSettingsDialog = true"
            >mdi-account-cog</v-icon
          >
        </v-btn>
      </v-row>
      <v-row justify="center" align="center">
        <v-col>
          <h2 class="text-center white--text">Post</h2>
          <h3 class="text-center white--text">
            {{ userPosts.length }}
          </h3>
        </v-col>
        <v-col align="center">
          <!-- button Add post -->
          <v-btn
            rounded
            depressed
            color="warning"
            @click.prevent="UploadDialog = true"
          >
            <v-icon left class="black--text">mdi-camera</v-icon>
            <strong class="black--text">Tambah Post</strong>
          </v-btn>
          <!-- button Add post end -->
        </v-col>
        <v-col @click.prevent="FriendsDialog = true" style="cursor: pointer">
          <h2 class="text-center white--text">Teman</h2>
          <h3 class="text-center white--text">
            {{ currentUser.Friends.length }}
          </h3>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <!-- Loop post Goes here -->
        <v-col sm="3" v-for="(post, i) in userPosts" :key="i">
          <v-card color="white" rounded="xl" flat>
            <v-img
              width="300"
              height="250"
              :src="'http://localhost:4321/' + post.filePath"
            ></v-img>
            <v-row class="mt-1" justify="center" align="center">
              <v-card-subtitle>{{ post.caption }}</v-card-subtitle>
              <v-btn icon depressed small @click.prevent="editCaption(post.id)">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                icon
                small
                depressed
                color="danger"
                @click.prevent="$store.dispatch('deletePost', { id: post.id })"
              >
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </v-row>
          </v-card>
        </v-col>
        <!-- Loop post Ends here -->
      </v-row>
    </v-container>
    <UploadDialog
      :UploadDialog="UploadDialog"
      @closeDialog="UploadDialog = false"
    ></UploadDialog>
    <EditDialog
      :EditDialog="EditDialog"
      @closeDialog="EditDialog = false"
    ></EditDialog>
    <FriendsDialog
      :FriendsDialog="FriendsDialog"
      @closeDialog="FriendsDialog = false"
    ></FriendsDialog>
    <UserSettingsDialog
      :UserSettingsDialog="UserSettingsDialog"
      @closeDialog="UserSettingsDialog = false"
    ></UserSettingsDialog>
  </div>
</template>

<script>
import UploadDialog from "./components/UploadDialog";
import UserSettingsDialog from "./components/UserSettingsDialog";
import EditDialog from "./components/EditDialog";
import FriendsDialog from "./components/FriendsDialog";
import { mapState } from "vuex";
export default {
  name: "DashboardPage",
  data() {
    return {
      UploadDialog: false,
      EditDialog: false,
      FriendsDialog: false,
      UserSettingsDialog: false,
    };
  },
  components: {
    UploadDialog,
    EditDialog,
    FriendsDialog,
    UserSettingsDialog,
  },
  methods: {
    editCaption(id) {
      this.EditDialog = true;
      this.$store.dispatch("fetchPostById", { id });
    },
  },
  computed: {
    ...mapState(["userPosts", "currentUser"]),
  },
  created() {
    this.$store.dispatch("fetchPosts");
    this.$store.dispatch("changeCurrentUser");
  },
};
</script>

<style></style>
