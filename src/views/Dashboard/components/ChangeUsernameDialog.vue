<template>
  <v-dialog v-model="changeUsernameDialog" max-width="80vh" persistent>
    <v-card>
      <v-container>
        <v-card-title>Ganti Username</v-card-title>
        <v-text-field
          label="Username"
          type="text"
          v-model="username"
          prepend-inner-icon="mdi-at"
          outlined
          rounded
          dense
        >
        </v-text-field>
        <v-card-subtitle
          >*Username menggambarkan seberapa aesthetic kamu :)</v-card-subtitle
        >
        <v-btn
          class="mx-4 primary"
          rounded
          depressed
          @click.prevent="changeUsername"
        >
          <v-icon left>mdi-check</v-icon>
          Submit</v-btn
        >
        <v-btn rounded text depressed @click.prevent="$emit('closeDialog')">
          Batalkan</v-btn
        >
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ChangeUsernameDialog",
  data: () => ({
    username: "",
  }),
  props: ["changeUsernameDialog"],
  methods: {
    changeUsername() {
      this.$store.dispatch("changeUsername", { username: this.username });
      this.$emit("closeDialog");
      this.username = "";
    },
  },
};
</script>

<style></style>
