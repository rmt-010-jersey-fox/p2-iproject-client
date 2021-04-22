<template>
  <div>
    <v-container>
      <v-row class="mt-6" justify="center">
        <v-col sm="7">
          <v-card height="70vh" class="white" flat>
            <h2 class="text-center primary--text">Chat Box</h2>
            <v-container>
              <!-- Chat Row-->
              <v-row id="scrollable">
                <v-col sm="12">
                  <v-card
                    color="grey lighten-2"
                    width="65vh"
                    flat
                    rounded="l"
                    class="my-6 ml-6"
                    v-for="(msg, i) in messages"
                    :key="i"
                  >
                    <v-row align="center">
                      <v-avatar color="primary" size="40" class="ml-6">
                        <v-img :src="msg.user.avatar"></v-img>
                      </v-avatar>
                      <v-card-subtitle class="primary--text"
                        >@{{ msg.user.username }}</v-card-subtitle
                      >
                      <v-card-subtitle
                        ><b>{{ msg.message }}</b></v-card-subtitle
                      >
                    </v-row>
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
                      v-model="message"
                      :rules="messageRules"
                      @keyup.enter="sendMessage"
                      required
                    ></v-text-field>
                    <v-btn
                      rounded
                      icon
                      large
                      class="primary"
                      @click.prevent="sendMessage"
                    >
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
import { mapState } from "vuex";
export default {
  name: "ChatPage",
  data: () => ({
    message: "",
    avaliableUsers: [],
    messageRules: [(v) => / /.test(v) || "Ngirim Chat Kosong ?"],
  }),
  computed: {
    ...mapState(["currentUser", "messages"]),
  },
  sockets: {
    broadcastMessage(data) {
      console.log(data);
      this.$store.commit("PUSH_MESSAGE", data);
    },
    avaliableUsers(data) {
      this.avaliableUsers = data;
    },
  },
  methods: {
    sendMessage() {
      const payload = {
        user: this.currentUser,
        message: this.message,
      };
      this.$store.commit("PUSH_MESSAGE", payload);
      this.message = "";
      this.$socket.emit("sendMessage", payload);
    },
  },
  created() {
    this.$store.dispatch("changeCurrentUser");
  },
};
</script>

<style>
#scrollable {
  height: 54vh;
  position: relative;
  overflow-y: scroll;
}
</style>
