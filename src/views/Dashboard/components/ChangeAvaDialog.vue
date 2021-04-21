<template>
  <v-dialog v-model="changeAvaDialog" max-width="80vh" persistent>
    <v-card>
      <v-container>
        <v-card-title>Ganti Avatar</v-card-title>
        <v-text-field
          label="Random Avatar"
          type="text"
          v-model="random"
          prepend-inner-icon="mdi-face-recognition"
          outlined
          rounded
          dense
        >
        </v-text-field>
        <v-card-subtitle
          >*Masukkin random aja gakpapa, ini generate sendiri dari
          Dicebear.com</v-card-subtitle
        >
        <v-btn
          class="mx-4 primary"
          rounded
          depressed
          @click.prevent="changeAva"
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
  name: "ChangeAvaDialog",
  data: () => ({
    random: "",
  }),
  props: ["changeAvaDialog"],
  methods: {
    changeAva() {
      this.$store.dispatch("changeAvatar", { random: this.random });
      this.$emit("closeDialog");
      this.random = "";
    },
  },
};
</script>

<style></style>
