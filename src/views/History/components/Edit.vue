<template>
  <section>
    <h1 class="title has-text-centered">Form Ubah Jadwal Berobat</h1>
    <form @submit.prevent="submitEdit">
      <div class="field" style="margin-right: 330px; margin-left: 330px">
        <label class="label">Poli</label>
        <div class="control has-icons-left">
          <div class="select">
            <select v-model="getData.Doctor.Poli.id">
              <option v-for="(poli, i) in getPoli" :key="i" :value="poli.id">
                {{ poli.name }}
              </option>
            </select>
          </div>
          <span class="icon is-small is-left">
            <i class="fas fa-stethoscope"></i>
          </span>
        </div>
      </div>
      <div class="field" style="margin-right: 330px; margin-left: 330px">
        <label class="label">Tanggal Berobat</label>
        <div class="control has-icons-left">
          <input v-model="getData.date" class="input" type="date" />
          <span class="icon is-small is-left">
            <i class="fas fa-calendar"></i>
          </span>
        </div>
      </div>
      <div class="field" style="margin-right: 330px; margin-left: 330px">
        <label class="label">Sesi</label>
        <div class="control has-icons-left">
          <div class="select">
            <select v-model="getData.Doctor.session">
              <option>Pagi</option>
              <option>Siang</option>
              <option>Sore</option>
            </select>
          </div>
          <span class="icon is-small is-left">
            <i class="fas fa-stethoscope"></i>
          </span>
        </div>
      </div>
      <div class="field is-grouped is-grouped-centered px-6 pb-6">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button
            class="button is-link is-light"
            @click.prevent="changePage('/patient/history')"
            id="cancel-login"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    name: "Edit",
    methods: {
      submitEdit() {
        let data = {
          id: this.getData.id,
          PoliId: this.getData.Doctor.Poli.id,
          session: this.getData.Doctor.session,
          date: this.getData.date,
        };
        this.$store.dispatch("submitEdit", data);
      },
      changePage(path) {
        this.$router.push(path);
      },
    },
    computed: {
      getData() {
        return this.$store.state.getById;
      },
      getPoli() {
        return this.$store.state.getPoli;
      },
    },
    created() {
      this.$store.dispatch("getById", this.$route.params.id);
      this.$store.dispatch("getPoli");
    },
  };
</script>

<style></style>
