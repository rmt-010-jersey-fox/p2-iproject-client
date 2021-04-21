<template>
  <table class="table">
    <thead>
      <tr>
        <th>Poli</th>
        <th>Dokter</th>
        <th>Tanggal</th>
        <th>Status</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>Poli</th>
        <th>Dokter</th>
        <th>Tanggal</th>
        <th>Status</th>
        <th>Aksi</th>
      </tr>
    </tfoot>

    <tbody>
      <TableRow
        v-for="history in getHistory"
        :key="history.id"
        :history="history"
      />
    </tbody>
  </table>
</template>

<script>
  import TableRow from "./TableRow";
  export default {
    name: "TableHistory",
    components: { TableRow },
    computed: {
      getHistory() {
        return this.$store.state.getHistory;
      },
    },
    created() {
      this.$store.dispatch("getHistory");
    },
  };
</script>

<style></style>
