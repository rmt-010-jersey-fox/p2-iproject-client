<template>
  <v-dialog v-model="deleteUserDialog" max-width="80vh" persistent>
    <v-card>
      <v-container>
        <v-card-title>Seriusan di Hapus nih ?</v-card-title>
        <v-btn
          class="mx-4 primary"
          rounded
          depressed
          @click.prevent="deleteUser"
        >
          <v-icon left>mdi-check</v-icon>
          Iyak</v-btn
        >
        <v-btn rounded text depressed @click.prevent="$emit('closeDialog')">
          Ngga dulu deh</v-btn
        >
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DeleteUserDialog",
  props: ["deleteUserDialog"],
  methods: {
    deleteUser() {
      this.$store.dispatch("deleteUser");
    },
  },
};
</script>

<style></style>
