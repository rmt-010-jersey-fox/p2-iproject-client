<template>
  <v-dialog v-model="UserSettingsDialog" max-width="50vh" persistent>
    <v-card>
      <v-container>
        <v-list dense>
          <v-subheader>PENGATURAN AKUN</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item @click.prevent="changeAvaDialog = true">
              <v-list-item-icon>
                <v-icon>mdi-face-recognition</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Ubah Avatar</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.prevent="changeUsernameDialog = true">
              <v-list-item-icon>
                <v-icon>mdi-at</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Ubah Username</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.prevent="deleteUserDialog = true">
              <v-list-item-icon>
                <v-icon>mdi-delete</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Hapus Akun</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-btn rounded text depressed @click.prevent="$emit('closeDialog')">
          Tutup</v-btn
        >
      </v-container>
    </v-card>
    <ChangeAvaDialog
      :changeAvaDialog="changeAvaDialog"
      @closeDialog="changeAvaDialog = false"
    ></ChangeAvaDialog>
    <ChangeUsernameDialog
      :changeUsernameDialog="changeUsernameDialog"
      @closeDialog="changeUsernameDialog = false"
    ></ChangeUsernameDialog>
    <DeleteUserDialog
      :deleteUserDialog="deleteUserDialog"
      @closeDialog="deleteUserDialog = false"
    ></DeleteUserDialog>
  </v-dialog>
</template>

<script>
import ChangeAvaDialog from "./ChangeAvaDialog";
import ChangeUsernameDialog from "./ChangeUsernameDialog";
import DeleteUserDialog from "./DeleteDialog";
export default {
  data: () => ({
    selectedItem: 1,
    changeAvaDialog: false,
    changeUsernameDialog: false,
    deleteUserDialog: false,
  }),
  props: ["UserSettingsDialog"],
  components: {
    ChangeAvaDialog,
    ChangeUsernameDialog,
    DeleteUserDialog,
  },
};
</script>

<style></style>
