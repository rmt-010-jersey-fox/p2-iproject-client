<template>
  <tr>
    <td>{{ history.Doctor.Poli.name }}</td>
    <td>{{ history.Doctor.full_name }}</td>
    <td>{{ history.date }}</td>
    <td>{{ getStatus }}</td>
    <td>
      <div class="field is-grouped">
        <div class="control">
          <button
            class="button is-danger is-light"
            @click.prevent="deleteHistory(history.id)"
          >
            Hapus
          </button>
        </div>
        <div class="control">
          <button
            v-if="history.date >= new Date().toISOString()"
            class="button is-link"
            @click.prevent="editHistory(history.id)"
          >
            Ubah
          </button>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
  export default {
    name: "TableRow",
    props: ["history"],
    methods: {
      deleteHistory(id) {
        this.$store.dispatch("deleteHistory", id);
      },
      editHistory(id) {
        this.$store.dispatch("getById", id);
      },
    },
    computed: {
      getStatus() {
        if (this.history.date >= new Date().toISOString()) {
          return "Belum berobat";
        } else {
          return "Sudah berobat";
        }
      },
    },
    created() {
      this.$store.dispatch("getHistory");
    },
  };
</script>

<style></style>
