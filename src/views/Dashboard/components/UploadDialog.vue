<template>
  <v-dialog v-model="UploadDialog" max-width="80vh" persistent>
    <v-card>
      <v-container>
        <v-card-title>Tambah Post</v-card-title>
        <v-file-input
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon="mdi-image"
          label="Media"
          outlined
          rounded
          @change="onFileSelected"
          dense
          chips
        ></v-file-input>
        <v-text-field
          label="Caption"
          type="text"
          v-model="caption"
          prepend-icon="mdi-text"
          outlined
          rounded
          dense
        >
        </v-text-field>
        <v-card-subtitle>*Format Gambar .Jpg atau .Png</v-card-subtitle>
        <v-btn class="mx-4 primary" rounded depressed @click.prevent="upload">
          <v-icon left>mdi-camera</v-icon>
          Post</v-btn
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
  name: "UploadDialog",
  props: ["UploadDialog"],
  data() {
    return {
      caption: "",
      userFile: null,
    };
  },
  methods: {
    upload() {
      this.$emit("closeDialog");
      this.$store.dispatch("upload", {
        caption: this.caption,
        userFile: this.userFile,
      });
      this.caption = "";
      this.userFile = null;
    },
    onFileSelected(file) {
      this.userFile = file;
    },
  },
};
</script>

<style></style>
