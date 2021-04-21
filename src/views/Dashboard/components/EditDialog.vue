<template>
  <v-dialog v-model="EditDialog" max-width="80vh" persistent>
    <v-card>
      <v-container>
        <v-card-title>Ubah Caption</v-card-title>
        <v-text-field
          label="Caption"
          type="text"
          outlined
          rounded
          v-model="userPost.caption"
        >
        </v-text-field>
        <v-btn
          class="mx-4 primary"
          rounded
          depressed
          @click.prevent="editCaption"
        >
          <v-icon left>mdi-pencil</v-icon>
          Ubah</v-btn
        >
        <v-btn rounded text depressed @click.prevent="$emit('closeDialog')">
          Batalkan</v-btn
        >
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "EditDialog",
  props: ["EditDialog"],
  computed: {
    ...mapState(["userPost"]),
  },
  methods: {
    editCaption() {
      this.$store.dispatch("editCaption");
      this.$emit("closeDialog");
    },
  },
};
</script>

<style></style>
